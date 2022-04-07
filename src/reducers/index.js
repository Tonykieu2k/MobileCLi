import { useReducer } from "react";
import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
// import cartReducer from "/reducers/cartReducer";
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
  productReducer,
  userReducer
  // nếu có reducer khác thì add thêm ở đây
});

export default rootReducer;
