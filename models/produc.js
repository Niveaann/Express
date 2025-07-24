const path = require("path");
const rootDir = require("../util/path");
const fs = require("fs");
const Cart =require('../models/cart')

const p = path.join(rootDir, "data", "prouduct.json");
function getProductsFromFile(callBack) {
  fs.readFile(p, (err, fileContent) => {
    if (!err) {
      callBack(JSON.parse(fileContent));
    } else {
      callBack([]);
    }
  });
}
module.exports = class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    this.id = Math.random().toString();
    const p = path.join(rootDir, "data", "prouduct.json");
    getProductsFromFile((products) => {
      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    // fs.readFile(p, (err, fileContent) => {
    //   let products = [];
    //   if (!err) {
    //     products = JSON.parse(fileContent);
    //   }
    //   products.push(this);
    //   console.log(products);
    //   fs.writeFile(p, JSON.stringify(products), (err) => {
    //     console.log(err);
    //   });
    // });
  }
  static fetchAll(callBack) {
    getProductsFromFile(callBack);
  }

  static fetchByID(id, callBack) {
    getProductsFromFile((products) => {
      let product = products.find((p) => p.id === id);
      callBack(product);
    });
  }

  static editProductByID(updatedValue, callBack) {
    getProductsFromFile((products) => {
      let updatedProductIndex = products.findIndex(
        (p) => p.id === updatedValue.id
      );
      let updatedProducts = [...products];
      updatedProducts[updatedProductIndex] = updatedValue;
      fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
        console.log(err);
      });
    });
  }

  static deleteByID(productId){
     getProductsFromFile((products) => {
      let product = products.find((p) => p.id === productId);
      let updatedProducts =  products.filter((product) => productId != product.id)
      fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
        console.log(err);
      
        if(!err){
            console.log('hello')
          Cart.deleteProduct(productId,product.price)
        }
      });
    });
  }
};
