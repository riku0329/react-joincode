import React from "react";
import styled from "styled-components";

const Spinner = styled.div`
  height: 40px;
  width: 40px;
  margin: 16px auto;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const WithSpinner = WrappedConponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedConponent {...otherProps} />;
};

export default WithSpinner;

export { WithSpinner };
