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
    
}