import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import { Input, Select, Textarea, Button } from "../common";
import { createServiceStart } from "../../redux/service/service.actions";
import { connect } from "react-redux";
import { LIGHT_ASH } from "../../utils/constans";
import "./create-modal-styles.css"

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
  color: ${LIGHT_ASH};
  width: 50%;
  background: #232631;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ServiceInputStyled = styled(Input)`
  color: ${LIGHT_ASH};
  background: #232631;
`

const ServiceSelect = styled(Select)`
  color: ${LIGHT_ASH};
  width: 25%;
  background: #232631;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const Label = styled.label`
  color: ${LIGHT_ASH};
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

const Close = styled.div`
  background: #aaa;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p{
    display: block;
  }
`

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
    subtitle.style.color = `${LIGHT_ASH}`;
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
        overlayClassName="Overlay"
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>サービスを作成する</h2>
        <ServiceForm>
          <Label>カテゴリー</Label>
          <ServiceSelect onChange={handleChange} name="category">
            <option value="プログラミング">プログラミング</option>
            <option value="ビジネススキル">ビジネススキル</option>
            <option value="写真">写真</option>
            <option value="デザイン">デザイン</option>
            <option value="音楽">音楽</option>
            <option value="言語">言語</option>
          </ServiceSelect>
          <Label>タイトル</Label>
          <ServiceInput
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="タイトル"
            autoComplete="off"
          />
          <Label>内容</Label>
          <Textarea
            onChange={handleChange}
            name="description"
            type="text"
            placeholder="テキストエリア"
            autoComplete="off"
          />
          <Label>写真</Label>
          <ServiceInputStyled
            onChange={handleChange}
            name="image"
            type="text"
            placeholder="Text area"
            autoComplete="off"
          />
          <Label>一時間当たりの金額</Label>
          <ServiceInputStyled
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
            <Close onClick={closeModal}>
              <p>キャンセル</p>
            </Close>
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
