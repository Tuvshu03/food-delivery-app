import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const orderedItemsSchema = Schema({
    foodName:{type:[Schema.Types.ObjectId], ref:"Products", default:[]},
    quantity:Number
});
export const orderedItems =
  models.orderedItems || model("orderedItems", orderedItemsSchema);
