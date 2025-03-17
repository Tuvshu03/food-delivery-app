import { Button } from "@/components/ui/button";
import { CategoryType, FoodType } from "../page";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
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
            filteredFoods.map((foods, index) => {
              return (
                <Card className="w-[350px" key={index}>
                  <CardContent className="rounded-lg">
                    <div className="w-full relative">
                      <img
                        src={`${foods.image}`}
                        alt="property image"
                        className="overflow-hidden object-cover rounded-md w-96 h-52"
                      />
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="absolute bottom-3 right-3 bg-white rounded-full text-black"
                          >
                            <Plus />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[826px]">
                          <div className="flex w-full">
                            <div className="w-full">
                              <img
                                src={`${foods.image}`}
                                alt="property image"
                                className="overflow-hidden object-cover rounded-md w-full h-[367px]"
                              />
                            </div>
                           <div className="">
                             <div className="flex flex-col text-2xl">
                              <div className="text-red-500">
                                {foods.foodName}
                              </div>
                              <div className="">{foods.ingredients}</div>
                              {/* <div className="text-[#09090B]">
                                {foods.price}$
                              </div> */}
                            </div>
                           
                            <Button type="submit">Save changes</Button>
                           </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className="flex justify-between text-2xl">
                      <div className="text-red-500">{foods.foodName}</div>
                      <div className="text-[#09090B]">{foods.price}$</div>
                    </div>
                    <div className="">{foods.ingredients}</div>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
};
