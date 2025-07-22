const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");
const { title } = require("process");
const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  // res.send('<form action="/admin/product" method="POST"><input type="text" name="productName"/><button type="submit">Submit</button></form>')
  res.render("add-product", {
    docTitile: "Add Product",
    path: "/admin/add-product",
    isProductActive: true,
    isProductCSS: true,
    isFormCSS: true,
  });
});

router.post("/add-product", (req, res, next) => {
  res.redirect("/");
  console.log(req.body);
  products.push({ title: req.body.title });
});

// module.exports = router;
exports.routes = router;
exports.products = products;
