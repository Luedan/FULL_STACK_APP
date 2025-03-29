import { resolver, translate, validator } from "@/presentation/shared/utils";
import { useTodoStore } from "@/presentation/store/todo/todoStore";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import {
  ModalUI,
  BoxUI,
  TypographyUI,
  ControlledTextFieldUI,
  ButtonActionUI,
} from "@repo/ui";
import { useForm } from "react-hook-form";

export default function EditTodoContainer() {
  const schema = validator.object().shape({
    title: validator.string().required(translate("errors.required")),
  });

  const { updateTodo, todoToEdit, closeModalEdit, isOpenModalEdit } =
    useTodoStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: resolver(schema),
    values: { title: todoToEdit?.title || "" },
  });

  const handleEdit = (data: { title: string }) => {
    updateTodo(data.title);
    reset({ title: "" });
    closeModalEdit();
  };

  return (
    <ModalUI open={isOpenModalEdit} onClose={closeModalEdit} variant="sm">
      <BoxUI
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BoxUI
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TypographyUI variant="h5" sx={{ alignSelf: "flex-start" }}>
            {translate("todo.edit.titleModal")}
          </TypographyUI>
          <IconButton onClick={closeModalEdit}>
            <Close color="error" />
          </IconButton>
        </BoxUI>
        <ControlledTextFieldUI
          control={control}
          name="title"
          label={translate("todo.edit.form.title")}
          error={!!errors.title}
          helperText={errors.title?.message}
          sx={{ width: "90%", marginTop: "10px" }}
        />
        <ButtonActionUI
          text={translate("words.save")}
          actionType="edit"
          sx={{ marginTop: "10px", width: "90%" }}
          variant="outlined"
          onClick={handleSubmit(handleEdit)}
        />
      </BoxUI>
    </ModalUI>
  );
}
