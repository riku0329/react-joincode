import React, { useEffect } from "react";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectIsServicesFetching } from "../redux/service/service.selectors";
import { PageLayouts } from "../components/common";
import { fetchReceivedOffersStart } from "../redux/offer/offer.acions";

const ReceivedOffer = ({fetchReceivedOffers}) => {
  useEffect(() => {
    fetchReceivedOffers()
  }, [fetchReceivedOffers])
  return (
    <PageLayouts>
      <div>hello</div>
    </PageLayouts>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchReceivedOffers: () => dispatch(fetchReceivedOffersStart())
})

export default connect(null, mapDispatchToProps)(ReceivedOffer)
