const express = require("express");
const { restList } = require("../controllers/restaurantController");

const router = express.Router();

router.get("/list", restList);

module.exports = router;
