export const ADD_BTN = "ADD_BTN";
export const SUB_BTN = "SUB_BTN";

export function addBtn(value) {
  return {
    type: ADD_BTN,
    value
  };
}

export function subBtn(value) {
  return {
    type: SUB_BTN,
    value
  };
}
