import OfferActionTypes from "./offer.types";

export const createOfferStart = (offer) => ({
  type: OfferActionTypes.CREATE_OFFER_START,
  payload: offer,
});

export const createOfferSuccess = (offer) => ({
  type: OfferActionTypes.CREATE_OFFER_SUCCESS,
  payload: offer,
});

export const createOfferFailure = (error) => ({
  type: OfferActionTypes.CREATE_OFFER_FAILURE,
  payload: error,
});


export const fetchSendOffersStart = () => ({
  type: OfferActionTypes.FETCH_SEND_OFFERS_START,
})


export const fetchSendOffersSuccess = (sendOffers) => ({
  type: OfferActionTypes.FETCH_SEND_OFFERS_START,
  payload: sendOffers
})

export const fetchSendOffersFailure = (error) => ({
  type: OfferActionTypes.FETCH_SEND_OFFERS_FAILURE,
  payload: error
})

export const fetchReceivedOffersStart = () => ({
  type: OfferActionTypes.FETCH_RECEIVED_OFFERS_START
})

export const fetchReceivedOffersSuccess = (receivedOffers) => ({
  type: OfferActionTypes.FETCH_RECEIVED_OFFERS_SUCCESS,
  payload: receivedOffers
})

export const fetchReceivedOffersFailure = (error) => ({
  type: OfferActionTypes.FETCH_RECEIVED_OFFERS_FAILURE,
  payload: error
})
