const mongoose = require("mongoose")


const productSchema = mongoose.Schema({
    product: {
        type: String,
    },

    price: {
        type: Number,
    },

    desc: {
        type: String,
    },

    photo: {
        type: String,
        //required: true
    }

})

const productModel = new mongoose.model("products", productSchema)

module.exports = productModel;
