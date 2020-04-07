import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import { Input } from "../common/Input";
import { Select } from "../common/Select";
import { Textarea } from "../common/Textarea";
import { Button } from "../common/Button";
import { createServiceStart } from "../../redux/service/service.actions";
import { connect } from "react-redux";

const customStyles = {
  content: {
    width: "80%",
    height: "80%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#232631",
  },
};

const ServiceCreateButton = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(p) => p.theme.PRIMARY_BUTTON};
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
  margin: 0 0 auto auto;
  cursor: pointer;
  :hover {
    background: ${(p) => p.theme.BASE1};
  }

  ::before,
  ::after {
    position: absolute;
    top: 14px;
    left: 50%;
    content: "";
    display: inline-block;
    width: 13px;
    height: 13px;
    border-top: 2px solid ${(p) => p.theme.BASE2};
    transform: translateX(-50%);
  }

  ::after {
    top: 7.5px;
    left: 2px;
    transform: rotate(90deg);
  }
`;

const ServiceForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ServiceInput = styled(Input)`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ServiceSelect = styled(Select)`
  width: 30%;
  @media (max-width: 768px) {
    width: 40%;
  }
`;

const Label = styled.label`
  color: #fff;
`;

const ServiceButton = styled.div`
  display: flex;
  display: row;
`;

const ButtonStyled = styled(Button)`
  width: 10%;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 40%;
  }
`;

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function ServiceCreateModal({ createServiceStart }) {
  const [serviceForm, setServiceForm] = useState({
    category: "",
    title: "",
    description: "",
    image: "",
    price: null,
  });

  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#e65661";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createServiceStart(serviceForm);
    closeModal();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setServiceForm({ ...serviceForm, [name]: value });
  };

  return (
    <div>
      <ServiceCreateButton onClick={openModal}>
        <span className="icon"></span>
      </ServiceCreateButton>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>サービスを作成する</h2>
        <ServiceForm>
          <Label>Category</Label>
          <ServiceSelect onChange={handleChange} name="category">
            <option value="react">react</option>
            <option value="python">python</option>
            <option value="php">php</option>
            <option value="aws">aws</option>
            <option value="firebase">firebase</option>
            <option value="photoshop">photoshop</option>
          </ServiceSelect>
          <Label>Title</Label>
          <ServiceInput
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="タイトル"
            autoComplete="off"
          />
          <Label>description</Label>
          <Textarea
            onChange={handleChange}
            name="description"
            type="text"
            placeholder="テキストエリア"
            autoComplete="off"
          />
          <Label>Image URL</Label>
          <Input
            onChange={handleChange}
            name="image"
            type="text"
            placeholder="Text Input"
          />
          <Label>Price per Hour</Label>
          <Input
            onChange={handleChange}
            name="price"
            type="number"
            placeholder="123"
            autoComplete="off"
          />
          <ServiceButton>
            <ButtonStyled type="button" onClick={handleSubmit}>
              作成
            </ButtonStyled>
            <ButtonStyled disabled isClose onClick={closeModal}>
              キャンセル
            </ButtonStyled>
          </ServiceButton>
        </ServiceForm>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createServiceStart: (newService) => dispatch(createServiceStart(newService)),
});

export default connect(null, mapDispatchToProps)(ServiceCreateModal);
