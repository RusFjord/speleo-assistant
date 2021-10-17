import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import router from './router/index.js'

const app = express()

app.use('/', router)

app.listen(process.env.PORT, () => {
    console.log(`Server listen on port: ${process.env.PORT}`)
})