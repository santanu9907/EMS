import React from "react";
import Header from "../other/Header";
import TaskListNum from "../other/TaskListNum";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="h-screen p-10">
      <Header />
      <TaskListNum />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
