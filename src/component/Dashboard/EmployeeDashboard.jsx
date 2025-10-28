import React from "react";
import Header from "../other/Header";
import TaskListNum from "../other/TaskListNum";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="h-screen p-10">
      <Header data={data} />
      <TaskListNum data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
