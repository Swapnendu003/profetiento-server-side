

const express = require("express");
const router = express.Router();
const generativeAIController = require("../controllers/upskillingActivity");

router.post("/generate-content", generativeAIController.generateContent);

module.exports = router;
