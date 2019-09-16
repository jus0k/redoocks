import uuid from "uuid/v4";

export const ADD = "add";
export const DELETE = "del";
export const COMPLETE = "complete";

export const initialState = {
  toDos: [],
  completed: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { id: uuid(), text: action.payload }]
      };
    case DELETE:
      return {
        ...state,
        toDos: state.toDos.filter(toDo => {
          return toDo.id !== action.payload;
        })
      };
    case COMPLETE:
      return {
        ...state,
        toDos: state.toDos.filter(toDo => {
          return toDo.id !== action.payload;
        }),
        completed: [...state.completed, {}]
      };
    default:
      return;
  }
};

export default reducer;
