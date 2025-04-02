import { createContext, ReactNode, useState } from "react";
export type OrderContextProps = {
  addFood: [];
  quantity:Number
};

export const OrderContext = createContext<null | object>(null);

export const OrderContextProvider = (children: ReactNode) => {
  const [addFood, setAddFood] = useState([]);
  return (
    <OrderContext.Provider value={addFood}>{children}</OrderContext.Provider>
  );
};
