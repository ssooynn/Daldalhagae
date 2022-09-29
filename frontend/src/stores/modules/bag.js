import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

export const addItem = createAction(ADD_ITEM, (item) => item);
export const deleteItem = createAction(DELETE_ITEM, (item) => item);

const initialState = [];

// {
//   패키지 이름, 구성, 금액, 이미지
//   packageName: "",
//   petName:"",
//   desc: "",
//   price: 0,
//   feed: 0,
//   snack: 0,
//   toy: 0,
// },

export default handleActions(
  {
    [ADD_ITEM]: (state, { payload: item }) => [...state, item],
    [DELETE_ITEM]: (state, { payload: item }) =>
      state.filter(
        (t) => t.petName !== item.petName || t.packageName !== item.packageName
      ),
  },
  initialState
);

const actionCreators = {
  addItem,
};

export { actionCreators };
