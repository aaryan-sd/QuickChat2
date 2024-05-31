import React, { useState } from 'react';
import useSignUp from '../hooks/useSignUp';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [error, setError] = useState(null);
  const { loading, signup } = useSignUp();

  // const handleCheckboxChange = (gender) => {
  //   setInputs({ ...inputs, gender });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await signup(inputs);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <div className="w-full max-w-md  p-8 space-y-4 bg-[#222831] rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold text-center">Sign Up QuickChat</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <label className="block text-sm font-medium text-gray-400">Full Name</label>
            <input
              type="text"
              className="bg-[#1b2831] w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
              value={inputs.fullname}
              onChange={(e) => {
                setInputs({ ...inputs, fullname: e.target.value });
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              className="bg-[#1b2831] w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              value={inputs.email}
              onChange={(e) => {
                setInputs({ ...inputs, email: e.target.value });
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Password</label>
            <input
              type="password"
              className="bg-[#1b2831] w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={(e) => {
                setInputs({ ...inputs, password: e.target.value });
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Confirm Password</label>
            <input
              type="password"
              className="bg-[#1b2831] w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirm your password"
              value={inputs.confirmPassword}
              onChange={(e) => {
                setInputs({ ...inputs, confirmPassword: e.target.value });
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Gender</label>
            <div className="mt-2 space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="radio radio-primary"
                  checked={inputs.gender === 'male'}
                  onChange={(e) => {
                    setInputs({ ...inputs, gender: e.target.value });
                  }}
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="radio radio-primary"
                  checked={inputs.gender === 'female'}
                  onChange={(e) => {
                    setInputs({ ...inputs, gender: e.target.value });
                  }}
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
          {/* <p className='flex justify-center'>Already have an Account? <a href="/login" className="text-blue-500">Login</a></p> */}
          <Link
              to="/login"
              className="text-base font-medium  hover:text-blue-400  mt-1 inline-block text-gray-400"
            >
              Already have an account? 
            </Link>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
