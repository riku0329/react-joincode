import React from "react";
import { PageLayouts, CardContainer, CardItemStyled } from "../components/common";
import styled from "styled-components";

const CodeStyled = styled.div`
  background: ${p => p.theme.BASE2};
  width: 80%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  text-align: center;
`;



export default function Home() {
  return (
    <PageLayouts>
      <CodeStyled>
        <Title>
          <h2>New Project</h2>
        </Title>
        <CardContainer>
          <CardItemStyled>a</CardItemStyled>
        </CardContainer>
      </CodeStyled>
    </PageLayouts>
  );
}
