const Attendance = require("../models/Attendance");
const { calculateHours } = require("../utils/calculateHours");

exports.punchIn = async (req, res) => {
  try {
    const { selfie, lat, lng } = req.body;

    const activeSession = await Attendance.findOne({
      user: req.user._id,
      punchOutTime: null,
    });

    if (activeSession) {
      return res.status(400).json({
        message: "You already have an active session",
      });
    }

    const now = new Date();

    const record = await Attendance.create({
      user: req.user._id,

      punchInTime: now,

      punchInTimeIST: now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),

      selfie: selfie || null,

      location: {
        lat: lat || null,
        lng: lng || null,
      },
    });

    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.punchOut = async (req, res) => {
  try {
    const record = await Attendance.findOne({
      user: req.user._id,
      punchOutTime: null,
    });

    if (!record) {
      return res.status(400).json({
        message: "No active session found",
      });
    }

    const now = new Date();

    record.punchOutTime = now;

    record.punchOutTimeIST = now.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    record.totalHours = calculateHours(
      record.punchInTime,
      record.punchOutTime
    );

    record.status =
      record.totalHours >= 8 ? "Completed" : "Incomplete";

    await record.save();

    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    let query = {};

    if (req.user.role === "employee") {
      query.user = req.user._id;
    }

    const data = await Attendance.find(query)
      .populate("user")
      .sort({ createdAt: -1 });

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.validateAttendance = async (req, res) => {
  try {
    const { status, remarks } = req.body;

    const record = await Attendance.findById(req.params.id);

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    record.validationStatus = status;
    record.remarks = remarks || "";

    await record.save();

    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};