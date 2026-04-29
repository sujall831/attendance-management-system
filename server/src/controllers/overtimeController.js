const Overtime = require("../models/Overtime");

exports.requestOvertime = async (req, res) => {
  try {
    const { hours, reason } = req.body;

    const overtime = await Overtime.create({
      user: req.user._id,
      hours,
      reason,
      status: "pending",
    });

    res.status(201).json(overtime);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOvertimeRequests = async (req, res) => {
  try {
    const data = await Overtime.find()
      .populate("user")
      .sort({ createdAt: -1 });

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateOvertimeStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const overtime = await Overtime.findById(req.params.id);

    if (!overtime) {
      return res.status(404).json({ message: "Not found" });
    }

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    overtime.status = status;

    await overtime.save();

    res.json(overtime);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};