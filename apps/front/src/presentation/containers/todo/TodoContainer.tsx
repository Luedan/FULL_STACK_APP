import { Todo } from "@/domain/entities/todo/todo.entity";
import { createTableActions, translate } from "@/presentation/shared/utils";
import { useTodoStore } from "@/presentation/store/todo/todoStore";
import { GridColDef } from "@mui/x-data-grid";
import { BoxUI, CustomToolbarUI, SwitchUI, TableProUI } from "@repo/ui";
import EditTodoContainer from "./EditTodoContainer";
import AddTodoContainer from "./AddTodoContainer";

export function TodoContainer() {
  const { todos, removeTodo, openModalEdit, handleCompleted } = useTodoStore();

  const cols: GridColDef<Todo>[] = [
    {
      field: "id",
      headerName: translate("todo.list.id"),
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "title",
      headerName: translate("todo.list.title"),
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "completed",
      headerName: translate("todo.list.completed"),
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => {
        return (
          <SwitchUI
            checked={row.completed}
            onClick={() => handleCompleted(row.id)}
          />
        );
      },
    },
    {
      field: "actions",
      headerName: translate("todo.list.actions"),
      flex: 1,
      type: "actions",
      getActions: ({ row }: { row: Todo }) =>
        createTableActions({
          onDelete: () => removeTodo(row.id),
          onEdit: () => openModalEdit(row.id),
        }),
    },
  ];
  return (
    <BoxUI
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <EditTodoContainer />
      <BoxUI
        sx={{
          marginBottom: "10px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
        }}
      >
        <AddTodoContainer />
      </BoxUI>
      <TableProUI
        tableProps={{
          columns: cols,
          rows: todos,
          rowSelection: false,
          slots: { toolbar: CustomToolbarUI },
        }}
        boxProps={{ sx: { height: "400px", width: "100%" } }}
      />
    </BoxUI>
  );
}
