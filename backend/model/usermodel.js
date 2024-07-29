const mongoose = require("mongoose")
const validator = require('validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error(`email is Invalid`)
            }
        }

    },
    mobile: {
        type: Number,
        minlength: 10,
        maxlength: 10
    },
    password: {
        type: String,
    }
})

const userModel = new mongoose.model("users", userSchema)

module.exports = userModel;
