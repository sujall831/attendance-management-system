const Attendance = require("../models/Attendance");

exports.getAll = () => Attendance.find().populate("user");