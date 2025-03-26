import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const MyOrder = () => {
  return (
        <Card>
          <CardHeader>
            <CardTitle>Payment information</CardTitle>
          </CardHeader>
          <CardContent className="w-full h-[500px]">
            <div className="grid w-full items-center gap-4">
              <div className="w-full flex justify-between">
                Items
                <p className="">1{}</p>
              </div>
              <div className="flex justify-between">
                Shipping
                <p className="">0.99$</p>
              </div>
              <hr />
              <div className="flex justify-between">
                Total
                <p className="">1{+0.99}$</p>
              </div>
              <Button className="w-full rounded-full text-black bg-red-500 hover-bg-none flex items-end">
                Checkout
              </Button>
            </div>
          </CardContent>
        </Card>
  );
};

export default MyOrder;
