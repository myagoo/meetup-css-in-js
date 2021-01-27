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

const TodosContainer = styled(View)`
  & > * + * {
    border-top: 1px solid ${({ theme }) => theme.colors.divider};
  }
`;

const CompleteToggle = styled(Button)`
  ${({ theme, completed }) =>
    !completed &&
    css`
      &:hover {
        color: ${theme.colors.lightPrimary};
      }
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
        <View alignItems={["stretch", "center"]} p={[2, 3]} bg="primary" color="primaryText" gap={[2, 3]}>
          <Text fontSize={[5, 6, 7, 8]}>CSS-in-JS Meetup Todolist</Text>
          <View flexDirection={["column", "row"]} alignItems="center" gap={[2, 3]}>
            <Input
              autoFocus
              placeholder="Do something great"
              value={pendingTodo}
              onChange={handlePendingTodoChange}
            />
            <Button
              backgroundColor="accent"
              color="accentText"
              disabled={pendingTodo.trim().length === 0}
              onClick={handlePendingTodoAdd}
            >
              Add todo
            </Button>
          </View>
        </View>

        <TodosContainer>
          {todos.map((todo) => {
            return (
              <View
                key={todo.id}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                gap={[2, 3]}
                p={[2, 3]}
                animation={css`250ms ${fadeIn} linear both`}
              >
                <CompleteToggle
                  color={!todo.completed ? "transparent" : undefined}
                  completed={todo.completed}
                  onClick={() => handleTodoCompleteToggle(todo)}
                >
                  ✓
                </CompleteToggle>
                <Text
                  flex="1"
                  color={todo.completed ? "secondaryBackgroundText" : undefined}
                  textDecoration={todo.completed ? "line-through" : undefined}
                >
                  {todo.text}
                </Text>
                <Button onClick={() => handleTodoRemove(todo)}>&times;</Button>
              </View>
            );
          })}
        </TodosContainer>
      </View>
    </>
  );
};
