
"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const page = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getUser = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const address = await axios.post("http://localhost:8000/users/sign-up", {
        email,
        password,
      });
      console.log(address);
      if(address.status===200){
        console.log("success")
      }
    } catch (err) {
        setLoading(false)
      console.log("error");
    }
  };

  return (
    <div className="w-50 flex flex-col">
          <div className="">Create your account</div>
    <form action="" className="" onSubmit={getUser}>
     <div className="">
     <input value={email} onChange={(e)=>setEmail(e.target.value)} />
      
      <input value={password} onChange={(e)=>setPassword(e.target.value)} />
     </div>
      <Button type="submit">Let's Go</Button>
    </form>
    </div>
  );
};

export default page;
