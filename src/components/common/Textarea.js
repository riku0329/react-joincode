import styled from "styled-components";
import { LIGHT_ASH } from "../../utils/constans";

const Textarea = styled.input`
  border: 1px solid ${p => p.theme.BASE1};
  border-radius: 4px;
  font-size: 1em;
  font-family: "Open Sans";
  margin-bottom: 8px;
  width: 100%;
  height: 100px;
  background: #232631;
  color: ${LIGHT_ASH};
`;

export { Textarea };
