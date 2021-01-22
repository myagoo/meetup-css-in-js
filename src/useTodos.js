import { useState } from "react";

const initialTodos = [
  {
    id: 0,
    text: "Present project",
    completed: false,
  },
  {
    id: 1,
    text: "Introduce style props",
    completed: false,
  },
  {
    id: 2,
    text: "Add styled-system",
    completed: false,
  },
  {
    id: 3,
    text: "Use styled-system all over the place",
    completed: false,
  },
  {
    id: 4,
    text: "Make app responsive",
    completed: false,
  },
];

export const useTodos = () => {
  const [todos, setTodos] = useState(initialTodos);

  const [pendingTodo, setPendingTodo] = useState("");

  const handlePendingTodoChange = (event) => {
    setPendingTodo(event.target.value);
  };

  const handlePendingTodoAdd = () => {
    setPendingTodo("");
    setTodos([
      ...todos,
      { id: Date.now(), text: pendingTodo, completed: false },
    ]);
  };

  const handleTodoRemove = (todoToRemove) => {
    setTodos(todos.filter((todo) => todo !== todoToRemove));
  };
  const handleTodoCompleteToggle = (todoToComplete) => {
    setTodos(
      todos.map((todo) => {
        if (todo !== todoToComplete) {
          return todo;
        }
        return {
          ...todoToComplete,
          completed: !todoToComplete.completed,
        };
      })
    );
  };

  return {
    pendingTodo,
    todos,
    handlePendingTodoChange,
    handlePendingTodoAdd,
    handleTodoRemove,
    handleTodoCompleteToggle,
  };
};
