import styled from "styled-components";

const Select = styled.select`
  border: 1px solid ${p => p.theme.BASE1};
  border-radius: 4px;
  font-size: 1em;
  font-family: "Open Sans";
  margin-bottom: 8px;
  width: 100%;
  height: 40px;
  background: ${p => p.theme.BASE2};
  color: ${p => p.theme.SECONDARY_TEXT};
`;
export { Select };
