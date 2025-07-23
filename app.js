const express = require('express');
const bodyParser = require('body-parser')
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const path = require('path')
const app = express();
const errorController = require('./controllers/error')
// const {engine} = require('express-handlebars')

// app.engine(
//   "hbs",
//   engine({ layoutsDir: "views/layouts", defaultLayout: "layout.hbs" })
// );
app.set('view engine','ejs')
app.set('views','views')
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/favicon.ico', (req, res) => res.status(204).end()); 
app.use('/admin',adminData.routes);
app.use(shopRoutes);
app.use(errorController.getErrorPage)

app.listen(3000); 