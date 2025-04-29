# Pathao_Ride_Simulator


This project is a basic Ride Simulator backend built with **Node.js**, **Express.js**, **MongoDB**, and containerized with **Docker**.

## Features

- Rider Registration
- Driver Registration + OTP Login
- Driver Ping Location (live)
- Rider Requests Ride (auto-matches nearest driver)
- Driver Accept, Start, End or Cancel Rides

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Jest + Supertest (Unit Testing)
- Docker + Docker Compose

## Installation

```bash
# Clone the repository
git clone <repo-url>

# Navigate into the project
cd ride-simulator

# Install dependencies
npm install

# Create .env file
PORT=5000
MONGO_URI=mongodb+srv://ajoydey00001:Ajoy_Dey247@cluster0.h43x44y.mongodb.net/Pathao?retryWrites=true&w=majority&appName=Cluster0

# Run the server locally
npm run dev
