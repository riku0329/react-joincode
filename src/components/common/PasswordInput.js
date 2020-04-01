import React, { useState } from "react";
import styled from "styled-components";

import { Input } from "./Input";

const PasswordInputWrapper = styled.div`
  display: flex;
  ~ div {
    margin-bottom: 8px;
    color: ${p => p.theme.SECONDARY_TEXT};
  }
`;

const PasswordInputStyled = styled(Input).attrs(() => ({
  type: "password",
  placeholder: "Password"
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid ${p => p.theme.PRIMARY_BUTTON};
  font-size: 0.9em;
  display: flex;
  padding: 1px 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: ${p => p.theme.PRIMARY_BUTTON};
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: ${p => p.theme.PRIMARY_TEXT};
  align-items: center;
`;

export const PasswordInput = props => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props} />
        <ToggleButton onClick={() => setShowPassword(s => !s)}>
          {showPassword ? "隠す" : "確認"}
        </ToggleButton>
      </PasswordInputWrapper>
      <div>{showPassword ? props.value : ""}</div>
    </>
  );
};
