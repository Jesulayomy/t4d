let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = mongoose.Schema.Types.ObjectId;

const wishList = new Schema({
	title: String,
	products: [{type: ObjectId, ref: "Product"}]
}, { versionKey: false });

module.exports = mongoose.model('WishList', wishList);
