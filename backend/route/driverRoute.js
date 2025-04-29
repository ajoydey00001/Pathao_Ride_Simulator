import express from 'express';
// import Product from '../models/Product.js';
// import mongoose from 'mongoose';
// import {createProduct , getProducts, updateProduct , deleteProduct} from '../controller/productController.js';
import { registerDriver, loginDriver , updateLocation, verifyDriverOtp } from '../controller/driverController.js';

const router = express.Router();

// export default router;



router.use(express.json());


router.post("/", registerDriver);
router.post("/login", loginDriver);
router.post("/verifyotp", verifyDriverOtp);
router.post("/location", updateLocation);


export default router;
