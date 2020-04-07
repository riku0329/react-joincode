import styled, { css } from "styled-components";

const Button = styled.button`
  color: ${p => p.theme.PRIMARY_TEXT};

  ${p =>
    p.secondary
      ? css`
          background: ${p => p.theme.SECONDARY_BUTTON};
        `
      : css`
          background: ${p => p.theme.PRIMARY_BUTTON};
        `}
  font-weight: bold;
  ${p =>
    p.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  :hover{
    ${p =>
    p.secondary
      ? css`
          background: ${p => p.theme.SECONDARY_BUTTON2};
        `
      : css`
          background: ${p => p.theme.PRIMARY_BUTTON2};
        `}
  }

  &:disabled {
    background: ${p => p.theme.BASE};
    color: ${p => p.theme.SECONDARY_TEXT};
  }
`;

export { Button };
