
const Product = require("../models/produc");



exports.getIndex = (req, res, next) => {
  //    res.sendFile(path.join(rootDir,'views','shop.html'))
  Product.fetchAll((products) => {
    res.render("shop/index", {
      docTitile: "My Shop",
      products: products,
      path: "/",
      hasProducts: products?.length > 0,
      isShopActive: true,
      isProductCSS: true,
    });
  });
};

exports.getProductList = (req, res, next) => {
  //    res.sendFile(path.join(rootDir,'views','shop.html'))
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      docTitile: "All Product",
      products: products,
      path: "/product-list",
    });
  });
};

exports.getCart = (req, res, next) => {


    res.render("shop/cart", {
      docTitile: "Cart",
      path: "/cart",
    });

};
exports.getProductDetails = (req, res, next) => {


    res.render("shop/product-details", {
      docTitile: "Cart",
      path: "/product-details",
    });

};

exports.getCheckout = (req, res, next) => {


    res.render("shop/product-details", {
      docTitile: "Checkout",
      path: "/checkout",
    });

};
// exports.products = products;