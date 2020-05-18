import OfferActionTypes from "./offer.types";

const INITIAL_STATE = {
  send: [],
  received: [],
  isFetching: false,
  error: null,
};

const offerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OfferActionTypes.FETCH_SEND_OFFERS_START:
    case OfferActionTypes.FETCH_RECEIVED_OFFERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case OfferActionTypes.FETCH_SEND_OFFERS_FAILURE:
    case OfferActionTypes.FETCH_RECEIVED_OFFERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case OfferActionTypes.FETCH_SEND_OFFERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        send: action.payload,
      };
    case OfferActionTypes.FETCH_RECEIVED_OFFERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        received: action.payload,
      };
    default:
      return state;
  }
};

export default offerReducer;
