import { ADD_BTN, SUB_BTN } from "../action";

//pure functions

export const counter = (state = 0, action) => {
  switch (action.type) {
    case ADD_BTN:
      return state + 1;

    case SUB_BTN:
      return state - 1;

    default:
      return state;
  }
};
