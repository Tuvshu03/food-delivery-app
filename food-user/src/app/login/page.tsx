"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
import { ValidationEmail } from "@/lib/ValidationEmail";
import { ValidatePassword } from "@/lib/ValidationPassword";
// import { ToastAction } from "@/components/ui/toast"
const page = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  let valid = { email: "", password: "" };
  const getUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);

    try {
      setLoading(true);
      const address = await axiosInstance.post("/users/login", {
        email: email,
        password: password,
      });
    
      if (address.status === 200) {
        const { token } = address.data;
        localStorage.setItem("authorization", JSON.stringify(token));
        push("/");
        console.log(token);
        console.log(address.data);
      }
    } catch (err) {
      setLoading(false);
      console.log("error", err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message);
      }
    }
  };
  if (!ValidationEmail(email)) {
    valid.email = "Invalid email. Use a format like example@email.com";
  }

  if (!ValidatePassword(password)) {
    valid.password = "Incorrect password. Please try again";
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md items-end">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Log In
        </h2>
        <form onSubmit={getUser}>
          <div className="">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            {/* {error}s */}
            <div className="text-red-500">{valid.email}</div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            <div className="text-red-500">{valid.password}</div>
            <div className="text-red-600">{error}</div>
          </div>
          <Button
            disabled={valid.email.length !== 0 && valid.password.length !== 0}
            type="submit"
            className="w-full bg-black text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Let's Go
          </Button>
        </form>
        <div className="flex gap-2 justify-center">Don't have an account?
          <h3 onClick={()=>{push("/sign-up")}} className="text-blue-600">Sign up</h3>
        </div>
      </div>
    </div>
  );
};

export default page;
