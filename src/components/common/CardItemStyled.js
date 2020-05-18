import styled from "styled-components";

const CardItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 30%;
  height: 300px;
  margin-top: 30px;
  background: ${(p) => p.theme.BASE};
  border-radius: 3px;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
  :hover {
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px){
    width: 70%;
  }
`;

export { CardItemStyled };
