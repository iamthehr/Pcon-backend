const express = require("express");

const {
  getAchievements,
  createAchievement,
  updateAchievement,
  deleteAchievement,
} = require("../controllers/achievementControllers");
const router = express.Router();

router.route("/").get(getAchievements).post(createAchievement);
router.route("/:id").patch(updateAchievement).delete(deleteAchievement);
router.route("/createAchievement").post(createAchievement);
router.route("/updateAchievement/:id").patch(updateAchievement);
module.exports = router;
