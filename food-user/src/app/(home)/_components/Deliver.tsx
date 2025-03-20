"use client";

import * as React from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { MyCard } from "./Card";
import MyOrder from "./Order";

export function DrawerDemo() {
  const [food, setFoods] = useState([]);
  const [detail, setDetail] = useState(false);

  const changeDetail = () => {
    if (detail === false) {
      setDetail(true);
    } else {
      setDetail(false);
    }
  };

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" className="rounded-full">
          <ShoppingCart className="" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full bg-neutral-700">
        <DrawerHeader>
          <DrawerTitle className="flex ">
            <ShoppingCart className="" />
            Order Detail
          </DrawerTitle>
        </DrawerHeader>
        <div className="w-full flex">
          <Button onClick={changeDetail} className="w-1/2">
            Card
          </Button>
          <Button onClick={changeDetail} className="w-1/2">
            Order
          </Button>
          {detail === false ? <MyCard /> : <MyOrder />}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
