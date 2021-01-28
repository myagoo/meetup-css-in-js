import styled from "styled-components";
import { primitives } from "./primitives";

export const View = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !primitives.propNames.includes(prop) && defaultValidatorFn(prop),
})`
  ${primitives}
`;

View.defaultProps = {
  minHeight: 0,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
  flex: "none",
  gap: "inital",
};
