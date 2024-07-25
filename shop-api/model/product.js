let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const product = new Schema({
  title: String,
  price: Number,
  likes: {
    type: Number,
    default: 0
  }
}, {versionKey: false});

module.exports = mongoose.model('Product', product);
