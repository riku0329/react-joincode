import React from "react";
import styled from "styled-components";
import {  useHistory } from "react-router-dom";

import { CardItemStyled } from "../common/CardItemStyled";

export const ImageStyled = styled.div`
  width: 100%;
  height: 50%;

  :hover img {
    opacity: 0.8;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardStyled = styled.div`
  padding-left: 20px;
`;

export const CardTitle = styled.p`
  font-weight: bold;
`;

export const CardUser = styled.p`
  color: ${(p) => p.theme.TEXT};
  font-size: 14px;
`;

const CardItem = ({ id, title, image, price, displayName }) => {
  const history = useHistory();
  return (
    <CardItemStyled onClick={() => history.push(`/service/${id}`)}>
      <ImageStyled>
        <CardImage src={image} />
      </ImageStyled>
      <CardStyled>
        <CardTitle>{title}</CardTitle>
        <CardUser>{displayName}</CardUser>
        <p>￥{price}</p>
      </CardStyled>
    </CardItemStyled>
  );
};

export default CardItem;
