// src/app.js
import express from 'express';
import riderRoute from './route/riderRoute.js';
import driverRoute from './route/driverRoute.js';
import rideRoute from './route/rideRoute.js';

const app = express();
app.use(express.json());

app.use('/api/riders',  riderRoute);
app.use('/api/drivers', driverRoute);
app.use('/api/rides',   rideRoute);

export default app;
