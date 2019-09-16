import React, { useState, useReducer } from "react";
import reducer, {
  initialState,
  ADD,
  DELETE,
  COMPLETE,
  UNCOMPLETE
} from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  };

  return (
    <>
      <h2>Add To Do</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write to do"
          value={newToDo}
          onChange={onChange}
        />
      </form>
      <h2>To Dos</h2>
      <ul>
        {state.toDos.map(toDo => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <button
              onClick={() => dispatch({ type: DELETE, payload: toDo.id })}
            >
              <span>❌</span>
            </button>
            <button
              onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}
            >
              <span>✅</span>
            </button>
          </li>
        ))}
      </ul>
      {state.completed.length !== 0 && (
        <>
          <h2>Completed</h2>
          <ul>
            {state.completed.map(toDo => (
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <button
                  onClick={() => dispatch({ type: DELETE, payload: toDo.id })}
                >
                  <span>❌</span>
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: UNCOMPLETE, payload: toDo.id })
                  }
                >
                  <span>🙅‍♂️</span>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default App;
