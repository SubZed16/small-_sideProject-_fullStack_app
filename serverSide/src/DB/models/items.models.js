const mongoose = require("mongoose");
const ItemSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
    minLength: 3,
  },
  item_quantity: {
    type: Number,
    required: true,
    default:0,
    min: 0,
  },
    price_per_item:Number,
    description:String,
    total_price:Number,
    weight:Number,
})



const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;