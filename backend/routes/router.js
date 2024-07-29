const express = require("express");
const router = new express.Router();
const controllers = require('../controller/userController')
const ProductController = require("../controller/productController")
const uploads = require("../helper/multerConfig")


router.post("/user/register", controllers.userRegister)

router.get("/userlist", controllers.getUser)

router.get("/user/:id", controllers.singleuser)

router.post("/userupdate/:id", controllers.updateuser)

router.post("/deleteuser/:id", controllers.deleteuser)

router.post("/createProduct", uploads,ProductController.createProduct)

router.get("/getproducts", ProductController.getProduct)

// router.post("/deleteProduct/:id", ProductController.deleteProduct)

// router.get("/singleProduct/:id", ProductController.singleProduct)

// router.post("/updateProduct/:id", ProductController.updateProduct)

// router.post('/api/login', async (req, res) => {
//     const { name , password } = req.body;
  
//     // Check if user exists
//     const user = await User.findOne({ name  });
//     if (!user) {
//       return res.status(400).json({ msg: 'Invalid credentials' });
//     }
  
//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: 'Invalid credentials' });
//     }
  
//     res.json({ msg: 'Login successful', user: { name : user.name  } });
//   });

module.exports = router;