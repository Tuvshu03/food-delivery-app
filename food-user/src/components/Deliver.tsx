"use client";

import * as React from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";

export function DrawerDemo() {

    const [food, setFoods] = useState([])
    
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline"
        className="rounded-full">
          <ShoppingCart className="" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full bg-secondary">
          <DrawerHeader>
            <DrawerTitle className="flex "><ShoppingCart className="" />Order Detail</DrawerTitle>
          </DrawerHeader>
          <div className="w-full">
            <Button className="">Card</Button>
          </div>
      </DrawerContent>
    </Drawer>
  );
}
