import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {

const [contact,setContact]=useState("");
const [password,setPassword]=useState("");

const navigate=useNavigate();


const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const res=await axios.post("http://localhost:5000/api/login",{
        contact,
        password
      })
      console(res.data)
      navigate("/");
    }catch(err){
      alert("Login failed",err.response?.data || err.message)
    }
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email / Contact No
            </label>
            <input
              type="text"
              placeholder="Enter your email or phone"
              value={contact}
              onChange={(e)=>setContact(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-200"
          >
            Login
          </button>

          <a href="/signup" className="text-red-600 items-center justify-center flex">Don't have and account? Signup here</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
