import styled from "styled-components";

export const Button = styled.button`
  min-height: 0;
  min-width: 0;
  flex: none;

  border: none;
  font-size: inherit;

  background-color: ${({ backgroundColor, theme }) =>
    theme.colors[backgroundColor] || backgroundColor};
  color: ${({ color, theme }) => theme.colors[color] || color};

  padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[4]}px;

  cursor: pointer;
  text-transform: uppercase;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

Button.defaultProps = {
  backgroundColor: "primary",
  color: "primaryText",
};
