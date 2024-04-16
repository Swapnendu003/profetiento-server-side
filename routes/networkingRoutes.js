const router = require("express").Router();
const express = require("express");
const networkingRouter = require ("../controllers/networking");
router.post("/networking", networkingRouter.networkingSkills);

module.exports = router;