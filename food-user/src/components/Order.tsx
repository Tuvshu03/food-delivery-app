import React, { useContext, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { axiosInstance } from "@/lib/axiosInstance";
import axios from "axios";
import { UserContext } from "@/utils/UserContext";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const {userData} = useContext(UserContext)
  const getOrder = async () => {
    try {
      const address = await axiosInstance.get("/product-order", {user:userData._id});
      setOrders(address.data.ProductOrder)
      console.log(address.data.ProductOrder);
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(()=>{
    getOrder()
  },[])
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order History</CardTitle>
      </CardHeader>
      <CardContent className="w-full h-[500px]">
          {orders?.length>0 && orders.map((order)=>{
            return (
              <div key={order._id} className="grid w-full items-center gap-4">
                <div className="text-foreground flex just">{order.totalPrice}{order.status}</div>
                <div >{order.totalPrice}{}</div>
                <div >{order.totalPrice}</div>
                <div >{order.totalPrice}</div>
                <div >{order.totalPrice}</div>

              </div>
            )
          })}
      </CardContent>
    </Card>
  );
};

export default MyOrder;
