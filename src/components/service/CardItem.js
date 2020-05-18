import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import moment from "moment";

import { CardItemStyled } from "../common/CardItemStyled";

export const ImageStyled = styled.div`
  width: 100%;
  max-width: 100%;
  height: 150px;
  :hover img {
    opacity: 0.8;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
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

const CardItem = ({ id, title, image, price, createdAt, user }) => {
  const history = useHistory();
  const timestamp = moment(createdAt.seconds * 1000).format("YYYY/MM/DD");
  return (
    <CardItemStyled onClick={() => history.push(`/service/${id}`)}>
      <ImageStyled>
        <CardImage src={image} />
      </ImageStyled>
      <CardStyled>
        <CardTitle>{title}</CardTitle>
        <CardUser>作成日{timestamp}</CardUser>
        <p>￥{price}</p>
      </CardStyled>
    </CardItemStyled>
  );
};

export default CardItem;
