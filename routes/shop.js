const express  = require('express');
const path = require('path')
const route = express.Router();
const rootDir = require('../util/path')
const adminData = require('./admin')
route.get('/',(req,res,next) => {
   res.sendFile(path.join(rootDir,'views','shop.html'))
   console.log('admin.js',adminData.products)
})
module.exports = route;