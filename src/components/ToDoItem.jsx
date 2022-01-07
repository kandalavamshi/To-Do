import React, { useState } from "react";

function ToDoItem(props) {
  const [lineCross, setLineCross] = useState(false);

  function lineClick() {
    setLineCross((prev) => !prev);
  }

  return (
    <div>
      <li
        style={{ textDecorationLine: lineCross ? "line-through" : "none" }}
        onClick={lineClick}
      >
        {props.text2}
      </li>
    </div>
  );
}
export default ToDoItem;
