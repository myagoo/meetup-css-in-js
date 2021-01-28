import { useGlobalCss, useKeyframes } from "css-system";
import { Button } from "./Button";
import { Input } from "./Input";
import { Text } from "./Text";
import { useTodos } from "./useTodos";
import { View } from "./View";

export const App = () => {
  const {
    pendingTodo,
    todos,
    handlePendingTodoChange,
    handlePendingTodoAdd,
    handleTodoRemove,
    handleTodoCompleteToggle,
  } = useTodos();

  const fadeIn = useKeyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  useGlobalCss({
    body: {
      m: 0,
      fontSize: { _: 2, m: 3 },
      fontFamily: "Arial",
      bg: "background",
      color: "backgroundText",
    },
    "*, *:before, *:after": {
      boxSizing: "border-box",
      transition: 'all 250ms ease-out'
    },
  });

  return (
    <>
      <View>
        <View
          css={{
            bg: "primary",
            color: "primaryText",
            alignItems: { _: "stretch", s: "center" },
            p: { _: 2, m: 3 },
            gap: { _: 2, m: 3 },
          }}
        >
          <Text css={{ fontSize: { _: 5, s: 6, m: 7, l: 8 } }}>
            CSS-in-JS Meetup Todolist
          </Text>
          <View
            css={{
              flexDirection: { _: "column", s: "row" },
              justifyContent: "center",
              gap: { _: 2, m: 3 },
            }}
          >
            <Input
              autoFocus
              placeholder="Do something great"
              value={pendingTodo}
              onChange={handlePendingTodoChange}
            />
            <Button
              css={{ bg: "accent", color: "accentText" }}
              disabled={pendingTodo.trim().length === 0}
              onClick={handlePendingTodoAdd}
            >
              Add todo
            </Button>
          </View>
        </View>

        <View
          css={{
            "& >  * + *": {
              borderTop: "1px solid",
              borderTopColor: "divider",
            },
          }}
        >
          {todos.map((todo) => {
            return (
              <View
                key={todo.id}
                css={{
                  animation: `250ms ${fadeIn} linear both`,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: { _: 2, m: 3 },
                  p: { _: 2, m: 3 },
                }}
              >
                <Button
                  onClick={() => handleTodoCompleteToggle(todo)}
                  css={
                    !todo.completed
                      ? {
                          color: "transparent",
                          "&:hover": {
                            color: "lightPrimary",
                          },
                        }
                      : undefined
                  }
                  deps={[todo.completed]}
                >
                  ✓
                </Button>
                <Text
                  css={{
                    flex: "1",
                    color: todo.completed && "secondaryBackgroundText",
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                  deps={[todo.completed]}
                >
                  {todo.text}
                </Text>
                <Button onClick={() => handleTodoRemove(todo)}>&times;</Button>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
};
