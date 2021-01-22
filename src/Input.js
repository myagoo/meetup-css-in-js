import styled from "styled-components";

export const Input = styled.input`
  min-height: 0;
  min-width: 0;
  flex: none;

  border: none;
  font-size: inherit;

  background-color: ${({ theme }) => theme.colors.lightPrimary};
  color: ${({ theme }) => theme.colors.lightPrimaryText};

  padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[4]}px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
