import Waste from "../models/Waste.js";

export const addWaste = async (req, res) => {
  try {
    const waste = await Waste.create({
      wasteType: req.body.wasteType,
      weight: req.body.weight,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      image: req.file ? req.file.filename : "",
    });

    res.status(201).json({
      success: true,
      message: "Waste Record Added",
      data: waste,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const getWaste = async (req, res) => {
  try {

    const waste = await Waste.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: waste.length,
      data: waste,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const verifyWaste = async (req, res) => {
  try {

    const waste = await Waste.findByIdAndUpdate(
      req.params.id,
      { status: "Verified" },
      { new: true }
    );

    res.json({
      success: true,
      message: "Waste Verified",
      data: waste,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const deleteWaste = async (req, res) => {
  try {

    await Waste.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Waste Deleted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};