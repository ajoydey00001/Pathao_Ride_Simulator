import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
// import Product from './models/Product.js';
// import ProductRoute from './route/productRoute.js';
import riderRoute from './route/riderRoute.js';
import driverRoute from './route/driverRoute.js';
import rideRoute from './route/rideRoute.js';

dotenv.config();


const app = express();

app.use(express.json());

// app.use("/api/products", ProductRoute);

app.use("/api/riders",riderRoute);
app.use("/api/drivers",driverRoute);
app.use("/api/rides",rideRoute);



// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// console.log(process.env.MONGO_URL);

app.listen(5000, () => {
    connectDB();
    console.log('Server is running on port 5000');
    }
);
