const Product = require("../models/produc");

exports.getIndex = (req, res, next) => {
  //    res.sendFile(path.join(rootDir,'views','shop.html'))
  Product.fetchAll((products) => {
    console.log(products)
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
      path: "/products",
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
const id = req.params.productId
  Product.fetchByID(id,(product) => {
  res.render("shop/product-detail", {
    docTitile: "Product Details",
     path: "/products",
     product :product
  });
  })
 
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    docTitile: "Checkout",
    path: "/checkout",
  });
};


exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    docTitile: "Orders",
    path: "/orders",
  });
};
// exports.products = products;
