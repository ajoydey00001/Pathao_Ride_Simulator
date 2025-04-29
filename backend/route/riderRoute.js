import express from 'express';
// import Product from '../models/Product.js';
// import mongoose from 'mongoose';
// import {createProduct , getProducts, updateProduct , deleteProduct} from '../controller/productController.js';
import { registerRider , riderLogin } from '../controller/riderController.js';

const router = express.Router();

// export default router;



router.use(express.json());
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
router.post("/", registerRider);
router.post("/login", riderLogin);
// router.get("/", getProducts);
// router.put("/:id", updateProduct);

// router.delete("/:id", deleteProduct);

export default router;
