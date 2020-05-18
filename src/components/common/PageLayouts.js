import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Content = styled.main`
  max-width: 100%;
  margin-top: 30px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Kaushan Script";
    font-size: 2.4rem
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
