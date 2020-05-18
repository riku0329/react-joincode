import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectIsServicesFetching } from "../../redux/service/service.selectors";
import DetailsStyles from "./DetailsStyles";

const DetailsContainer = ({ currentService, isFetching }) => {
  return (
    <>
      {!isFetching ? (
        <DetailsStyles currentService={currentService} />
      ) : (
        <p>...Loding</p>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsServicesFetching,
});

export default connect(mapStateToProps, null)(DetailsContainer);
