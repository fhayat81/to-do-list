import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [title, setTitle] = useState("Untitled");
  const [todo, setTodo] = useState("");

  return (
    <div className="my-4 w-[300px] md:w-[500px] lg:w-[700px]">
      <div className="bg-secondary mx-4 rounded-lg">
        <div className="bg-primary rounded-t-lg px-2 py-1 border-b-2 border-t-slate-300">
          <p className="text-white font-semibold text-xl text-center">
            ADD TO-DO
          </p>
        </div>
        <div className="px-2 py-1 my-1 flex flex-col">
          <label htmlFor="title" className="text-lg font-semibold">
            Title:
          </label>
          <input
            name="title"
            type="text"
            className="bg-tertiary border-2 border-slate-300 rounded-full px-2 py-1"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="px-2 flex flex-col">
          <label htmlFor="todo" className="text-lg font-semibold">
            Todo:
          </label>
          <textarea
            name="todo"
            id="todo"
            className="bg-tertiary border-2 border-slate-300 rounded-lg h-[150px] px-2 py-1"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="flex justify-center py-1">
          <button
            onClick={() => {
              addTodo(title, todo);
              setTitle("Untitled");
              setTodo("");
            }}
            className="bg-primary px-4 py-1 my-1 rounded-full text-white text-xl font-semibold hover:scale-105 active:scale-95"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
