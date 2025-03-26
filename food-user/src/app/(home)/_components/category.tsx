import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FoodModal from "@/components/FoodModal";
import { CategoryType, FoodType } from "@/components/Types";

type CategoryProps = {
  foods: FoodType[];
} & CategoryType;

export const Category = (props: CategoryProps) => {
  const { categoryName, _id, foods } = props;

  const filteredFoods = foods.filter(
    (food) => food.categoryName.filter((cur) => cur._id === _id).length !== 0
  );

  return (
    <div className="my-3 max-w-7xl mx-auto">
      <div className="flex flex-col items-start">
        {/* <div className="">Category</div> */}
        <div className="flex gap-2 items-start">
          <div className="text-white text-3xl">{categoryName}</div>
        </div>
        <div className="grid grid-cols-3 gap-9">
          {filteredFoods.length > 0 &&
            filteredFoods.map((food, index) => {
              return (
                <Card className="w-[350px]" key={index}>
                  <CardContent className="rounded-lg">
                    <div className="w-full relative">
                      <img
                        src={`${food.image}`}
                        alt="property image"
                        className="overflow-hidden object-cover rounded-md w-96 h-52"
                      />
                      <FoodModal food={food} />
                    </div>
                    <div className="flex justify-between text-2xl">
                      <div className="text-red-500">{food.foodName}</div>
                      <div className="text-[#09090B]">{food.price}$</div>
                    </div>
                    <div className="">{food.ingredients}</div>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
};
