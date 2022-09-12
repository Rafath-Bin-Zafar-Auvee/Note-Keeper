import React, { useState } from "react";

const AddNote = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTodo = async (e) => {
    e.preventDefault();
    const Task = e.target.TaskName.value;
    const Description = e.target.TaskDescription.value;
    const tagline = e.target.tagline.value;
    const Complete = false;

    const task = {
      Task,
      Description,
      tagline,
      Complete,
    };

    console.log(task);
    if (task) {
      // console.log("All inputs are working");
    } else {
      // console.log("All inputs are empty");
    }
    const api = `http://localhost:5000/all`;
    fetch(api, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Working and the Data", data);
        e.target.reset();
      });
  };

  return (
    <div className={`max-w-screen-md mx-auto p-5 mt-5 pt-6 h-screen`}>
      <div className="text-center mb-16">
        {/* <p className="mt-4 text-3xl md:text-5xl lg:text-7xl text-center leading-7 text-indigo-500 font-regular ">
          AddNote
        </p> */}
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Add <span className="text-indigo-600">Todo</span>
        </h3>
      </div>

      <form onSubmit={handleTodo} className={`w-full `}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Task Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="TaskName"
              placeholder="Rafath"
              required
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Tagline
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="tagline"
              required
              placeholder="tagline"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              for="grid-password"
            >
              Task Description
            </label>
            <textarea
              rows="10"
              name="TaskDescription"
              className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="You are hired!"
              required
            ></textarea>
          </div>
          <div className="flex justify-between w-full px-3">
            <button
              className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
            >
              Done
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNote;