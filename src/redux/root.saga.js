import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/user.sagas";
import { serviceSagas } from "./service/service.sagas";
import { offerSagas } from "./offer/offer.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(serviceSagas), call(offerSagas)]);
}
