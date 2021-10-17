import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import router from './router/index.js'
import mongoose from 'mongoose'

const app = express()

await mongoose.connect(`mongodb://localhost`, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
})

app.use(express.json())

app.use('/', router)

app.listen(process.env.PORT, () => {
    console.log(`Server listen on port: ${process.env.PORT}`)
})