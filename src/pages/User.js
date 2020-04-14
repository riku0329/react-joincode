import React from "react";
import { PageLayouts } from "../components/common";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import { selectCurrentUser } from "../redux/user/user.selectors";

import { Button } from "../components/common";
import { signOutStart } from "../redux/user/user.actions";
import { Link } from "react-router-dom";

const UserStyled = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(p) => p.theme.BASE2};
`;

const UserProfile = styled.div`
  width: 40%;
  text-align: center;
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 70%;
  }
`;
const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const UserName = styled.h1``;

const User = ({ currentUser, signOutStart }) => {
  const { photoURL, email, displayName, createdAt } = currentUser;
  const timestamp = moment(createdAt.seconds * 1000).format("YYYY/MM/DD");
  return (
    <PageLayouts>
      <UserStyled>
        <UserProfile>
          <UserImage src={photoURL} />
          <UserName>{displayName}</UserName>
          <p>{email}</p>
          <p>アカウント作成日</p>
          <p>{ timestamp }</p>
          <Button>
            <Link to="/user/me">My Service</Link>
          </Button>
          <Button onClick={signOutStart}>サインアウト</Button>
        </UserProfile>
      </UserStyled>
    </PageLayouts>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
