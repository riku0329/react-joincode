import React from "react";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import moment from "moment";

import {
  SelectCurrentService,
  selectIsServicesFetching,
} from "../../redux/service/service.selectors";
import OfferModal from "./OfferModal";

const DetailsStyled = styled.div`
  background: ${(p) => p.theme.BASE2};
  width: 80%;
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const DetailsImage = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 80%;
  height: auto;
  border-radius: 3px;
`;

const DetailsMenu = styled.div`
  width: 80%;
  height: 80%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: start;
  }

  .title {
    font-family: "Open Sans";
    font-weight: bold;
    font-size: 2rem;
    margin: 0;
  }
  .description {
    margin: 0;
  }
`;

const UserMap = ({ name }) => {
  return <p>{name}</p>
}

const DetailsContainer = ({ currentService, }) => {
  const { image, description, title, user, createdAt } = currentService;
  const timestamp = moment(createdAt * 1000).format("YYYY/MM/DD");
  console.log(currentService.user);
  return (
    <DetailsStyled>
      <DetailsImage>
        <Image src={image} />
      </DetailsImage>
      <DetailsMenu>
        <p className="title">{title}</p>
        <p className="description">{description}</p>

        <p>作成者{}</p>
        <p>作成日{}</p>
        <OfferModal />
      </DetailsMenu>
    </DetailsStyled>
  );
};

const mapStateToProps = createStructuredSelector({
  currentService: SelectCurrentService,
  isFetching: selectIsServicesFetching,
});

export default connect(mapStateToProps, null)(DetailsContainer);
