import styled from "styled-components";
import {flexbox} from "styled-system"

export const View = styled.div`
  min-width: 0;
  min-height: 0;
  display: flex;
  ${flexbox}
  gap: ${({ theme, gap }) => typeof gap === "number" ? `${theme.space[gap]}px` : gap};
`;

View.defaultProps = {
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
  flex: "none",
  gap: "inital",
};
