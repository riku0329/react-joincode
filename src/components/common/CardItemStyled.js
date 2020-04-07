import styled from "styled-components";

const CardItemStyled = styled.div`
  cursor: pointer;
  width: 30%;
  height: 18rem;
  background: ${(p) => p.theme.BASE};
  margin: 15px;
  border-radius: 3px;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
  :hover {
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.4);
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export { CardItemStyled };
