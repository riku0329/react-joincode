import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { PageLayouts, Spinner, WithSpinner } from "../components/common";
import { fetchServiceStart } from "../redux/service/service.actions";
import DetailsContainer from "../components/service-details/ServiceDetailsContainer";
import { selectIsServicesFetching } from "../redux/service/service.selectors";

const DetailsContainerWithSpinner = WithSpinner(DetailsContainer)

const ServiceDetails = ({ fetchServiceStart, isFetching }) => {
  const { serviceId } = useParams();
  useEffect(() => {
    fetchServiceStart(serviceId);
  }, [serviceId, fetchServiceStart]);
  return (
    <PageLayouts><DetailsContainerWithSpinner isLoading={isFetching} /></PageLayouts>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsServicesFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchServiceStart: (id) => dispatch(fetchServiceStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetails);
