import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

export const Quantity = ({
  quantityOfFood,
  foodId,
}: {
  quantityOfFood: number;
  foodId: string;
}) => {
  const [quantity, setQuantity] = useState(quantityOfFood);

  const minusQuantity = () => {
    if (quantityOfFood !== 1) {
      // set
      // localstorage update
      setQuantity(quantity - 1);
      saveQuantity(foodId, quantity - 1);
    }
  };
  const plusQuantity = () => {
    if (quantityOfFood !== 1) {
      setQuantity(quantity + 1);
      saveQuantity(foodId, quantity + 1);
    }
  };

  const saveQuantity = (foodId: string, quantity: number) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = cart.map((cart: any) => {
      return cart.foodId === foodId ? { ...cart, quantity } : cart;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <div className="flex items-center justify-between gap-2">
      <Button
        onClick={minusQuantity}
        className="rounded-full bg-white text-black border w-10 h-10"
      >
        <Minus />
      </Button>
      <div className="">{quantity}</div>
      <Button
        onClick={plusQuantity}
        disabled={quantityOfFood === 1}
        className="rounded-full bg-white text-black border w-10 h-10"
      >
        <Plus />
      </Button>
    </div>
  );
};
