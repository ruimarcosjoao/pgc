import express, {Response, Request} from 'express'

const app = express()
const PORT = process.env.PORT || 8081

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', async (req: Request, res: Response) => {
    try {
        res.status(200).json({
            msg: 'Hello world'
        })
    } catch (error) {
        res.status(500).json({msg: 'Sorry error in server'})
    }
})

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})