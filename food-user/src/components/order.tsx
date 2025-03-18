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
        <Button variant="outline">
          <ShoppingCart className="text-black bg-white rounded-full w-8 h-8 py-2" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-96">
          <DrawerHeader>
            <DrawerTitle className="flex "><ShoppingCart className="" />Order Detail</DrawerTitle>
          </DrawerHeader>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
