import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('users', userSchema)

export default User