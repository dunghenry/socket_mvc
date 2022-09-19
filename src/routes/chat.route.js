const express = require("express");
const route = express.Router();
const chatController = require('../controllers/chat.controller')
route.get("/", chatController.homepage);
route.get("/api/message", chatController.message);
module.exports = route;
