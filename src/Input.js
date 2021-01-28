import styled from "styled-components";
import { primitives } from "./primitives";

export const Input = styled.input.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !primitives.propNames.includes(prop) && defaultValidatorFn(prop),
})`
  ${primitives}
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

Input.defaultProps = {
  minHeight: 0,
  minWidth: 0,
  py: [2, 3],
  px: [3, 4],
  flex: "none",
  border: "none",
  fontSize: "inherit",
  bg: "lightPrimary",
  color: "lightPrimaryText",
};
