import React from "react";

const CompleteTask = () => {
  return (
    <div className="bg-green-400 flex-shrink-0 w-[300px] p-5 h-full rounded-xl">
      <div className="flex justify-between items-center ">
        <h2 className="bg-red-600 px-3 rounded text-sm py-1">High</h2>
        <p className="text-sm">13 mar 2024</p>
      </div>
      <h2 className="text-2xl font-semibold mt-5">Make a Youtube Video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque magni,
        nisi quam fugiat consectetur optio.
      </p>
      <div className=" mt-2">
        <button className=" w-full">Complete</button>
      </div>
    </div>
  );
};

export default CompleteTask;
