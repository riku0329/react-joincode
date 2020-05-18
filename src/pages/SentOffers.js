import React, { useEffect } from "react";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectIsServicesFetching } from "../redux/service/service.selectors";
import { PageLayouts } from "../components/common";
import { fetchSendOffersStart } from "../redux/offer/offer.acions";

const SendOffer = ({ fetchSendOffersStart }) => {
  useEffect(() => {
  }, [])
  return (
    <PageLayouts>
      <div>hello,hello</div>
    </PageLayouts>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchSendOffersStart: () => dispatch(fetchSendOffersStart())
})

export default connect(null, mapDispatchToProps)(SendOffer)
