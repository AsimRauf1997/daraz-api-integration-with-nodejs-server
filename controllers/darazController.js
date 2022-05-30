const axios = require("axios");
const Categories = require("../models/Categories");
const getDarazCategories = async (req, res) => {
  try {
    const { data } = await axios.get(process.env.DARAZ_CATEGORIES_URL);
    const body = data.SuccessResponse.Body;
    if (!body) return res.status(400).json("No Data Found");
    res.status(200).json(body);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
module.exports = {
  getDarazCategories,
};
