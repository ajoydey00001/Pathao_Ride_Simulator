import express from 'express';

import { registerDriver, loginDriver , updateLocation, verifyDriverOtp } from '../controller/driverController.js';

const router = express.Router();


router.use(express.json());


router.post("/", registerDriver);
router.post("/login", loginDriver);
router.post("/verifyotp", verifyDriverOtp);
router.post("/location", updateLocation);


export default router;
