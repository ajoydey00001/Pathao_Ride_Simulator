# 🚕 Pathao Ride Simulator API

A simple REST API for rider/driver onboarding, ride requests, location updates, and ride lifecycle management.

## Base URL

```
http://localhost:5000/api/
```

---

## 🧍 Rider Endpoints

### 1. Register Rider

**Request**

```
POST "http://localhost:5000/api/riders/register"
Content-Type: application/json


  {
    "phone": "01877555851", "email": "puja@xyz.com"
 }

```

**Response**

```json
201 Created
{
    "id": "681509d541c97cb5e047decd",
    "phone": "01877555851",
    "type": "rider"
}
```

---

### 2. Rider Login & Send Location

**Request**

```
POST "http://localhost:5000/api/riders/login"
Content-Type: application/json

{ "phone": "01877555851", 
    "longitude" : "90.4125",
    "latitude": "23.8103"
 }
```

**Response**

```json
200 OK
{
  "message": "Rider successfully login"
}
```

---

## 🚗 Driver Endpoints

### 3. Register Driver

**Request**

```
POST "http://localhost:5000/api/drivers/register"
Content-Type: application/json

{ "phone": "01111111111" ,
  "email" : "driver2@gmail.com"

}
```

**Response**

```json
201 Created
{
    "id": "68150a6d9b66387fee60fc30",
    "phone": "01111111111",
    "type": "driver"
}
```

---

### 4. Driver Login (OTP)

**Request**

```
POST "http://localhost:5000/api/drivers/login"
Content-Type: application/json

{
  "phone": "01827390358"
 }
```

**Response**

```json
200 OK
{
  "message": "OTP sent to  01827390358 : 350848"
}
```

### 5. Verify OTP

**Request**

```
POST "http://localhost:5000/api/drivers/verifyotp"
Content-Type: application/json

{ "phone": "01827390358",
    "otp" : "350848"
 }
```

**Response**

```json
200 OK
{
    "message": "OTP verified successfully and successfully login"
}
```

### 6. Driver continuously pings his current location in every 30 seconds

**Request**

```
POST "http://localhost:5000/api/drivers/updatelocation"
Content-Type: application/json

{ "phone" : "01827390358",
    "longitude" : "90.4125",
    "latitude": "23.8103"
 }
```

**Response**

```json
200 OK
{
    "message": "Location updated and driver is online"
}
```

---

## 🛣️ Ride Endpoints

### 7. Request Ride

**Request**

```
POST "http://localhost:5000/api/rides/request"
Content-Type: application/json

{
  "riderId": "681509d541c97cb5e047decd",   // The Rider's MongoDB _id
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
    "rideId": "68150fe63a904afc14110abe",
    "driverId": "68113c7a83a8f6f37dbb8d25"
}
```

---

### 8. Accept Ride

**Request**

```
POST "http://localhost:5000/api/rides/68150fe63a904afc14110abe/accept"
Content-Type: application/json

{
    "driverId" : "68113c7a83a8f6f37dbb8d25"
}
```

**Response**

```json
200 OK
{
  "message": "Ride accepted"
}
```

---

### 9. Start Ride

**Request**

```
POST "http://localhost:5000/api/rides/68150fe63a904afc14110abe/start"
```

**Response**

```json
200 OK
{
  "message": "Ride started"
}
```

---

### 10. End Ride

**Request**

```
POST "http://localhost:5000/api/rides/68150fe63a904afc14110abe/end"
```

**Response**

```json
200 OK
{
  "message": "Ride ended"
}
```

---

### 11. Cancel Ride

**Request**

```
POST "http://localhost:5000/api/rides/68150fe63a904afc14110abe/cancel"
```

**Response**

```json
200 OK
{
  "message": "Ride cancelled"
}
```

---

### 12. Fetch Nearby Rides

**Request**

```
GET "http://localhost:5000 /api/rides/nearby?longitude=90.4125&latitude=23.8103"
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
      "status":  "requested",
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
4. Test endpoints in Postman .  

---

> Feel free to customize IDs and payloads as needed.  
> Happy coding! 🚖  
