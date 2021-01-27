import styled from "styled-components";

export const View = styled.div`
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex: ${({ flex }) => flex};
  gap: ${({ theme, gap }) => typeof gap === "number" ? `${theme.space[gap]}px` : gap};
`;

View.defaultProps = {
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
  flex: "none",
  gap: "inital",
};
