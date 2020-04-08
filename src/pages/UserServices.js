import React, { useEffect } from "react";
import styled from "styled-components";

import { PageLayouts } from "../components/common";
import UserService from "../components/user-service/UserServiceCard";
import { connect } from "react-redux";
import { fetchUserServicesStart } from "../redux/service/service.actions";

const UserServiceeStyled = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const UserServices = ({ fetchUserServicesStart }) => {
  useEffect(() => {
    fetchUserServicesStart();
  }, [fetchUserServicesStart]);
  return (
    <PageLayouts>
      <UserServiceeStyled>
        <div>
          <h1>マイサービス</h1>
        </div>
        <UserService />
      </UserServiceeStyled>
    </PageLayouts>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchUserServicesStart: () => dispatch(fetchUserServicesStart()),
});

export default connect(null, mapDispatchToProps)(UserServices);
