import React from "react";

import { CardItemStyled } from "../common/CardItemStyled";

import {
  ImageStyled,
  CardImage,
  CardStyled,
  CardTitle,
  CardUser,
} from "../service/CardItem";

const UserServiceCard = ({ title, image, price, displayName }) => {
  return (
    <CardItemStyled>
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

export default UserServiceCard;
