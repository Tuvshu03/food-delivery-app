"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
// import { ToastAction } from "@/components/ui/toast" 
const page = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {push} = useRouter()
  const getUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);

    try {
      setLoading(true);
      const address = await axiosInstance.post("/users/login", {
        email: email,
        password: password,
      });
      console.log(address.data);
      if (address.status === 200) {
        const {token} = address.data
        localStorage.setItem("authorization", token);
        // push("/")
      }
    } catch (error) {
      setLoading(false);
      
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.status_message || "Алдаа гарлаа.");
      }
    }
  };

  return (
    <div className="w-50 flex flex-col mt-10">
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
        <Button type="submit">Let's Go</Button>
      </form>
    </div>
  );
};

export default page;
