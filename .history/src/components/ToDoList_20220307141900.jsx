import React from "react";
import { useState } from "react";

const ToDolist = () => {
    const [inputText, setInputText]=useState("");
    function hendleChangeInputText(e){
setInputText(e.target.value);
console.log(inputText);
    }
  return (
    <div>
      <div>
        <h1>ToDo</h1>
        <input type="text" value={inputText} placeholder="add ToDo List" onChange={(e)=>{
            hendleChangeInputText(e);
        }}/>
        <button>Add</button>
      </div>
      <div>
          <p></p>
      </div>
    </div>
  );
};

export default ToDolist;
