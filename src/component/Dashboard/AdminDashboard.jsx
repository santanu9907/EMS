import React from "react";
import Header from "../other/Header";
import CreatTask from "../other/CreatTask";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen p-10">
      <Header />
      <CreatTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
