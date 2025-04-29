import express from 'express';
// import Product from '../models/Product.js';
// import mongoose from 'mongoose';
// import {createProduct , getProducts, updateProduct , deleteProduct} from '../controller/productController.js';
import { registerDriver, loginDriver , updateLocation } from '../controller/driverController.js';

const router = express.Router();

// export default router;



router.use(express.json());
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
// router.post("/", createProduct);

// router.get("/", getProducts);
// router.put("/:id", updateProduct);

// router.delete("/:id", deleteProduct);

router.post("/", registerDriver);
router.post("/login", loginDriver);
router.post("/location", updateLocation);


export default router;
