import React from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <>
      <div className="w-full max-w-md p-8 space-y-4 bg-[#222831] rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login QuickChat</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400">Email</label>
            <input 
              type="email" 
              className="bg-[#1b2831] w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" 
              placeholder="abc@gmail.com" 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Password</label>
            <input 
              type="password" 
              className="bg-[#1b2831] w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Link
              to="/signup"
              className="text-base font-medium hover:text-blue-400 mt-1 inline-block text-gray-400"
            >
              Create New Account 
            </Link>
          <div>
            <button 
              type="submit" 
              onClick={handleSubmit}
              className="disabled={loading} w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-2"
            >
              {loading ? (
                <span className="loading loading-spinner">Loading...</span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login