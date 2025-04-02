import { ProductsOrder } from "../../models/product-order-schema.js";

export const getProductOrder = async (req, res) => {
  const { _id } = req.body;

  try{
    const ProductOrder = await ProductsOrder.find(_id).populate(["user", "foodOrderItems.foodId"])
    res.json({ message: "get productOrder data", ProductOrder: ProductOrder });
  }
  catch (err) {
    res.status(403).json({ message: "Error occured" });
  }

};
