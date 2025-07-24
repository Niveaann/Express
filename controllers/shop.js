const Product = require("../models/produc");
const Cart = require('../models/cart')

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
      path: "/products",
    });
  });
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        docTitile: 'Your Cart',
        products: cartProducts
      });
    });
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

exports.postCart = (req, res, next) => {
  res.redirect("/cart")
  Product.fetchByID(req.body.productId,(product)=>{
    Cart.addProduct(req.body.productId,product.price)
  })
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.fetchByID(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

// exports.products = products;
