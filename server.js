import express from 'express'
import cors from 'cors'
import connect from "./models/index.js"
import dotenv from 'dotenv'
import productRoute from './routes/productRoute.js'

dotenv.config()
connect

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/product', productRoute)

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})