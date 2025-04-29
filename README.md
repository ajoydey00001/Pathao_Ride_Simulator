# 🚕 Pathao Ride Simulator API

A simplified backend simulation of Pathao's ride request system. This project demonstrates RESTful API design for rider and driver onboarding, ride requesting, driver assignment, and trip flow, built using Node.js, Express, MongoDB, and Docker.

---

## 📦 Tech Stack

- **Node.js + Express** – API server
- **MongoDB + Mongoose** – Data persistence & geo queries
- **Docker + Docker Compose** – Environment setup
- **Mocha + Supertest** – Lightweight testing framework
- **Postman** - to test all API calls

---

## 📂 Features

- Rider registration and login with location
- Driver registration, login (via OTP simulation), and location updates
- Driver-to-rider matching based on proximity (within 5 km)
- Trip lifecycle: request → accept → start → end/cancel
- API-only; designed for future frontend integration


---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/ajoydey00001/Pathao_Ride_Simulator.git
cd Pathao_Ride_Simulator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=5000
MONGO_URI=mongodb+srv://ajoydey00001:Ajoy_Dey247@cluster0.h43x44y.mongodb.net/Pathao?retryWrites=true&w=majority&appName=Cluster0
```

> 💡 You can also use MongoDB Atlas. Replace `MONGO_URI` accordingly.

---

## 🐳 Run with Docker (Recommended)

Make sure Docker is installed and running.

```bash
docker-compose up --build
```

> The API will be available at: `http://localhost:5000`

---

## 💻 Run Locally Without Docker

Start MongoDB locally, then:

```bash
npm run dev
```

> Uses `nodemon` for auto-reloading

---

## ✅ API Endpoints

### 🧍 Rider

| Method | Endpoint                         | Description                  |
|--------|----------------------------------|------------------------------|
| POST   | `/api/riders`                 | Register rider               |
| POST   | `/api/riders/login`  | Send rider login  |

### 🚗 Driver

| Method | Endpoint                         | Description                  |
|--------|----------------------------------|------------------------------|
| POST   | `/api/drivers`                | Register driver              |
| POST   | `/api/drivers/login`          | Simulate OTP login           |
| POST   | `/api/drivers/location`       | Send live location           |

### 🛣️ Ride

| Method | Endpoint                         | Description                     |
|--------|----------------------------------|---------------------------------|
| POST   | `/api/rides/request`          | Request a ride                  |
| POST   | `/api/rides/:id/accept`       | Driver accepts ride             |
| POST   | `/api/rides/:id/start`        | Driver starts ride              |
| POST   | `/api/rides/:id/end`          | Driver ends ride                |
| POST   | `/api/rides/:id/cancel`       | Rider cancels ride              |
| GET    | `/api/rides/nearby`           | Driver pulls nearby requests    |

---

## 🧪 Run Tests

We use **Mocha + Supertest** for API testing.

```bash
npm test
```

---

## 📜 Assumptions

- Rider and Driver are authenticated only via phone number (OTP simulated).
- Coordinates (latitude/longitude) are used for ride matching (not full addresses).
- No real SMS/OTP or payment integration included.
- MongoDB must be running locally or via Docker.

---

## 🧩 System Design Diagram

![System Design Diagram](System_Diagram.png)




