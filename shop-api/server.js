var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var db = mongoose.connect('mongodb://localhost/shop-api');


let Product = require('./model/product');
let WishList = require('./model/wishlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res) => {
  res.send({
    title: "Shop API",
    description: "A Simple shop API using express and mongodb",
    paths: {
      '/products': ["GET", "POST"],
      '/products/:productID': ["PUT", "DELETE"],
      '/wishlists': ["GET", "POST"],
      '/wishlists/:productID/add': ["PUT"]
    }
  })
});

app.get('/products', async (req, res) => {
  Product.find({}).then((products) => {
    res.status(200).send(products);
  }).catch((err) => {
    res.status(413).send({error: "Something went wrong"});
  });
});

app.post('/products', (req, res) => {
    let product = new Product();
    product.title = req.body.title;
    product.price = req.body.price;
    product.save().then((savedProduct) => {
      res.status(200).send(savedProduct);
    }).catch((err) => {
      res.status(403).send({error: "Could not parse product"});
    });
});

app.put('/products/:productID', (req, res) => {
  let productID = req.params.productID;
  Product.findOne({ "_id": productID}).then((product) => {
    if (req.body.title) {
      product.title = req.body.title;
    }
    if (req.body.price) {
      product.price = req.body.price;
    }
    product.save().then((updatedProduct) => {
      res.send(updatedProduct);
    }).catch((err) => {
      res.status(401).send({error: err});
    });
  })
});

app.delete('/products/:productID', (req, res) => {
  let productID = req.params.productID;
  Product.deleteOne({ "_id": productID}).then((product) => {
    res.send({});
  }).catch((err) => {
      res.status(401).send({error: err});
  });
});

app.get('/wishlists', (req, res) => {
  WishList.find({}).populate({path: 'products', model: 'Product'}).then((wLists) => {
    res.status(200).send(wLists);
  }).catch((err) => {
    res.status(413).send({error: "Something went wrong"});
  });
});

app.post('/wishlists', (req, res) => {
  let wishlist = new WishList();
  wishlist.title = req.body.title;
  wishlist.save().then((wList) => {
    res.send(wList);
  }).catch((err) => {
    res.status(413).send({error: err});
  });
});

app.put('/wishlists/:productID/add', (req, res) => {
  let productID = req.params.productID;
  let wishListID = req.body.wishlist;
  Product.findOne({ "_id": productID }).then((product) => {
    WishList.updateMany(
      {"_id": wishListID},
      {$addToSet: {products: product._id}}
    ).then(() => {
      WishList.findOne({ "_id": wishListID}).populate({path: 'products', model: 'Product'}).then((wishlist) => {
        res.send(wishlist);
      });
    });
  }).catch((err) => {
    res.status(404).send({error: "Not Added to list"});
  })
});

app.listen(3000, () => {
    console.log('Starting Shop API at :3000');
});
