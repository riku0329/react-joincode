import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CardContainer } from "../common/CardContainer";
import { selectServices,selectIsServicesFetching } from "../../redux/service/service.selectors";
import CardItem from "./CardItem";
import { Spinner } from "../common";

const ServiceCard = ({ services, selectIsServicesFetching }) => {
  return (
    <CardContainer>
      {!selectIsServicesFetching ? (
        services.map(({ id, ...otherServiceProps }) => (
          <CardItem key={id} {...otherServiceProps} />
        ))
      ) : (
        <Spinner />
      )}
    </CardContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  services: selectServices,
  isFetching: selectIsServicesFetching
});

export default connect(mapStateToProps, null)(ServiceCard);
