const express = require("express");
const cors = require("cors");
const logger = require("./config/logger");

const app = express();

const cors = require("cors");

app.use(cors({
  origin: "*",
  credentials: true
}));

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(logger);

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));
app.use("/api/overtime", require("./routes/overtimeRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Attendance Management Backend Running 🚀",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is healthy 🚀",
  });
});

module.exports = app;