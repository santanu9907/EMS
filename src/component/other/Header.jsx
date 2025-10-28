import React, { useState } from "react";

const Header = ({ data }) => {
  // const [userName, setUserName] = useState("");

  // if (!data) {
  //   setUserName("Admin");
  // } else {
  //   setUserName(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <div className="flex items-end justify-between ">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">"userName"👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg px-5 py-3 font-medium rounded-xl"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
