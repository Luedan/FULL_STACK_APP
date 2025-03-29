import { Todo } from "@/domain/entities/todo/todo.entity";

export interface TodoStore {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (title: string) => void;
  openModalEdit: (id: string) => void;
  closeModalEdit: () => void;
  isOpenModalEdit: boolean;
  todoToEdit: Todo | null;
  handleCompleted: (id: string) => void;
}
