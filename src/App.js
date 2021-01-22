import styled, { createGlobalStyle, css, keyframes } from "styled-components";
import { Button } from "./Button";
import { Input } from "./Input";
import { Text } from "./Text";
import { useTodos } from "./useTodos";
import { View } from "./View";

const fadeIn = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`;

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    font-size:  ${({ theme }) => theme.fontSizes[3]}px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.backgroundText};
  }
  *, *:before, *:after{
    box-sizing: border-box;
    transition: all 250ms ease-out;
  }
`;

const Header = styled(View)`
  align-items: center;
  padding: ${({ theme }) => theme.space[3]}px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  gap: ${({ theme }) => theme.space[3]}px;
`;

const Title = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes[7]}px;
`;

const FormContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  gap: ${({ theme }) => theme.space[3]}px;
`;

const AddButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accentText};
`;

const TodosContainer = styled(View)`
  & > * + * {
    border-top: 1px solid ${({ theme }) => theme.colors.divider};
  }
`;

const Todo = styled(View)`
  animation: 250ms ${fadeIn} linear both;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space[3]}px;
  gap: ${({ theme }) => theme.space[3]}px;
`;

const CompleteToggle = styled(Button)`
  ${({ theme, completed }) =>
    !completed &&
    css`
      color: transparent;
      &:hover {
        color: ${theme.colors.lightPrimary};
      }
    `}
`;

const TodoLabel = styled(Text)`
  flex: 1;
  ${({ theme, completed }) =>
    completed &&
    css`
      color: ${theme.colors.secondaryBackgroundText};
      text-decoration: line-through;
    `}
`;

export const App = () => {
  const {
    pendingTodo,
    todos,
    handlePendingTodoChange,
    handlePendingTodoAdd,
    handleTodoRemove,
    handleTodoCompleteToggle,
  } = useTodos();

  return (
    <>
      <GlobalStyles />
      <View>
        <Header>
          <Title>CSS-in-JS Meetup Todolist</Title>
          <FormContainer>
            <Input
              autoFocus
              placeholder="Do something great"
              value={pendingTodo}
              onChange={handlePendingTodoChange}
            />
            <AddButton
              disabled={pendingTodo.trim().length === 0}
              onClick={handlePendingTodoAdd}
            >
              Add todo
            </AddButton>
          </FormContainer>
        </Header>

        <TodosContainer>
          {todos.map((todo) => {
            return (
              <Todo key={todo.id}>
                <CompleteToggle
                  completed={todo.completed}
                  onClick={() => handleTodoCompleteToggle(todo)}
                >
                  ✓
                </CompleteToggle>
                <TodoLabel completed={todo.completed}>{todo.text}</TodoLabel>
                <Button onClick={() => handleTodoRemove(todo)}>&times;</Button>
              </Todo>
            );
          })}
        </TodosContainer>
      </View>
    </>
  );
};
