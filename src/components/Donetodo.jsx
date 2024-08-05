import React from 'react';
import { MdDelete } from "react-icons/md";

const Donetodo = ({ done, deleteDoneTodo }) => {
  return (
    <div className='w-[300px] md:w-[500px] lg:w-[700px]'>
        <div>
            <p className="text-center text-2xl md:text-3xl text-primary font-bold">Done</p>
        </div>
      {!done.length && (
        <div className="bg-secondary m-4 px-1 py-2 rounded-lg">
          <p className="text-center text-xl md:text-2xl font-semibold">No To-dos Done Yet</p>
        </div>
      )}
      {done.length > 0 &&
        done.slice().reverse().map((data) => (
          <div key={data.id} className="bg-secondary mx-4 my-2 rounded-lg">
            <div className="bg-primary p-2 rounded-t-lg flex justify-between items-center">
              <p className="text-white text-semibold text-xl font-semibold">{data.title}</p>
              <div className="flex items-center">
                <button onClick={()=>{deleteDoneTodo(data.id)}} className="bg-red-600 text-white p-1 text-2xl rounded-lg hover:scale-105 active:scale-95 mx-1"><MdDelete/></button> 
              </div>
            </div>
            <div className="px-2 py-1">
              <p>{data.todo}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Donetodo;
