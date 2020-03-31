import React from "react";
import styled from "styled-components";
import { LIGHTER_GREY, OFF_WHITE } from "../../utils/constans";


const ToggleThemeWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid ${LIGHTER_GREY};
  margin: auto;
  display: flex;
  background: ${p => p.theme.BASE2};
`;

const Notch = styled.div`
  width: 21px;
  min-width: 21px;
  height: 21px;
  border-radius: 50%;
  border: 1px solid ${LIGHTER_GREY};
  margin-top: 1px;
  background: ${OFF_WHITE};
  transition: transform 0.1s linear;
  transform: translate(${p => p.isActive ? '26px' : "1px"});
`;

export const ToggleTheme = ({isActive, onToggle}) => {
  return (
    <ToggleThemeWrapper onClick={onToggle}>
      <Notch isActive={isActive} />
    </ToggleThemeWrapper>
  )
}
