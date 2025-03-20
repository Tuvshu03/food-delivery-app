"use client";

import { useContext, useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axiosInstance";
import { Category } from "./_components/category";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
// import { OrderContext } from "@/utils/OrderContext";

export type CategoryType = {
  categoryName: String;
  _id: String;
};
export type FoodType = {
  foodName: String;
  image: String;
  ingredients: String;
  price: String;
  _id: String;
  categoryName: [
    {
      _id: String;
      categoryName: String;
    }
  ];
};

export default function Home() {
  const [categories, setCategory] = useState<CategoryType[]>([]);
  const [foods, setFoods] = useState<FoodType[]>([]);
  // const {addFood:OrderContextProps} = useContext(OrderContext)
  const getCategory = async () => {
    try {
      const categories = await axiosInstance.get("/category");
      setCategory(categories.data.FoodCategory);
    } catch (err) {
      console.log("error");
    }
  };

  const getFoods = async () => {
    try {
      const food = await axiosInstance.get("/product");
      setFoods(food.data.Product);
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    getCategory();
    getFoods();
  }, []);
  console.log(foods, "food")  
  return (
    <div className="bg-neutral-700 flex flex-col">
      <Header/>
      <img src="title-image.png" className="w-full h-[600px] overflow-hidden object-cover" />
      {categories.map((category) => (
        <Category {...category} foods={foods} />
      ))}
      <Footer/>
    </div>
  );
}
