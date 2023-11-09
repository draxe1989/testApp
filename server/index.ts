import {config} from "dotenv"
import express from "express"
import cors from "cors"
import router from "./router"

config()
const PORT = process.env.PORT || "7000"


const app = express()
app.use(cors())
app.use(express.json())
app.use("/", router)

app.listen(PORT, async () => {
    try {
        console.log("SERVER START ON PORT " + PORT)
    } catch (e) {
        console.log(e)
    }
})

