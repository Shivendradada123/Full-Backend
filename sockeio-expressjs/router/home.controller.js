const { Router } = require("express");
const helloWorld = require("../controller/home.controller");

const homeRoute = Router();

homeRoute.get("/", helloWorld);

module.exports = homeRoute;
