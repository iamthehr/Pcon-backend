const express = require("express");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventControllers");
const router = express.Router();

router.route("/").get(getEvents).post(createEvent);
router.route("/:id").patch(updateEvent).delete(deleteEvent);
router.route("/createEvent").post(createEvent);
router.route("/updateEvent/:id").patch(updateEvent);
module.exports = router;
