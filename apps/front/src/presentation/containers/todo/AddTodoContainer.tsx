import useModal from "@/presentation/shared/hooks/useModal";
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

export default function AddTodoContainer() {
  const schema = validator.object().shape({
    title: validator.string().required(translate("errors.required")),
  });

  const { addTodo } = useTodoStore();
  const { close, isOpen, open } = useModal();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: resolver(schema),
    values: { title: "" },
  });

  const handleAdd = (data: { title: string }) => {
    addTodo(data.title);
    reset({ title: "" });
    close();
  };

  return (
    <>
      <ModalUI open={isOpen} onClose={close} variant="sm">
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
              {translate("todo.create.titleModal")}
            </TypographyUI>
            <IconButton onClick={close}>
              <Close color="error" />
            </IconButton>
          </BoxUI>
          <ControlledTextFieldUI
            control={control}
            name="title"
            label={translate("todo.create.form.title")}
            error={!!errors.title}
            helperText={errors?.title?.message}
            sx={{ width: "90%", marginTop: "10px" }}
          />
          <ButtonActionUI
            text={translate("words.save")}
            actionType="save"
            sx={{ marginTop: "10px", width: "90%" }}
            variant="outlined"
            onClick={handleSubmit(handleAdd)}
          />
        </BoxUI>
      </ModalUI>
      <ButtonActionUI
        text={translate("words.create")}
        actionType="add"
        fullWidth={false}
        variant="outlined"
        onClick={open}
      />
    </>
  );
}
