"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Footer = () => {
  const { push } = useRouter();

  const text = "Fresh fast delivered";
  return (
    <div className=" bg-black pt-15">
      <div className="bg-red-500 flex justify-center gap-10 py-4 ">
        {new Array(6).fill(null).map((_, index) => (
          <h2 key={index} className="text-3xl text-white gap-2">
            {text}
          </h2>
        ))}
      </div>
      <div className="flex justify-between my-3 max-w-7xl mx-auto">
        <div className="">
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
          <div className=""></div>
          <div className=""></div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Footer;
