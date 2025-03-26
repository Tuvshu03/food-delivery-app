import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "react-toastify";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { get } from "http";
import { FoodType } from "./Types";

const FoodModal = ({ food }: { food: FoodType}) => {
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: any) => {
    setIsOpen(open);
  };
  const minusQuantity = () => {
    if (quantity !== 1) {
      setQuantity((prev: any) => prev - 1);
    }
  };
  const plusQuantity = () => {
    setQuantity((prev: any) => prev + 1);
  };
  const addFoodToCart = (foodId: string, quantity: number) => {
    const getCart = JSON.parse(localStorage.getItem("cart") || "[]");

    hasCartSelectedFood(getCart, foodId);

    if (getCart) {

      if (hasCartSelectedFood(getCart, foodId)) {
        const updatedCart = getCart.map((cart: any) => {
          return cart.foodId === foodId
            ? { ...cart, quantity: cart.quantity + quantity }
            : cart;
        });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
        getCart.push({ foodId, quantity });
        localStorage.setItem("cart", JSON.stringify(getCart));
      }
    } else {
      localStorage.setItem("cart", JSON.stringify([{ foodId, quantity }]));
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="absolute bottom-3 right-3 bg-white rounded-full text-black w-10 h-10"
        >
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[826px]">
        <DialogTitle>Delivery address</DialogTitle>
        <div className="flex w-full gap-6">
          <div className="w-full">
            <img
              src={`${food.image}`}
              alt="property image"
              className="overflow-hidden object-cover rounded-md w-full h-[367px]"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col text-2xl">
              <div className="text-red-500">{food.foodName}</div>
              <div className="">{food.ingredients}</div>
            </div>
            <div className="">
              <div className="flex mb-6">
                <div className="w-full">
                  <div className="">Total price</div>
                  <div className="text-[#09090B] text-2xl text-bold">
                    {quantity * Number(food.price)}$
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <Button
                    onClick={plusQuantity}
                    className="rounded-full bg-white text-black border w-10 h-10"
                  >
                    <Plus />
                  </Button>
                  <div className="">{quantity}</div>
                  <Button
                    onClick={minusQuantity}
                    disabled={quantity === 1}
                    className="rounded-full bg-white text-black border w-10 h-10"
                  >
                    <Minus />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DialogClose asChild>
          <Button
            className="w-full"
            type="submit"
            onClick={() => {
              toast("Food is being added to the cart");
              handleOpenChange(isOpen);
              addFoodToCart(food._id, quantity);
            }}
          >
            Add to card
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
export default FoodModal;

const hasCartSelectedFood = (cartData: any, foodId: string) => {
  const res = cartData.find((cart: any) => {
    return cart.foodId === foodId;
  });

  return res;
};
