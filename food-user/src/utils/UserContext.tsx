import { createContext, ReactNode, useState } from "react";
export type OrderContextProps = {
  addFood: [];
  quantity:Number
};

export const UserContext = createContext<null | object>(null);

export const UserContextProvider = (children: ReactNode) => {
  const [emailConnected, setEmailConnected] = useState(false);
  return (
    <UserContext.Provider value={{emailConnected, setEmailConnected}}>{children}</UserContext.Provider>
  );
};
