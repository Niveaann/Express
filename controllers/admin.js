const Product = require("../models/produc");
exports.getAdminProducts = (req, res, next) => {
  //    res.sendFile(path.join(rootDir,'views','shop.html'))
  Product.fetchAll((products) => {
    res.render("admin/products", {
      docTitile: "Admin Products",
      products: products,
      path: "/admin/products",
    });
  });
};
exports.postAddProduct = (req, res, next) => {
  res.redirect("/");
  console.log(req.body);
  const product = new Product(req.body.title,req.body.imageURL,req.body.price,req.body.description);
  product.save();
};
exports.getAddProduct = (req, res, next) => {
 // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  // res.send('<form action="/admin/product" method="POST"><input type="text" name="productName"/><button type="submit">Submit</button></form>')
  res.render("admin/add-product", {
    docTitile: "Add Product",
    path: "/admin/add-product",
    isProductActive: true,
    isProductCSS: true,
    isFormCSS: true,
  });
};