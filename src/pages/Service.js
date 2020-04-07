import React from "react";
import styled from "styled-components";

import { PageLayouts } from "../components/common";
import ServiceCreateModal from "../components/common/ServiceCreateModal";

const ServiceStyled = styled.div`
  background: ${p => p.theme.BASE2};
  width: 80%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Service = () => {
  return (
    <PageLayouts>
      <ServiceStyled>
        <ServiceCreateModal />
      </ServiceStyled>
    </PageLayouts>
  );
};

export default Service;
