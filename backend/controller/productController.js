const productModel = require("../model/productModel")
exports.createProduct = async (req, res) => {

    try {
        let { product ,price , desc } = req.body;
        let { filename } = req.file;
    
        let data = new productModel({
            product,
            price,
            desc,
            photo: filename
        })
    
        await data.save()
        res.status(201).json(data)
    } catch (error) {
        res.status(401).json(error)
        
    }
 
   
  
}





exports.getProduct =async (req, res) => {
    try {
        let result = await productModel.find()
        res.status(200).json(result)
    }
    catch (err) {
        res.status(401).json(err, `while getting usr list`)
    }1
}

exports.singleProduct = async (req, res) => {
    let { id } = req.params
    let result = await productModel.findById({ _id: id })
    res.status(200).json(result)
}

exports.updateProduct = async (req, res) => {
    let { product ,price , desc  } = req.body
    let { filename } = req.file;
    try {
        let data = await productModel.findByIdAndUpdate(req.params.id, { ...req.body }, { ...req.file},{ new: true })
        res.status(200).json(data)

    }
    catch (error) {
        res.status(401).json("error")
    }
}

exports.deleteProduct = async (req, res) => {
    let { id } = req.params
    let data = await productModel.findByIdAndDelete({ _id: id })
    res.status(200).json(data)

}
