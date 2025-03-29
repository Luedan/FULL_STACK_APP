import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TodoStore } from "./types";
import { nanoid } from "nanoid";

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],
      addTodo: (title) => {
        const todos = get().todos;
        set((state) => ({
          ...state,
          todos: [...todos, { id: nanoid(), title, completed: false }],
        }));
      },
      removeTodo: (id) => {
        const todos = get().todos;
        set((state) => ({
          ...state,
          todos: todos.filter((todo) => todo.id !== id),
        }));
      },
      toggleTodo: (id) => {
        const todos = get().todos;
        set((state) => ({
          ...state,
          todos: todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },
      isOpenModalEdit: false,
      todoToEdit: null,
      openModalEdit: (id) => {
        const todo = get().todos.find((todo) => todo.id === id);
        set((state) => ({
          ...state,
          isOpenModalEdit: true,
          todoToEdit: todo,
        }));
      },
      closeModalEdit: () => {
        set((state) => ({
          ...state,
          isOpenModalEdit: false,
          todoToEdit: null,
        }));
      },
      updateTodo: (title) => {
        const todos = get().todos;
        const todoFind = get().todoToEdit;
        set((state) => ({
          ...state,
          isOpenModalEdit: false,
          todoToEdit: null,
          todos: todos.map((todo) =>
            todo.id === todoFind?.id ? { ...todo, title } : todo
          ),
        }));
      },
      handleCompleted: (id) => {
        const todos = get().todos;
        set((state) => ({
          ...state,
          todos: todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },
    }),
    { name: "todo" }
  )
);
