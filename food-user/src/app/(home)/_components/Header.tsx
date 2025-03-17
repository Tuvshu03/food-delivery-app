"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Header = () => {
    const {push} = useRouter()
  return (
    <div className="inset-0 z-30 bg-black h-16">
      <div className="flex justify-between my-3 max-w-7xl mx-auto">
        <div className="flex">
          <img className="w-12 h-10" src="/Food-icon.png" />
          <div className="">
            <div className="flex">
              <p className="text-red-500">Nom</p>
              <p className="text-white">Nom</p>
            </div>
            <p className="text-white">Swift delivery</p>
          </div>
          <div className=""></div>
        </div>
        <div className="">
          <Button onClick={()=>{push('/sign-up')}} className="">Sign up</Button>
          <Button onClick={()=>{push('/login')}} className="bg-red-500">Log in</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
