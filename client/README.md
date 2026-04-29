# 📊 Attendance Management System (Frontend)

## 🚀 Project Overview
This is a **React (Vite) + Redux Toolkit + RTK Query** based frontend for a full-stack Attendance Management System.

It supports:
- Role-based dashboards (Employee / Manager / Admin)
- Live selfie attendance system 📸
- Geo-location tracking 🌍
- Overtime request workflow ⏱️
- Admin validation & reporting system 📊

---

## ⚙️ Tech Stack
- React.js (Vite ⚡)
- Redux Toolkit + RTK Query
- Tailwind CSS 🎨
- React Router DOM
- Camera API (WebRTC 📸)
- Geolocation API 🌍

---

## 🧩 Features

### 👨‍💼 Employee
- Punch In / Punch Out
- Live selfie capture 📸
- Location tracking
- Overtime request system

### 🧑‍💼 Manager
- Team attendance view
- Overtime approval/rejection
- Attendance validation

### 🧑‍💻 Admin
- Full system dashboard
- User management
- Attendance verification
- Reports & analytics

---

## 📁 Frontend File Structure
attendance-system/
│
├── client/                         # React (Vite) Frontend
│   ├── node_modules/
│   ├── src/
│   │   │
│   │   ├── app/
│   │   │   └── store.js            # Redux Toolkit store
│   │   │
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   │   └── AdminLayout.jsx
│   │   │   │
│   │   │   ├── attendance/
│   │   │   │   └── CameraCapture.jsx   # Selfie capture (core feature)
│   │   │   │
│   │   │   └── layout/
│   │   │       ├── EmployeeLayout.jsx
│   │   │       └── ProtectedRoute.jsx  # RBAC protection
│   │   │
│   │   ├── features/               # RTK Query APIs
│   │   │   ├── attendance/
│   │   │   │   └── attendanceApi.js
│   │   │   ├── auth/
│   │   │   │   └── authApi.js
│   │   │   ├── overtime/
│   │   │   │   └── overtimeApi.js
│   │   │   └── users/
│   │   │       └── userApi.js
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useCamera.js        # Camera integration
│   │   │   └── useLocation.js      # Geolocation capture
│   │   │
│   │   ├── pages/
│   │   │   ├── Admin/
│   │   │   │   ├── Attendance.jsx
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── Reports.jsx
│   │   │   │   └── Users.jsx
│   │   │   │
│   │   │   ├── Auth/
│   │   │   │   └── AuthPage.jsx
│   │   │   │
│   │   │   ├── Employee/
│   │   │   │   ├── Attendance.jsx
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   └── Overtime.jsx
│   │   │   │
│   │   │   └── Manager/
│   │   │       ├── Dashboard.jsx
│   │   │       ├── OvertimeRequests.jsx
│   │   │       └── TeamAttendance.jsx
│   │   │
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx       # Central routing
│   │   │
│   │   ├── services/
│   │   │   └── api.js              # Base API config
│   │   │
│   │   ├── utils/
│   │   │   └── formatTime.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.cjs
│   ├── eslint.config.js
│   └── README.md
│
├──────────── server/                         # Node.js + Express Backend


---

## 🔐 Authentication Flow
1. User logs in/registers
2. JWT token stored in localStorage
3. Role-based routing applied
4. ProtectedRoute blocks unauthorized access

---

## 📸 Core Feature (Attendance System)
- Live camera capture using browser API
- Geolocation tracking
- Punch In / Punch Out timestamps
- Working hours calculation (8-hour rule)

---

## 🚀 Deployment
- Frontend: Vercel / Netlify
- Backend: Render / Railway

---

## 👨‍💻 Author
**Sujal Kumrawat**  
📍 India  
📧 sujalkumrawat831@gmail.com  
🔗 LinkedIn: LinkedIn Profile  

---

## 🙏 Acknowledgment
Special thanks to **D-Table Analytics Pvt Ltd** for providing this real-world MERN assessment opportunity.

This project demonstrates:
- Full-stack architecture understanding
- Scalable React patterns
- Role-based enterprise workflow
- Real-world attendance system logic

---

## ⭐ Status
✔ Completed before deadline  
✔ Fully functional frontend  
✔ Production-ready architecture