const achievement = require("../models/achievementsModel");

exports.getAchievements = async (req, res) => {
  try {
    const achievements = await achievement.find();
    res.status(200).json({
      status: "success",
      results: achievements.length,
      data: {
        achievements,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.createAchievement = async (req, res) => {
  try {
    const newAchievement = await achievement.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        achievement: newAchievement,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.deleteAchievement = async (req, res) => {
  try {
    await achievement.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.updateAchievement = async (req, res) => {
  try {
    const updatedAchievement = await achievement.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        achievement: updatedAchievement,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
    });
  }
};
