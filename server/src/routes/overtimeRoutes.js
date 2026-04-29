const router = require("express").Router();

const {
  requestOvertime,
  getOvertimeRequests,
  updateOvertimeStatus,
} = require("../controllers/overtimeController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

router.post("/", protect, authorize("employee"), requestOvertime);

router.get("/", protect, authorize("manager", "admin"), getOvertimeRequests);

router.put(
  "/:id",
  protect,
  authorize("manager", "admin"),
  updateOvertimeStatus
);

module.exports = router;