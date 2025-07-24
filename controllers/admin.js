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
  const product = new Product(
    req.body.title,
    req.body.imageUrl,
    req.body.price,
    req.body.description
  );
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
    edit: false,
  });
};

exports.getEditProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  // res.send('<form action="/admin/product" method="POST"><input type="text" name="productName"/><button type="submit">Submit</button></form>')
  const productId = req.params.productId;
  const editMode = req.params.edit;
  Product.fetchByID(productId, (product) => {
    res.render("admin/add-product", {
      docTitile: "Edit Product",
      path: "/admin/edit-product",
      product: product,
      edit: true,
    });
  });
};
exports.postEditProduct = (req, res, next) => {

  const productId = req.params.productId;
  const editMode = req.params.edit;
  const product = {...req.body , id :productId }
  Product.editProductByID(product)
  res.redirect("/admin/products");

};
exports.postDeleteProduct = (req, res, next) => {
  Product.deleteByID(req.body.productId);
  res.redirect("/admin/products");
  //  Product.fetchByID(req.body.productId, (product) => {
  //   // if(product){
  //   //   Cart.deleteProduct(product.id,product.price)
  //   // }
   
  //    res.redirect("/admin/products");
  // });

  


};
