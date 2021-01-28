import styled from "styled-components";
import { primitives } from "./primitives";

export const Text = styled.span.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !primitives.propNames.includes(prop) && defaultValidatorFn(prop),
})`
  ${primitives}
`;

Text.defaultProps = {
  minHeight: 0,
  minWidth: 0,
  flex: "none",
  fontSize: "inherit",
};
