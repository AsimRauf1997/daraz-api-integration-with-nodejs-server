const express = require("express");
const router = express.Router();

const darazController = require("../controllers/darazController");
router.route("/").get(darazController.getDarazCategories);

module.exports = router;
