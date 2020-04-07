import React from "react";
import { PageLayouts } from "../components/common";
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

const CodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  width: 90%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CodeCard = styled.div`
  width: 30%;
  height: 18rem;
  background: ${p => p.theme.BASE};
  margin: 15px;
  border-radius: 3px;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default function Home() {
  return (
    <PageLayouts>
      <CodeStyled>
        <Title>
          <h2>New Project</h2>
        </Title>
        <CodeContainer>
          <CodeCard>
            <h3>インスタグラムクローン開発</h3>
          </CodeCard>
          <CodeCard>b</CodeCard>
          <CodeCard>c</CodeCard>
          <CodeCard>d</CodeCard>
          <CodeCard>e</CodeCard>
          <CodeCard>a</CodeCard>
          <CodeCard>b</CodeCard>
          <CodeCard>c</CodeCard>
          <CodeCard>d</CodeCard>
          <CodeCard>e</CodeCard>
        </CodeContainer>
      </CodeStyled>
    </PageLayouts>
  );
}
