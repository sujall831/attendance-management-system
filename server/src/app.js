const express = require("express");
const cors = require("cors");
const logger = require("./config/logger");

const app = express();

app.use(cors({
  origin: "*",
  credentials: true
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(logger);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is healthy 🚀",
  });
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Attendance Management Backend Running 🚀",
  });
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));
app.use("/api/overtime", require("./routes/overtimeRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});

module.exports = app;