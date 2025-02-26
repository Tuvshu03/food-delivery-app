import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const productOrderSchema = Schema({
    user:{Schema},
    totalPrice:Number,
    foodOrderItems:{type:[Schema.Types.ObjectId], ref:"", default:[]
    },
    status:{
        enum:["PENDING", "CANCELED", "DELIEVERED"],
        default:"PENDING"
    },
},
{ timestamp: true }
);
export const ProductsOrder =
  models.ProductsOrder || model("ProductsOrder", productOrderSchema);
