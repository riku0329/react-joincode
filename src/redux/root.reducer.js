import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import serviceReducer from "./service/service.reducer";
import offerReducer from "./offer/offer.reducer"

export default combineReducers({
  user: userReducer,
  service: serviceReducer,
  offer: offerReducer
});
