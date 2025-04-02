type CategoryType = {
  categoryName: string;
  _id: string;
};

type FoodType = {
  foodName: string;
  image: string;
  ingredients: string;
  price: string;
  _id: string;
  categoryName: [
    {
      _id: string;
      categoryName: string;
    }
  ];
};

type UserData = {
  id:string;
  address:string;
  email:string;
  role:string;
  ttl:Date;
};

type OrderData = {
  createdAt: Date;
  foodOrderItems: [{ foodId: FoodType; quantity: number }];
  status:string;
  user: UserData;
  totalPrice:number;
  _id:string;
};
