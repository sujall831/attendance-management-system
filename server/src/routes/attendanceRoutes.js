const router = require("express").Router();
const {
  punchIn,
  punchOut,
  getAttendance,
  validateAttendance,
} = require("../controllers/attendanceController");

const { protect, authorize } = require("../middleware/authMiddleware");

router.post("/punch-in", protect, punchIn);
router.post("/punch-out", protect, punchOut);

router.get("/", protect, getAttendance);

router.put(
  "/validate/:id",
  protect,
  authorize("admin", "manager"),
  validateAttendance
);

module.exports = router;