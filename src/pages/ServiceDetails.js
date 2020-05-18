import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { PageLayouts, WithSpinner } from "../components/common";
import { fetchServiceStart } from "../redux/service/service.actions";
import DetailsContainer from "../components/service-details/DetailsContainer";
import { selectIsServicesFetching, SelectCurrentService } from "../redux/service/service.selectors";

const DetailsContainerWithSpinner = WithSpinner(DetailsContainer)

const ServiceDetails = ({ fetchServiceStart, isFetching, currentService }) => {
  const { serviceId } = useParams();
  useEffect(() => {
    fetchServiceStart(serviceId);
  }, [serviceId, fetchServiceStart]);
  return (
    <PageLayouts><DetailsContainerWithSpinner isLoading={isFetching} currentService={currentService} /></PageLayouts>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsServicesFetching,
  currentService: SelectCurrentService,
});

const mapDispatchToProps = (dispatch) => ({
  fetchServiceStart: (id) => dispatch(fetchServiceStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetails);
