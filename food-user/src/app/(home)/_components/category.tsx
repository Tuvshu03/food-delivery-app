import { Button } from "@/components/ui/button";
import { CategoryType, FoodType } from "../page";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
type CategoryProps = {
  foods: FoodType[];
} & CategoryType;

export const Category = (props: CategoryProps) => {
  const { categoryName, _id, foods } = props;
  const filteredFoods = foods.filter(
    (food) => food.categoryName.filter((cur) => cur._id === _id).length !== 0
  );

  const [quantity, setQuantity] = useState(1);
  const { push } = useRouter();

  const minusQuantity = () => {
    if (quantity !== 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const plusQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const notify = () => toast("Food is being added to the cart");
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
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="absolute bottom-3 right-3 bg-white rounded-full text-black"
                          >
                            <Plus />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="sm:max-w-[826px]">
                          <div className="flex w-full gap-6">
                            <div className="w-full">
                              <img
                                src={`${foods.image}`}
                                alt="property image"
                                className="overflow-hidden object-cover rounded-md w-full h-[367px]"
                              />
                            </div>
                            <div className="flex flex-col justify-between">
                              <div className="flex flex-col text-2xl">
                                <div className="text-red-500">
                                  {foods.foodName}
                                </div>
                                <div className="">{foods.ingredients}</div>
                                {/* <div className="text-[#09090B]">
                                {foods.price}$
                              </div> */}
                              </div>
                              <div className="">
                                <div className="flex mb-6">
                                  <div className="w-full">
                                    <div className="">Total price</div>
                                    <div className="text-[#09090B] text-2xl text-bold">
                                      {quantity * Number(foods.price)}$
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-between gap-2">
                                    <Button
                                      onClick={plusQuantity}
                                      className="rounded-full bg-white text-black border w-10 h-10"
                                    >
                                      <Plus />
                                    </Button>
                                    <div className="">{quantity}</div>
                                    <Button
                                      onClick={minusQuantity}
                                      disabled={quantity === 1}
                                      className="rounded-full bg-white text-black border w-10 h-10"
                                    >
                                      <Minus />
                                    </Button>
                                  </div>
                                </div>
                                <AlertDialogFooter>
                                  <Button
                                    className="w-full"
                                    type="submit"
                                    onClick={notify}
                                  >
                                    Add to card
                                  </Button>
                                  <ToastContainer /
                                </AlertDialogFooter>
                              </div>
                            </div>
                          </div>
                        </AlertDialogContent>
                      </AlertDialog>
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
