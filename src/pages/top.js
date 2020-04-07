import React from "react";
import { PageLayouts, Button } from "../components/common";
import styled from "styled-components";
import { Link } from "react-router-dom";




const TopTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const DateilStyeld = styled.div`
  width: 60%;
  height: 40%;
  background: ${p => p.theme.BASE2};
  margin-bottom: 30px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }

  .title {
    @media (max-width: 768px) {
      font-size: 1.7rem;
    }
  }
  .dateil {
    font-weight: bold;
  }
`;

const JoinButton = styled(Button)`
  border-radius: 30px;
  width: 50%;
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.PRIMARY_TEXT};
`;

export default function Top() {
  return (
    <PageLayouts>
      <TopTextStyled>
        <DateilStyeld>
          <h1 className="title">Join code とは</h1>
          <p className="dateil">
            エンジニアとしてスキルを磨くためのアプリです。
            <br />
            ここでは、スキルをサービスとして販売することができます。
            <br />
            他にも誰かと共同開発を行う募集をしたりミートアップを募集できます。
          </p>
          <JoinButton>
            <LinkStyled to="/register">今すぐはじめる</LinkStyled>
          </JoinButton>
        </DateilStyeld>
      </TopTextStyled>
    </PageLayouts>
  );
}
