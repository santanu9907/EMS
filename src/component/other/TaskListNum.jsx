import React from "react";

const TaskListNum = () => {
  return (
    <div className="flex   justify-between gap-5  mt-10">
      <div className="w-[45%] h-fit bg-blue-400 rounded-xl py-6 px-9">
        <h2 className=" text-3xl font-semibold">1</h2>
        <h3 className="text-lg font-medium">New Task</h3>
      </div>
      <div className="w-[45%] h-fit bg-emerald-400 rounded-xl py-6 px-9">
        <h2 className=" text-3xl font-semibold">3</h2>
        <h3 className="text-lg font-medium">Completed Task</h3>
      </div>
      <div className="w-[45%] h-fit bg-amber-300 rounded-xl py-6 px-9">
        <h2 className=" text-3xl font-semibold">0</h2>
        <h3 className="text-lg font-medium">Accepted Task</h3>
      </div>
      <div className="w-[45%] h-fit bg-red-400 rounded-xl py-6 px-9">
        <h2 className=" text-3xl font-semibold">0</h2>
        <h3 className="text-lg font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNum;
