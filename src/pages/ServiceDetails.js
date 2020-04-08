import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { PageLayouts } from "../components/common";
import { fetchServiceStart } from "../redux/service/service.actions";

const DetailsContainer = styled.div`
  background: ${(p) => p.theme.BASE2};
  width: 80%;
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const DetailsImage = styled.div`
  flex: 1;
`;

const DetailsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const ServiceDetails = ({fetchServiceStart}) => {
  const { serviceId } = useParams();
  useEffect(() => {
    fetchServiceStart(serviceId)
  }, []);
  return (
    <PageLayouts>
      <DetailsContainer>
        <DetailsImage></DetailsImage>
        <DetailsStyled></DetailsStyled>
      </DetailsContainer>
    </PageLayouts>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchServiceStart: (id) => dispatch(fetchServiceStart(id)),
});

export default connect(null, mapDispatchToProps)(ServiceDetails);
