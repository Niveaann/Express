const express = require("express");
const path = require("path");
const route = express.Router();
const rootDir = require("../util/path");
const adminData = require("./admin");
const productController = require('../controllers/product')
route.get("/", productController.getProducts);
module.exports = route;
