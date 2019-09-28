import React from "react";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  let { item, deleteItem } = props;

  return (
    <div className="ToDoItem">
      <p className="ToDoItem-Text">{item}</p>
      <button className="ToDoItem-Delete" onClick={deleteItem}>
        -
      </button>
    </div>
  );
};

export default ToDoItem;
