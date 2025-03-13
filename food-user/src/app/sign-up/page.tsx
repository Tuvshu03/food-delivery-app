"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
// import { ToastAction } from "@/components/ui/toast" 
const page = () => {
  const {push} = useRouter()
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);

    try {
      setLoading(true);
      const address = await axiosInstance.post("/users/sign-up", {
        email: email,
        password: password,
      });
      console.log(address.data);
      if (address.status === 200) {
        console.log("success");
      }
    } catch (error) {
      setLoading(false);
      
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.status_message || "Алдаа гарлаа.");
      }
    }
  };

  return (
    <div className="w-50 flex flex-col">
      <div className="">Create your account</div>
      <form onSubmit={getUser}>
        <div className="">
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          {/* {error}s */}

          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" onClick={()=>{push("/login")}}>Let's Go</Button>
      </form>
    </div>
  );
};

export default page;
