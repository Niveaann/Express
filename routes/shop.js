const express = require("express");
const path = require("path");
const route = express.Router();
const rootDir = require("../util/path");
const adminData = require("./admin");
const shopController = require('../controllers/shop')
route.get("/", shopController.getIndex);
route.get("/product-list", shopController.getProductList);
route.get("/cart", shopController.getCart);
route.get("/product-detail", shopController.getProductDetails);
route.get("/checkout", shopController.getCheckout);
module.exports = route;
 