import { createSelector } from "reselect";

const selectService = (state) => state.service;

export const selectServices = createSelector(
  [selectService],
  (service) => service.services
);

export const selectIsServicesFetching = createSelector(
  [selectService],
  (service) => service.isFetching
);
