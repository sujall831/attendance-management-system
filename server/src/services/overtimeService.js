const Overtime = require("../models/Overtime");

exports.getAll = () => Overtime.find().populate("user");