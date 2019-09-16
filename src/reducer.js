import uuid from "uuid/v4";

export const ADD = "add";
export const DELETE = "del";
export const COMPLETE = "complete";
export const UNCOMPLETE = "uncomplete";

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
      const target = state.toDos.find(toDo => toDo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter(toDo => {
          return toDo.id !== action.payload;
        }),
        completed: [...state.completed, { ...target }]
      };
    case UNCOMPLETE:
      const aTarget = state.completed.find(toDo => toDo.id === action.payload);
      return {
        ...state,
        toDos: [...state.toDos, { ...aTarget }],
        completed: state.completed.filter(toDo => {
          return toDo.id !== action.payload;
        })
      };
    default:
      return;
  }
};

export default reducer;
