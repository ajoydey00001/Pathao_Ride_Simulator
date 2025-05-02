# 🚕 Pathao Ride Simulator API

A simple REST API for rider/driver onboarding, ride requests, location updates, and ride lifecycle management.

## Base URL

```
http://localhost:5000/api/v1
```

---

## 🧍 Rider Endpoints

### 1. Register Rider

**Request**

```
POST /riders
Content-Type: application/json

{
  "phone": "01710000001",
  "email": "rider1@example.com"
}
```

**Response**

```json
201 Created
{
  "id": "64d8a1f9b2c3f5e9a1b2c3d4",
  "phone": "01710000001",
  "type": "rider"
}
```

---

### 2. Rider Login & Send Location

**Request**

```
POST /riders/login-location
Content-Type: application/json

{
  "phone": "01710000001",
  "longitude": 90.4125,
  "latitude": 23.8103
}
```

**Response**

```json
200 OK
{
  "message": "Rider login location received"
}
```

---

## 🚗 Driver Endpoints

### 3. Register Driver

**Request**

```
POST /drivers
Content-Type: application/json

{
  "phone": "01710000002"
}
```

**Response**

```json
201 Created
{
  "id": "68150a6d9b66387fee60fc30",
  "phone": "01710000002",
  "type": "driver"
}
```

---

### 4. Driver Login (OTP)

**Request**

```
POST /drivers/login
Content-Type: application/json

{
  "phone": "01710000002"
}
```

**Response**

```json
200 OK
{
  "message": "OTP sent successfully"
}
```

> *Note: OTP is logged to console in this demo.*

---

### 5. Driver Send Location

**Request**

```
POST /drivers/location
Content-Type: application/json

{
  "phone": "01710000002",
  "longitude": 90.4125,
  "latitude": 23.8103
}
```

**Response**

```json
200 OK
{
  "message": "Location updated"
}
```

---

## 🛣️ Ride Endpoints

### 6. Request Ride

**Request**

```
POST /rides/request
Content-Type: application/json

{
  "riderId": "64d8a1f9b2c3f5e9a1b2c3d4",
  "pickupLongitude": 90.4125,
  "pickupLatitude": 23.8103,
  "dropoffLongitude": 90.4200,
  "dropoffLatitude": 23.8150
}
```

**Response**

```json
201 Created
{
  "message": "Ride requested",
  "rideId": "64d8b2a4c3d5e6f7a8b9c0d1",
  "driverId": "68150a6d9b66387fee60fc30"
}
```

---

### 7. Accept Ride

**Request**

```
POST /rides/{rideId}/accept
```

**Response**

```json
200 OK
{
  "message": "Ride accepted"
}
```

---

### 8. Start Ride

**Request**

```
POST /rides/{rideId}/start
```

**Response**

```json
200 OK
{
  "message": "Ride started"
}
```

---

### 9. End Ride

**Request**

```
POST /rides/{rideId}/end
```

**Response**

```json
200 OK
{
  "message": "Ride ended"
}
```

---

### 10. Cancel Ride

**Request**

```
POST /rides/{rideId}/cancel
```

**Response**

```json
200 OK
{
  "message": "Ride cancelled"
}
```

---

### 11. Fetch Nearby Rides

**Request**

```
GET /rides/nearby?longitude=90.4125&latitude=23.8103
```

**Response**

```json
200 OK
{
  "rides": [
    {
      "_id": "64d8b2a4c3d5e6f7a8b9c0d1",
      "pickupLocation": { "coordinates": [90.4125, 23.8103] },
      "dropoffLocation": { "coordinates": [90.4200, 23.8150] },
      "status": "requested",
      "rider": {
        "_id": "64d8a1f9b2c3f5e9a1b2c3d4",
        "phone": "01710000001",
        "email": "rider1@example.com"
      }
    }
  ]
}
```

---

## 🚀 Quick Test

1. **Start MongoDB** (locally or via Docker).  
2. `npm install`  
3. `npm run dev` (or `docker-compose up --build`)  
4. Test endpoints in Postman or via `curl`.  

---

> Feel free to customize IDs and payloads as needed.  
> Happy coding! 🚖  
