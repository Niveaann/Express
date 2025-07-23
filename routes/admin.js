const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");
const { title } = require("process");
const adminController = require('../controllers/admin')


router.get("/add-product", adminController.getAddProduct);

router.post("/add-product", adminController.postAddProduct);
router.get("/products", adminController.getAdminProducts);

// module.exports = router;
exports.routes = router;

 