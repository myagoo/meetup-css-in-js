import styled from "styled-components";
import { primitives } from "./primitives";

export const Button = styled.button`
  ${primitives}
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

Button.defaultProps = {
  minHeight:0,
  minWidth: 0,
  flex: "none",
  py: [2, 3],
  px: [3, 4],
  border: "none",
  fontSize: "inherit",
  cursor: "pointer",
  textTransform: "uppercase",
  backgroundColor: "primary",
  color: "primaryText",
};
