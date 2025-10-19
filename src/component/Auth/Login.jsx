import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 rounded-xl p-15">
        <form className="flex flex-col items-center justify-center  px-5 py-4">
          <input
            className=" text-white placeholder:text-gray-400 bg-transparent  border-2 border-emerald-600 rounded-full outline-none px-3 py-1.5 text-xl "
            type="email"
            placeholder="Enter your login id"
          />
          <input
            className=" text-white placeholder:text-gray-400 bg-transparent border-2 border-emerald-600 rounded-full mt-2 outline-none px-3 py-1.5 text-xl "
            type="password"
            placeholder="Enter your password"
          />
          <button className=" text-white text-xl w-full mt-6 py-1.5 rounded-full border-2 border-emerald-600 bg-emerald-600 ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
