import React, { useState } from "react";
import Logo from "../assets/logo.png";
import ToDoItem from "./ToDoItem";

const ToDo = () => {
  const [list, setList] = useState([
    { id: 1, text: "clean the house" },
    { id: 2, text: "buy milk" }
  ]);
  const [toDo, setToDo] = useState("");

  const createNewToDoItem = () => {
    //validate todo
    if (!toDo) {
      alert("Please enter a todo!");
      return;
    }
    const newId = Math.max.apply(null, list.map((t) => t.id)) + 1;
    const newToDo = { id: newId, text: toDo };
    setList([...list, newToDo]);
    setToDo("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createNewToDoItem();
    }
  };

  const handleInput = (e) => {
    setToDo(e.target.value);
  };

  const deleteItem = (todo) => {
    setList(list.filter((item) => item !== todo));
  };

  return (
    <div className="ToDo">
      <img className="Logo" src={Logo} alt="React logo" />
      <h1 className="ToDo-Header">React To Do</h1>
      <h3 className="ToDo-Subheader">now with Hooks!</h3>
      <div className="ToDo-Container">
        <div className="ToDo-Content">
          {list.map((item) => {
            return <ToDoItem key={item.id} item={item} deleteItem={deleteItem} />;
          })}
        </div>

        <div className="ToDoInput">
          <input type="text" value={toDo} onChange={handleInput} onKeyPress={handleKeyPress} />
          <button className="ToDo-Add" onClick={createNewToDoItem}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
