import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { axiosInstance } from "@/lib/axiosInstance"
import axios from "axios"
import { User } from "lucide-react"
import { useEffect, useState } from "react"

export function DropdownUser() {
  // const [userData, setUserData] = useState([])
  // const [error, setError] = useState("")
  // const token = JSON.parse(localStorage.getItem("authorization"))
  // const getUserData = async () => {
  //   try{
  //         const address = await axiosInstance.get("/users", {headers:{Authorization: `Bearer ${token}`}})
  //         setUserData(address.data.user)
  //         console.log(address.data.user, "user data")
  //       }
  //   catch(err){
  //     console.log("error", err);
  //     if (axios.isAxiosError(err)) {
  //       setError(err.response?.data.message);
  //     }
  //   }
  //   }

  //   useEffect(()=>{
  //     getUserData()
  //   }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button variant="outline" className="z-50 align-text-bottom rounded-full w-10 h-10 text-center"><User className="text-black bg-red-500" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
