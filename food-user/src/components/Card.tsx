"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Quantity } from "@/components/Quantity";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { FoodType } from "./Types";
import { axiosInstance } from "@/lib/axiosInstance";

export function MyCard() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });
  // console.log(cart, "cart");
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0)

  const getFoods = async () => {
    try {
      const food = await axiosInstance.get("/product");
      setFoods(food.data.Product);
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    getFoods();
  }, []);

  useEffect(() => {

    const calculatedTotal = cart.reduce((totalPrice:any, cartItem:any) => {
      const food = foods.find((cur) => cur._id === cartItem.foodId);
      if (food) {
        totalPrice = totalPrice + cartItem.quantity * Number(food.price);
      }
      return totalPrice;
    }, 0);

    setTotalPrice(calculatedTotal);
  }, [cart, foods]); 

  const deleteFood = (foodId: string) => {
    const updatedCart = cart.filter((cart: any) => cart.foodId !== foodId )
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleTotalPrice = (quantity:number, price:number) =>{
    setTotalPrice(...[quantity*price])


  }

  return (
    <div className="flex flex-col gap-10">
      <Card>
        <CardContent className="rounded-lg">
          {foods.length > 0 &&
            Object.values(cart).map((cartItem) => {
              const { foodId, quantity } = cartItem as {
                foodId: string;
                quantity: number;
              };
              const food = foods.find((cur) => cur._id === foodId)!;

              return (
                <div key={foodId} className="flex">
                  <div className="w-2/3">
                    <img
                      src={`${food.image}`}
                      alt="property image"
                      className="overflow-hidden object-cover rounded-md w-32 h-32"
                    />
                  </div>
                  <div className="">
                    <div className="flex">
                      <div className="">
                      <div className="text-red-500">{food.foodName}</div>
                      <div className="">{food.ingredients}</div>
                      </div>
                      <Button onClick={()=>deleteFood(foodId)} className="w-10 h-10 rounded-full bg-white text-black border border-red-500"><X/></Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Quantity quantityOfFood={quantity} foodId={food._id}/>
                      <div className="">
                        {quantity * Number(food.price)}$
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <Button className="w-full text-red-500 rounded-full border border-red-500 bg-white">Add food</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Payment information</CardTitle>
        </CardHeader>
        <CardContent className="w-full">
            <div className="grid w-full items-center gap-4">
              <div className="w-full flex justify-between">
                Items
                <p className="">{totalPrice}</p>
              </div>
              <div className="flex justify-between">
                Shipping
                <p className="">0.99$</p>
              </div>
              <hr />
              <div className="flex justify-between">Total
                <p className="">{totalPrice+0.99}$</p>
              </div>
              <Button className="w-full rounded-full text-black bg-red-500 hover-bg-none">Checkout</Button>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
