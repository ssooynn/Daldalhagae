import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const SET_USER = "SET_USER";

export const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {
  user: {
    token: "",
  },
};

export default handleActions(
  {
    //사용자 정보 설정
    [SET_USER]: (state, { payload: user }) =>
      produce(state, (draft) => {
        draft.user = user;
        console.log(draft.user);
      }),
  },
  initialState
);

const actionCreators = {
  setUser,
};

export { actionCreators };
