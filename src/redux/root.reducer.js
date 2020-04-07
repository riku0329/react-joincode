import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import serviceReducer from "./service/service.reducer";

export default combineReducers({
  user: userReducer,
  service: serviceReducer
});
