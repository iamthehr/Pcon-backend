const event = require("../models/eventsModel");

exports.getEvents = async (req, res) => {
  try {
    const events = await event.find();
    res.status(200).json({
      status: "success",
      results: events.length,
      data: {
        events,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const newEvent = await event.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        event: newEvent,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await event.findByIdAndDelete(req.params.id);
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
exports.updateEvent = async (req, res) => {
  try {
    const updatedEvent = await event.findByIdAndUpdate(
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
        event: updatedEvent,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
    });
  }
};
