const path = require("path");
const rootDir = require("../util/path");
const fs = require("fs");

function getProductsFromFile(callBack) {
  const p = path.join(rootDir, "data", "prouduct.json");
  fs.readFile(p, (err, fileContent) => {
    if (!err) {
      callBack(JSON.parse(fileContent));
    } else {
      callBack([]);
    }
  });
}
module.exports = class Product {
  constructor(title,imageUrl,price,description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    this.id = Math.random.toString()
    const p = path.join(rootDir, "data", "prouduct.json");
    getProductsFromFile((products) => {
      products.push(this);
      console.log(products);
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

   static fetchByID(id,callBack) {
    getProductsFromFile((products) => {
      let product = products.find(p => p.id === id);
      callBack(product)
    });
  }
};
