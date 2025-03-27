import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { axiosInstance } from "@/lib/axiosInstance";
import axios from "axios";

const MyOrder = () => {

    // const createOrder = (e: React.FormEvent<HTMLFormElement>) =>{
    //  try {
    //      const address = await axiosInstance.post("/product", {
    //        email: email,
    //        password: password,
    //      });
    //      console.log(address.data);
    //   catch(err){
    //     console.log("error", err);
    //     if (axios.isAxiosError(err)) {
    //       setError(err.response?.data.message);
    //     }
    //   }
    // }
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
              <form>
        <Button type="submit"  className="w-full rounded-full text-black bg-red-500 hover-bg-none flex items-end">Checkout</Button>
      </form>
            </div>
          </CardContent>
        </Card>
  );
};

export default MyOrder;
