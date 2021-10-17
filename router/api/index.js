import express from 'express'

import usersRouter from './users.js'

const apiRouter = express.Router()

apiRouter.get('/', (req, res) => {
    res.send('Hello from api!')
})

apiRouter.use('/users', usersRouter)

export default apiRouter