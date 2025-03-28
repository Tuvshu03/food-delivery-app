"use client";

import * as React from "react";
import {ShoppingCart } from "lucide-react";
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

export function Deliver() {
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
        <Button variant="outline" className="rounded-full w-10 h-10">
          <ShoppingCart className="" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="min-w-2xl bg-neutral-700 px-10">
        <div className="flex flex-col gap-10 w-full mx-auto">
          <DrawerHeader>
            <DrawerTitle className="flex flex-col">
              <div className="flex">
                <ShoppingCart />
                Order Detail
              </div>
            </DrawerTitle>
          </DrawerHeader>
          <div className="w-full flex bg-white justify-between py-1 px-1 rounded-full">
            <Button
              onClick={changeDetail}
              className={`${
                !detail ? "bg-red-600" : "bg-white text-black"
              } w-1/2 rounded-full`}
            >
              Card
            </Button>
            <Button
              onClick={changeDetail}
              className={`${
                detail ? "bg-red-600" : "bg-white text-black"
              } w-1/2 rounded-full`}
            >
              Order
            </Button>
          </div>
          <div className="w-full ">
            {!detail && <MyCard />}
            {detail && <MyOrder />}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
