import React from "react";

const TaskList = () => {
  return (
    <div
      id="taskList"
      className=" overflow-x-auto flex items-center justify-start gap-5 flex-nowrap  w-full h-[55%] mt-10 p-5"
    >
      <div className="bg-red-400 flex-shrink-0 w-[300px] p-5 h-full rounded-xl">
        <div className="flex justify-between items-center ">
          <h2 className="bg-red-600 px-3 rounded text-sm py-1">High</h2>
          <p className="text-sm">13 mar 2024</p>
        </div>
        <h2 className="text-2xl font-semibold mt-5">Make a Youtube Video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          magni, nisi quam fugiat consectetur optio.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
