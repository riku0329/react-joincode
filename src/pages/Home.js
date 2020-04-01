import React from "react";
import { PageLayouts } from "../components/common";
import styled from "styled-components";


const SideBar = styled.div`
  background: ${p => p.theme.BASE2};
  flex: 1;
  border-right: 2px solid ${p => p.theme.BASE1};

  @media (max-width: 768px) {
    display: none;
  }
`;

const MesseageStyled = styled.div`
  background: ${p => p.theme.BASE2};
  flex: 2;
`;

export default function Home() {
  return (
    <PageLayouts>
      <SideBar></SideBar>
      <MesseageStyled></MesseageStyled>
    </PageLayouts>
  );
}
