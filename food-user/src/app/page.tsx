"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axiosInstance";
type category = {
  categoryName: "String";
};
export default function Home() {
  const [category, setCategory] = useState<category[]>([]);

  const getCategory = async () => {
    try {
      const categories = await axiosInstance.get("/category");
      setCategory(categories.data.FoodCategory);
      console.log(categories);
    } catch (err) {
      console.log("error");
    }
  };
  console.log(category);
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="bg-neutral-700 flex flex-col">
      <img src="Image÷.png" />
      <div className="my-3 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          <div className="">Category</div>
          <div className="flex gap-2 items-start">
            {category.length > 0 &&
              category.map((categories, index) => {
                return (
                  <div className="bg-white px-3 py-1 rounded-full" key={index}>
                    {categories.categoryName}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
