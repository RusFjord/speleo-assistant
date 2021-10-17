import express from 'express'

import User from '../../models/Users.js'

const usersRouter = express.Router()

usersRouter.get('/', (req, res) => {
    User.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

usersRouter.post('/', async (req, res) => {
    console.log(req.body)
    const {login, name, password} = req.body
    const user = new User({
        login,
        name,
        password
    })
    await user.save()
    res.send(user)
})

export default usersRouter