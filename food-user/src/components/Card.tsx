"use client";

import { FoodType } from "@/app/(home)/page";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Quantity } from "@/lib/Quantity";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type CardProps = {
  food: object;
  quantity: number;
};

export function MyCard() {
  const [cart, setCart] = useState<CardProps>(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });
console.log(cart)
  return (
    <div className="flex flex-col gap-10">
      <Card>
        <CardContent className="rounded-lg">
          {cart.length > 0 &&
            cart.map((food, index) => {
              return (
                <div key={index} className="flex">
                  <div className="w-2/3">
                    <img
                      src={`${food.food.image}`}
                      alt="property image"
                      className="overflow-hidden object-cover rounded-md w-32 h-32"
                    />
                  </div>
                  <div className="">
                    <div>
                      <div className="text-red-500">{food.food.foodName}</div>
                      <div className="">{food.food.ingredients}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      {/* <Quantity quantityOfFood={cart.quantity}/> */}
                      <div className="">
                        {food.quantity * Number(food.price)}$
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Payment information</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="w-full flex justify-between">
                Items
                <p className="">{}</p>
              </div>
              <div className="flex justify-between">
                Shipping
                <p className="">0.99$</p>
              </div>
              <hr />
              <div className="flex justify-between">Total fsdfa</div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
