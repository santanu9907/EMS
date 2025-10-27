import React from "react";

const CreatTask = () => {
  return (
    <div className="bg-[#1c1c1c] mt-7 rounded p-5">
      <form className="flex items-start justify-between w-full flex-wrap">
        <div className="w-1/2">
          <div>
            <h3 className=" mb-0.5">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-4/5 py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="mb-0.5">Date</h3>
            <input
              type="date"
              className="w-4/5 py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="mb-0.5">Asign to</h3>
            <input
              type="text"
              placeholder="employee name"
              className="w-4/5 py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="mb-0.5">Category</h3>
            <input
              type="text"
              placeholder="design,dev etc"
              className="w-4/5 py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <div className="w-full">
            <h3 className=" text-gray-300 mb-0.5">Description</h3>
            <textarea
              name=""
              id=""
              className="border-[1px] border-gray-400 mb-4 w-full h-44 outline-none bg-transparent py-2 px-4"
            ></textarea>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-600 w-full px-5 py-3 rounded text-lg">
            Creat Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatTask;
