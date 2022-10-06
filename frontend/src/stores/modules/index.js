import { combineReducers } from "redux";
import user from "./user";
import bag from "./bag";
import { persistReducer } from "redux-persist"; // load
import storageSession from "redux-persist/lib/storage/session"; // sessionStorage

const persistConfig = {
  key: "root",
  storage: storageSession, // 사용할 스토리지를 정의해요.
  whitelist: ["user", "bags"], // 유지 할 데이터를 정의해요
  blacklist: [], // 제외 할 데이터를 정의해요
};

const rootReducer = combineReducers({
  user,
  bag,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
