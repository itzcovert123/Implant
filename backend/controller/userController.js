const userModel = require("../model/usermodel")
const { hashPassword } = require('../helper/authHelper')

exports.userRegister = async (req, res) => {
    const { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password) {
        res.status(401).json("all inputs are required")
    }

    try {
        let preuser = await userModel.findOne({ email })

        if (preuser) {
            res.status(401).json('user already exist')
        }

        const hashedPassword = await hashPassword(password)

        let userData = new userModel({
            name,
            email,
            mobile,
            password: hashedPassword
        }
        );
        await userData.save()
        res.status(200).json(userData)
    } catch (error) {
        res.json(401, 'error while user registration')
    }

}

exports.getUser = async (req, res) => {
    try {
        let data = await userModel.find()
        res.status(200).json(data)
    }
    catch (err) {
        res.status(401).json(err, `while getting usr list`)
    }
}

exports.singleuser = async (req, res) => {
    let { id } = req.params
    let result = await userModel.findById({ _id: id })
    res.status(200).json(result)
}

exports.updateuser = async (req, res) => {
    let { name, email, mobile } = req.body

    try {
        let data = await userModel.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
        res.status(200).json(data)

    }
    catch (error) {
        res.status(401).json("error")
    }
}

exports.deleteuser = async (req, res) => {
    let { id } = req.params
    let data = await userModel.findByIdAndDelete({ _id: id })
    res.status(200).json(data)

}





