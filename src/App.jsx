import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import Donetodo from "./components/Donetodo";

function App() {
  const savedDataString = localStorage.getItem("todoList");
  const savedData = savedDataString ? JSON.parse(savedDataString) : {list: [], done: []};
  const [list, setList] = useState(savedData.list ? savedData.list : []);
  const [done, setDone] = useState(savedData.done ? savedData.done : []);

  const addTodo = (title, todo) => {
    if (todo && title) {
      const newTodo = {
        id: list.length + 1,
        title: title,
        todo: todo,
      };

      setList([...list, newTodo]);
    }
  };

  const deleteTodo = (id) => {
    const newList = list.filter((data) => data.id != id);
    const newList2 = newList.map((data, index) => ({ ...data, id: index + 1 }));
    setList(newList2);
  };

  const doneTodo = (id) => {
    const newDone = list.filter((data) => data.id == id);
    const newDone2 = [...done, newDone[0]];
    const newDone3 = newDone2.map((data, index) => ({ ...data, id: index + 1 }));
    setDone(newDone3);
    deleteTodo(id);
  };

  const deleteDoneTodo = (id) => {
    const newDone = done.filter((data) => data.id != id);
    const newDone2 = newDone.map((data, index) => ({ ...data, id: index + 1 }));
    setDone(newDone2);
  };

  useEffect(() => {
    const saveData = () => {
      try {
        const Data = {
          list,
          done,
        };
        localStorage.setItem("todoList", JSON.stringify(Data));
      } catch (err) {
        console.error("Error in saving data ", err);
      }
    };

    saveData();
  }, [list, done]);

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <Form addTodo={addTodo} />
        <List list={list} deleteTodo={deleteTodo} doneTodo={doneTodo} />
        <Donetodo done={done} deleteDoneTodo={deleteDoneTodo} />
      </div>
    </div>
  );
}

export default App;
