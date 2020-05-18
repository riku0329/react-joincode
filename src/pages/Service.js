import React, { useEffect } from "react";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectIsServicesFetching } from "../redux/service/service.selectors";
import { PageLayouts } from "../components/common";
import ServiceCreateModal from "../components/service/ServiceCreateModal";
import { fetchServicesStart } from "../redux/service/service.actions";
import ServiceCard from "../components/service/ServiceCard";

const ServiceStyled = styled.div`
  background: ${(p) => p.theme.BASE2};
  max-width: 960px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const TitleStyled = styled.div`
  width: 100%;
  height: 20rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Service = ({ fetchServicesStart }) => {
  useEffect(() => {
    fetchServicesStart();
  }, [fetchServicesStart]);
  return (
    <PageLayouts>
      <ServiceStyled>
        <ServiceCreateModal />
        <TitleStyled>
          <h1>新しいことを学ぶ</h1>
          <p>講師から直接学ぶことができます</p>
        </TitleStyled>
        <ServiceCard />
      </ServiceStyled>
    </PageLayouts>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsServicesFetching,
});

const mapDispatchToProps = (dispach) => ({
  fetchServicesStart: () => dispach(fetchServicesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Service);
