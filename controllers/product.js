const path = require("path");
const rootDir = require("../util/path");
const products = [];
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
  products.push({ title: req.body.title });
}

exports.getProducts = (req, res, next) => {
  //    res.sendFile(path.join(rootDir,'views','shop.html'))
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
exports.products = products;