import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectIsServicesFetching,
  selectUserServices,
} from "../../redux/service/service.selectors";

import { Spinner } from "../common";
import { CardContainer } from "../common/CardContainer";
import UserServiceCard from "./UserCardItem";

const UserService = ({ userService, isFetching }) => {
  return (
    <CardContainer>
      {isFetching ? (
        <Spinner />
      ) : (
        userService.map(({ id, ...otherProps }) => (
          <UserServiceCard key={id} {...otherProps} />
        ))
      )}
    </CardContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  userService: selectUserServices,
  isFetching: selectIsServicesFetching,
});

export default connect(mapStateToProps, null)(UserService);
