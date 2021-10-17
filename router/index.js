import express from 'express'

import apiRouter from './api/index.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello world!')
})

router.use('/api', apiRouter)

export default router