import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

export const Quantity = (quantityOfFood: number) => {
  const minusQuantity = (quantity:number) => {
    if (quantity !== 1) {
      quantity = quantity + 1;
    }
  };
  const plusQuantity = (quantity: number) => {
    if (quantity !== 1) {
      quantity = quantity + 1;
    }
  };
  return (
    <div className="flex items-center justify-between gap-2">
      <Button
        onClick={minusQuantity(quantityOfFood)}
        className="rounded-full bg-white text-black border w-10 h-10"
      >
        <Plus />
      </Button>
      <div className="">{quantityOfFood}</div>
      <Button
        onClick={plusQuantity(quantityOfFood)}
        disabled={quantityOfFood === 1}
        className="rounded-full bg-white text-black border w-10 h-10"
      >
        <Minus />
      </Button>
    </div>
  );
};
