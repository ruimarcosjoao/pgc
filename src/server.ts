import express, { Response, Request, NextFunction } from "express";
import {
  connection,
  pgcDatabase,
  pgcSegundaCamadaDatabase,
} from "./database/connection";
import { z, AnyZodObject } from "zod";

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dataSchema = z.object({
  body: z.object({
    fullName: z.string({
      required_error: "Full name is required",
    }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email("Not a valid email"),
  }),
});

const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      return res.status(400).json(error);
    }
  };

app.get("/", async (req: Request, res: Response) => {
  try {
    const pgc = await pgcDatabase.findMany();
    res.status(200).json({
      msg: "Hello world",
      status: 200,
      pgc,
    });
  } catch (error) {
    res.status(500).json({ msg: "Sorry error in server" });
  }
});

app.get("/pgc", async (req: Request, res: Response) => {
  try {
    const pgc = await pgcDatabase.findMany({
      
      include: {
        subcamada:{
          include: {
            subcamada: {
              include: {
                subcamada: true
              }
            }
          }
        }
      }
    });

    return res.status(200).json({ pgc, msg: "with pgc" });
  } catch (error) {
    console.error(error);
  }
});

app.post("/add-pgc", async (req: Request, res: Response) => {
  try {
    const { description, code } = req.body;
    const pgc = await pgcDatabase.findFirst({
      where: {
        OR: [{ description }, { code }],
      },
      include: {
        subcamada: true,
      },
    });

    if (!pgc) {
      const pgcCreate = await pgcDatabase.create({ data: req.body });
      return res.status(201).json(pgcCreate);
    } else {
      return res.status(200).json({ pgc, msg: " founded" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error  on server" });
  }
});

app.post("/add-many-pgc", async (req: Request, res: Response) => {
  try {
    const body: { description: string; code: string }[] = req.body;
    const descriptionValues = body.map((el) => ({
      description: el.description,
    }));
    const codesValues = body.map((el) => ({ code: el.code }));
    // console.log([...codesValues, ...descriptionValues]);

    const pgc = await pgcDatabase.findMany({
      where: {
        OR: [...codesValues, ...descriptionValues],
      },
    });

    if (pgc.length === 0) {
      const pgcCreateNewData = await pgcDatabase.createMany({
        data: body,
      });

      return res
        .status(201)
        .json({ pgcCreateNewData, msg: "new datas created" });
    }

    return res.status(302).json({ msg: "One of your datas just is created" });

    res.status(200).json(pgc);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error in server" });
  }
});

app.post('/subcamada/:id', async (req: Request, res: Response) => {
  try {
    const body = req.body
    const segundaCamadaPgc = await pgcSegundaCamadaDatabase.create({
      data: body
    })
    res.status(200).json({msg: 'Criada com sucesso', segundaCamadaPgc})
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error in server" });
  }
})
app.post("/post", validate(dataSchema), async (req: Request, res: Response) => {
  try {
    const body = req.body;
    return res.status(200).json(body);
  } catch (error) {
    // console.log(error)
  }
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
