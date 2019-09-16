import React from "react";

import { useState } from "../context";

import Add from "./Add";
import List from "./List";
import ToDo from "./ToDo";

const App = () => {
  const { toDos, completed } = useState();
  return (
    <>
      <Add />
      <List name={"To Dos"}>
        {toDos.map(toDo => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </List>

      <List name={completed.length !== 0 ? "Completed" : ""}>
        {completed.map(toDo => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  );
};

export default App;
