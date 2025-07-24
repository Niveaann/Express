const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");
const { title } = require("process");
const adminController = require('../controllers/admin')


router.get("/add-product", adminController.getAddProduct);

router.post("/add-product", adminController.postAddProduct);
router.get("/products", adminController.getAdminProducts);
router.get("/edit-product/:productId", adminController.getEditProduct);
router.post("/edit-product/:productId", adminController.postEditProduct);

router.post("/add-product", adminController.postAddProduct);
router.post("/delete-product", adminController.postDeleteProduct);
// module.exports = router;
exports.routes = router;

 