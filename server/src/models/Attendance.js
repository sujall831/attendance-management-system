const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },


    punchInTime: {
      type: Date,
      required: true,
    },

    punchOutTime: {
      type: Date,
      default: null,
    },

    punchInTimeIST: {
      type: String,
    },

    punchOutTimeIST: {
      type: String,
    },

    selfie: {
      type: String,
      default: null,
    },

    location: {
      lat: Number,
      lng: Number,
    },

    totalHours: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["Completed", "Incomplete"],
      default: "Incomplete",
    },

    validationStatus: {
      type: String,
      enum: ["pending", "valid", "invalid"],
      default: "pending",
    },

    remarks: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Attendance", attendanceSchema);