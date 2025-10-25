import React from "react";

const CreatTask = () => {
  return (
    <div className="bg-[#1c1c1c] w-full h-fit">
      <form>
        <div>
          <div>
            <h3>Task Title</h3>
            <input type="text" placeholder="Make a UI design" />
          </div>
          <div>
            <h3>Date</h3>
            <input type="date" />
          </div>
          <div>
            <h3>Asign to</h3>
            <input type="text" placeholder="employee name" />
          </div>
          <div>
            <h3>Category</h3>
            <input type="text" placeholder="design,dev etc" />
          </div>
        </div>
        <div>
          <div>
            <h3>Description</h3>
            <textarea name="" id=""></textarea>
          </div>
          <button>Creat Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreatTask;
