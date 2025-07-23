const path = require("path");
const rootDir = require("../util/path");
let products = [];
const Product = require('../models/produc');
exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  // res.send('<form action="/admin/product" method="POST"><input type="text" name="productName"/><button type="submit">Submit</button></form>')
  res.render("add-product", {
    docTitile: "Add Product",
    path: "/admin/add-product",
    isProductActive: true,
    isProductCSS: true,
    isFormCSS: true,
  });
}
exports.postAddProduct = (req, res, next) => {
  res.redirect("/");
  console.log(req.body);
  const product = new Product(req.body.title)
  product.save()
}

exports.getProducts = (req, res, next) => {
  //    res.sendFile(path.join(rootDir,'views','shop.html'))
  products = Product.fetchAll()
  res.render("shop", {
    docTitile: "My Shop",
    products: products,
    path: "/",
    hasProducts: products?.length > 0,
    isShopActive: true,
    isProductCSS: true,
  });
  console.log("admin.js", products);
}
// exports.products = products;