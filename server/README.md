# 📊 Attendance Management System (Backend)

## 🚀 Overview
This is a **Node.js + Express + MongoDB backend API** for a full-stack Attendance Management System.

It handles:
- Authentication (JWT 🔐)
- Role-based access control (RBAC)
- Attendance tracking (Punch In / Out)
- Selfie verification 📸
- Overtime workflow ⏱️
- Admin validation system

---

## ⚙️ Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Winston / Morgan Logging
- REST API Architecture

---

## 🧩 Features

### 🔐 Authentication
- User login / register
- JWT token generation
- Role-based authorization

### 🕒 Attendance System
- Punch In / Punch Out
- Automatic working hours calculation
- Selfie storage (base64 / URL)
- Geo-location tracking

### 📊 Admin & Manager
- Attendance validation (Valid / Invalid)
- Add remarks
- View employee logs
- System-wide monitoring

### ⏱️ Overtime System
- Employee request overtime
- Manager/Admin approval or rejection
- Status tracking

---

## 📁 Backend File Structure
attendance-system/
│
├────────────────── client/                         # React (Vite) Frontend
│
│
├── server/                         # Node.js + Express Backend
│   ├── node_modules/
│   ├── src/
│   │   │
│   │   ├── config/
│   │   │   ├── db.js               # MongoDB connection
│   │   │   └── logger.js           # Winston/Morgan logging
│   │   │
│   │   ├── constants/
│   │   │   └── roles.js            # RBAC roles
│   │   │
│   │   ├── controllers/
│   │   │   ├── attendanceController.js
│   │   │   ├── authController.js
│   │   │   ├── overtimeController.js
│   │   │   └── userController.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js   # JWT + role protection
│   │   │   ├── errorMiddleware.js
│   │   │   └── uploadMiddleware.js # Selfie handling
│   │   │
│   │   ├── models/
│   │   │   ├── Attendance.js
│   │   │   ├── Overtime.js
│   │   │   └── User.js
│   │   │
│   │   ├── routes/
│   │   │   ├── attendanceRoutes.js
│   │   │   ├── authRoutes.js
│   │   │   ├── overtimeRoutes.js
│   │   │   └── userRoutes.js
│   │   │
│   │   ├── services/
│   │   │   ├── attendanceService.js
│   │   │   └── overtimeService.js
│   │   │
│   │   ├── utils/
│   │   │   ├── calculateHours.js   # Working hours logic
│   │   │   ├── generateToken.js    # JWT
│   │   │   ├── seedUsers.js
│   │   │   └── validators.js
│   │   │
│   │   ├── app.js                  # Express app setup
│   │   └── server.js               # Entry point
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
└─────────────────────────── END/


---

## 🔐 Authentication Flow
1. User registers/login
2. JWT token generated
3. Token sent in headers
4. Middleware verifies token
5. Role-based access enforced

---

## 📸 Attendance Flow
1. Employee punches in
2. Server stores UTC timestamp
3. Punch out calculates working hours
4. Status assigned:
   - Completed (≥ 8 hrs)
   - Incomplete (< 8 hrs)

---

## 📊 Overtime Workflow
- Employee requests overtime
- Manager/Admin approves or rejects
- Status updated in DB

---

## 🧪 API Endpoints

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### Attendance
- POST `/api/attendance/punch-in`
- POST `/api/attendance/punch-out`
- GET `/api/attendance`

### Overtime
- POST `/api/overtime`
- GET `/api/overtime`
- PUT `/api/overtime/:id`

---

## 🚀 Deployment
- Backend: Render / Railway / Cyclic
- MongoDB: MongoDB Atlas

---

## 👨‍💻 Author
**Sujal Kumrawat**

📍 India  
📧 sujalkumrawat831@gmail.com  
🔗 LinkedIn: LinkedIn Profile  

---

## 🙏 Acknowledgment
Thanks to **D-Table Analytics Pvt Ltd** for the opportunity.

This project demonstrates:
- Real-world backend architecture
- Secure authentication system
- Scalable REST API design
- Enterprise workflow logic

---

## ⭐ Status
✔ Completed before deadline  
✔ Fully functional backend  
✔ Production-ready APIs