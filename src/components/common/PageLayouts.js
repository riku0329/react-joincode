import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Content = styled.main`
  display: flex;
  justify-content: center;
  height: 100vh;
  max-width: 100%;
  padding-top: 70px;
  box-sizing: border-box;
  font-family: "Open Sans";
  background: ${p => p.theme.BASE1};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Kaushan Script";
  }
`;

export const PageLayouts = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};
