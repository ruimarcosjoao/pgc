import axios from "axios";
import { test } from "vitest";

test("Cria uma nova linha no pgc", async () => {
  const result = await axios.post("http://localhost:8081/add-pgc", {
    description: "Meios Fixos e Investimentos",
    code: "3",
  });

  console.log(result.data);
});
test("Cria muitas linhas no pgc", async () => {
  const result = await axios.post("http://localhost:8081/add-many-pgc", [
    // {
    //   description: "Meios Fixos e Investimentos",
    //   code: "1",
    // },
    {
      description: "Existências",
      code: "2",
    },
    {
      description: "Terceiros",
      code: "3",
    },
    {
      description: "Meios Monetários",
      code: "4",
    },
  ]);

  console.log(result.data);
});
