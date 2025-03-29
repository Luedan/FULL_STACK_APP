import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { ControlledTextFieldProps } from "./types";

export const TextFieldUI = ({...props}: TextFieldProps) => {
    return (
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        {...props}
      />
    );
  };

export const PasswordFieldUI = ({...props}: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      variant="outlined"
      size="small"
      fullWidth
      {...props}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: !showPassword ? (
          <Visibility
            color="primary"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <VisibilityOff
            color="primary"
            onClick={() => setShowPassword(!showPassword)}
          />
        ),
      }}
    />
  );
}

export function ControlledTextFieldUI<T>({
  control,
  name,
  ...rest
}: ControlledTextFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name || ""}
      render={({ field }) =>
        rest.type === "password" ? (
          <PasswordFieldUI {...rest} {...field} />
        ) : (
          <TextFieldUI {...rest} {...field} />
        )
      }
    />
  );
}
