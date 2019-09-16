import React from "react";
import { UNCOMPLETE, DELETE, COMPLETE } from "../actions";
import { useDispatch } from "../context";

export default ({ id, text, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{text}</span>
      <button onClick={() => dispatch({ type: DELETE, payload: id })}>
        <span>❌</span>
      </button>
      <button
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }
      >
        <span>{isCompleted ? "🙅‍♂️" : "✅"}</span>
      </button>
    </li>
  );
};
