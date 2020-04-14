import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./modal-styles.css";
import { Button, Input } from "../common";
import { SelectCurrentService } from "../../redux/service/service.selectors";
import { LIGHT_ASH } from "../../utils/constans";

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
  display:  flex;
  flex-direction: row;
`

const ModalButton = styled(Button)`
  width: 20%;
  border-radius: 20px;
  margin: 0 4px 0 4px;
  @media (max-width: 768px) {
    width: 40%;
  }
`;

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function OfferModal({ currentService }) {
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

  const handleSubmit = () => {
    alert(JSON.stringify(offer));
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
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
          <ModalButton type="button" disabled onClick={closeModal}>閉じる</ModalButton>
        </ButtonStyles>
      </Modal>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentService: SelectCurrentService,
});

export default connect(mapStateToProps, null)(OfferModal);
