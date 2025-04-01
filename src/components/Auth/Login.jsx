import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  // State to manage email input field
  const [email, setEmail] = useState("");
  
  // State to manage password input field
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevents page refresh on form submission
    handleLogin(email, password); // Calls the login function passed as a prop
    setEmail(""); // Clears the email field after submission
    setPassword(""); // Clears the password field after submission
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        {/* Login Form */}
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center">
          
          {/* Email Input Field */}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          
          {/* Password Input Field */}
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          
          {/* Login Button */}
          <button className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;