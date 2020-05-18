import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./modal-styles.css";
import { Button, Input } from "../common";
import { SelectCurrentService } from "../../redux/service/service.selectors";
import { LIGHT_ASH } from "../../utils/constans";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createOfferStart } from "../../redux/offer/offer.acions";
import { createRef } from "../../firebase/firebase.utils";

const DetailsButton = styled(Button)`
  width: 50%;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ModalInput = styled(Input)`
  width: 80%;
  margin: 4px;
`;

const ModalLabel = styled.p`
  color: ${LIGHT_ASH};
`;

const ModalTitle = styled.h2`
  text-align: center;
  color: ${LIGHT_ASH};
  font-family: "Open Sans";
`;

const ButtonStyles = styled.div`
  display: flex;
  flex-direction: row;
`;

const ModalButton = styled(Button)`
  width: 20%;
  border-radius: 20px;
  margin: 0 4px 0 4px;
  @media (max-width: 768px) {
    width: 40%;
  }
`;

const CloseButton = styled.div`
  padding: 4px;
  background: #aaa;
  border-radius: 8px;
  cursor: pointer;
`

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function OfferModal({ currentService, currentUser, createOfferStart }) {
  const [offer, setOffer] = useState({
    fromUser: "",
    toUser: "",
    service: "",
    status: "pending",
    price: 0,
    time: 0,
    note: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    if (name === "time") {
      const price = Math.round(value * currentService.price * 1);
      return setOffer({ ...offer, [name]: value, price });
    }
    return setOffer({ ...offer, [name]: value });
  };

  const handleSubmit = (event) => {
    if (offer.time === 0) {
      return
    }
    event.preventDefault();
    const offerCopy = { ...offer };

    offerCopy.fromUser = createRef("users", currentUser.id);
    offerCopy.toUser = createRef("services", currentService.user.id);
    offerCopy.service = createRef("services", currentService.id);
    offerCopy.time = parseInt(offer.time, 10)
    createOfferStart(offerCopy);
    closeModal();
  };
  const closeButton = () => closeModal();

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <DetailsButton onClick={openModal}>コースを学ぶ</DetailsButton>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        overlayClassName="Overlay"
        contentLabel="Example Modal"
        className="modal"
      >
        <ModalTitle>{currentService.title}</ModalTitle>
        <form onSubmit={handleSubmit}>
          <ModalLabel>受けたい理由</ModalLabel>
          <ModalInput
            onChange={handleChange}
            type="text"
            name="note"
            placeholder="コースを受ける機会につながります"
            autoComplete="off"
          />
          <ModalLabel>時間(0~5)</ModalLabel>
          <ModalInput
            onChange={handleChange}
            name="time"
            type="number"
            placeholder="サービスを受ける時間"
            max="5"
            min="0"
            value={offer.time}
          />
        </form>
        <div>
          <ModalLabel>支払う料金</ModalLabel>
          <ModalTitle>{offer.price}円</ModalTitle>
        </div>
        <ButtonStyles>
          <ModalButton type="button" onClick={handleSubmit}>
            送信
          </ModalButton>
          <CloseButton onClick={closeButton}>
            閉じる
          </CloseButton>
        </ButtonStyles>
      </Modal>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentService: SelectCurrentService,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  createOfferStart: (offer) => dispatch(createOfferStart(offer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferModal);
