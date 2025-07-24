const express = require("express");
const path = require("path");
const route = express.Router();
const rootDir = require("../util/path");
const adminData = require("./admin");
const shopController = require('../controllers/shop')
route.get("/", shopController.getIndex);
route.get("/products", shopController.getProductList);
route.get("/products/:productId", shopController.getProductDetails);
route.get("/cart", shopController.getCart);
route.post("/cart", shopController.postCart);
route.post('/cart-delete-item', shopController.postCartDeleteProduct);
// route.get("/product-detail", shopController.getProductDetails);
route.get("/checkout", shopController.getCheckout);
route.get("/orders", shopController.getOrders);
module.exports = route;
 