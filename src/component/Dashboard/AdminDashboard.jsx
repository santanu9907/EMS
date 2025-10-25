import React from "react";
import Header from "../other/Header";
import CreatTask from "../other/CreatTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen p-10">
      <Header />
      <CreatTask />
    </div>
  );
};

export default AdminDashboard;
