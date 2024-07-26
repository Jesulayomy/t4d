var Wishlist = require('../model/wishlist');
var Product = require('../model/product');

module.exports = {
    newWishlist: function(req, res){
        var wishlist = new Wishlist();
        wishlist.title = req.body.title;
        wishlist.save(function(err, newWishlist){
            if (err) {
                res.status(500).send({"error":"Could not save wishlist"});
            } else {
                res.status(200).send(newWishlist);
            }
        });
    },
    getAllWishlists: function(req, res) {
        Wishlist.find({}).populate({"path":"products", "model":"Product"}).exec(function(err, wishlists){
            if (err) {
                res.status(500).send({"error":"Could not find wishlists"});
            } else {
                res.send(wishlists);
            }
        }); 
    },
    addProductToWishlist: function(req, res) {
        Product.findOne({_id: req.body.productId}, function(err, product){
            if (err) {
                res.status(500).send({"error":"Could not add product"});
            } else {
                Wishlist.update({_id:req.body.wishlistId}, {$addToSet:{products:product._id}}, function(err, wishlist){
                    if (err) {
                        res.status(500).send({"error":"Could not add product"});
                    } else {
                        res.send(wishlist);
                    }
                });
            }
        });
    }
}