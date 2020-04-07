import React from "react";
import styled from "styled-components";

import { CardItemStyled } from "../common/CardItemStyled";

const ImageStyled = styled.div`
  width: 100%;
  height: 50%;

  :hover img {
    opacity: 0.8;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CardStyled = styled.div`
  padding-left: 20px;

  .title {
    font-weight: bold;
  }

  .user {
    color: ${(p) => p.theme.TEXT};
    font-size: 14px;
  }
`;

const CardItem = ({
  title,
  image,
  price,
  createdBy,
  category,
  description,
  createdAt,
}) => {
  const { displayName } = createdBy;
  return (
    <CardItemStyled>
      <ImageStyled>
        <CardImage src={image} />
      </ImageStyled>
      <CardStyled>
        <p className="title">{title}</p>
        <p className="user">{displayName}</p>
        <p>￥{price}</p>
      </CardStyled>
    </CardItemStyled>
  );
};

export default CardItem;
