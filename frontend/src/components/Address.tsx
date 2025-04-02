import React, { useState } from "react";
import { Drawer } from "vaul";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { ChevronRight, MapPin, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axiosInstance";
import { useAuth } from "@/utils/UserContext";

const Address = () => {
  const [addressUser, setAddressUser] = useState("");
  const [saveAddress, setSaveAddress] = useState("");
  const {userData} = useAuth()
  console.log(userData)

  const handleAddress = (event: any) => {
    setAddressUser(event?.target.value);
  };

  const handleClickSaveAdress = async () => {
    const token = localStorage.getItem("authorization");

    try {
      const res = await axiosInstance.put(
        "/users",
        { address: addressUser },
        { headers: { Authorization: "Bearer " + JSON.parse(token) } }
      );
      console.log(res);
    } catch (err) {
      console.log(err, "error");
    }
  };
  return (
    <AlertDialog>
      <Button
        variant="outline"
        className="bg-white rounded-full text-red-500 max-w-72 py-2 px-4"
      >
        <AlertDialogTrigger asChild>
          <div className="flex items-center truncate gap-2">
            <MapPin />
            Delivery Address:
            <div className="text-black">{userData.address}</div>
          </div>
        </AlertDialogTrigger>
        {userData.address !=="" ? (
          <div
            onClick={() => {
              setSaveAddress("");
            }}
          >
            <X className="z-30 text-black" />
          </div>
        ) : (
          <div className="flex items-center  text-black">
            Add location <ChevronRight />
          </div>
        )}
      </Button>

      <AlertDialogContent className="sm:max-w-[826px]">
        <AlertDialogTitle>Delivery address</AlertDialogTitle>
        <div className="h-32 text-2xl">
          <Input
            onChange={handleAddress}
            placeholder="Please provide specific address details such as building, number, entrance and apartment number"
            // disabled={loading}
            className="h-full"
            value={addressUser}
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              setSaveAddress(addressUser);
              handleClickSaveAdress();
            }}
          >
            Deliver here
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Address;
