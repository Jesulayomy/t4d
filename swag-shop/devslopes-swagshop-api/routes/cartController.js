var Cart = require('../model/cart');
var Product = require('../model/product');

module.exports = {
    addItemToCart: function(req, res){
        var cart = new Cart();
        cart.title = req.body.title;
        cart.price = req.body.price;
        cart.save(function(err, savedCart){
            if (err) {
                res.status(500).send({"error":"Could not save product"});
            } else {
                res.status(200).send(savedCart);
            }
        });
    },
    // removeItemFromCart: function(req, res){
    //     var cart = new Cart();
    //     cart.title = req.body.title;
    //     cart.price = req.body.price;
    //     cart.save(function(err, savedCart){
    //         if (err) {
    //             res.status(500).send({"error":"Could not save product"});
    //         } else {
    //             res.status(200).send(savedProduct);
    //         }
    //     });
    // }
}