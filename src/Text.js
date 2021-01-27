import styled from "styled-components";
import {typography} from "styled-system"

export const Text = styled.span`
  min-width: 0;
  min-height: 0;
  flex: none;
  ${typography}
`;

Text.defaultProps = {
  fontSize: "inherit",
};
