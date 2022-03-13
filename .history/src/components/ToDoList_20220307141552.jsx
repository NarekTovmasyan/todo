import React from "react";
import { useState } from "react";

const ToDolist = () => {
    const [inputText, setInputText]=useState("");
  return (
    <div>
      <div>
        <h1>ToDo</h1>
        <input type="text" placeholder="add ToDo List" />
        <button>Add</button>
      </div>
      <div>
          <p></p>
      </div>
    </div>
  );
};

export default ToDolist;
