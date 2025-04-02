import React, { useContext, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { axiosInstance } from "@/lib/axiosInstance";
import axios from "axios";
import { UserContext } from "@/utils/UserContext";
import { ShoppingBagIcon, Timer } from "lucide-react";

const MyOrder = () => {
  const [orders, setOrders] = useState<OrderData[]>([]);
  const { userData } = useContext<UserData>(UserContext);
  const getOrder = async () => {
    try {
      const address = await axiosInstance.get("/product-order/users", {
        user: userData._id,
      });
      setOrders(address.data.ProductOrder);
      console.log(address.data.ProductOrder);
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order History</CardTitle>
      </CardHeader>
      <CardContent className="w-screen h-[500px]">
        {orders?.length > 0 &&
          orders.map((order) => {
            return (
              <div key={order._id} className="grid w-full items-center gap-4">
                <div className="text-foreground w-full flex justify-between">
                  {order.totalPrice}
                  {order.status}
                </div>
                {order.foodOrderItems.length > 0 &&
                  order.foodOrderItems.map((food) => {
                    return (
                      <div className="flex">
                        <div className="flex gap-2">
                          <ShoppingBagIcon />
                          {food.foodId.foodName}
                        </div>
                        <div className="">{food.quantity}x</div>
                      </div>
                    );
                  })}
                <div className="flex gap-2">
                  <Timer />
                  {order.createdAt.slice(0, 10)}
                </div>
                <div>{order.user.address}</div>
              </div>
            );
          })}
      </CardContent>
    </Card>
  );
};

export default MyOrder;
