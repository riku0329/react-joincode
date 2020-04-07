import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  width: 90%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export { CardContainer };
