var Product = require('../model/product');

module.exports = {
    postProduct: function(req, res){
        var product = new Product();
        product.title = req.body.title;
        product.price = req.body.price;
        product.save(function(err, savedProduct){
            if (err) {
                res.status(500).send({"error":"Could not save product"});
            } else {
                res.status(200).send(savedProduct);
            }
        });
    },
    getAllProducts: function(req, res){
        Product.find({}).then((products) => {
            res.send(products);
        }).catch((err) => {
            res.status(500).send({"error":"Could not fetch products"});
        });
    }
}