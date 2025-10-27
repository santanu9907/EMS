import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 rounded-xl p-15">
        <form
          className="flex flex-col items-center justify-center  px-5 py-4"
          onSubmit={(e) => {
            SubmitHandler(e);
            handleLogin(email, password);
            setEmail("");
            setPassword("");
          }}
        >
          <input
            className=" text-white placeholder:text-gray-400 bg-transparent  border-2 border-emerald-600 rounded-full outline-none px-3 py-1.5 text-xl "
            type="email"
            placeholder="Enter your login id"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            className=" text-white placeholder:text-gray-400 bg-transparent border-2 border-emerald-600 rounded-full mt-2 outline-none px-3 py-1.5 text-xl "
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button className=" text-white text-xl w-full mt-6 py-1.5 rounded-full border-2 border-emerald-600 bg-emerald-600 active:bg-emerald-800">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
