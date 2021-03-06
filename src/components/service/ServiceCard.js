import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CardContainer } from "../common/CardContainer";
import {
  selectServices,
  selectIsServicesFetching,
} from "../../redux/service/service.selectors";
import CardItem from "./CardItem";
import { Spinner } from "../common";

const ServiceCard = ({ services, isFetching }) => {
  return (
    <CardContainer>
      {!isFetching ? (
        services.map(({ id, ...otherServiceProps }) => (
          <CardItem key={id} id={id} {...otherServiceProps} />
        ))
      ) : (
        <Spinner />
      )}
    </CardContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  services: selectServices,
  isFetching: selectIsServicesFetching,
});

export default connect(mapStateToProps, null)(ServiceCard);
