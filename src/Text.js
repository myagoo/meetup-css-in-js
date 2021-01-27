import styled from "styled-components";

export const Text = styled.span`
  min-width: 0;
  min-height: 0;
  flex: none;
  font-size: ${({ theme, fontSize }) =>
    typeof fontSize === "number" ? `${theme.fontSizes[fontSize]}px` : fontSize};
`;

Text.defaultProps = {
  fontSize: "inherit",
};
