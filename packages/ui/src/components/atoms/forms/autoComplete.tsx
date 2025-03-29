import { Autocomplete } from "@mui/material";
import { AutocompleteUIProps, ControlledAutoCompleteProps } from "./types";
import { Controller } from "react-hook-form";
import { TextFieldUI } from "./input";

/**
 * AutocompleteUI component.
 *
 * @remarks
 * This component is a wrapper around the Autocomplete component.
 *
 * @param props - The props for the AutocompleteUI component.
 * @param ref - The ref for the AutocompleteUI component.
 * @returns The rendered AutocompleteUI component.
 *
 * @example
 * // Usage:
 * <AutocompleteUI
 *   disablePortal
 *   id="combo-box-demo"
 *   options={top100Films}
 *   sx={{ width: 300 }}
 *   renderInput={(params) => <TextField {...params} label="Movie" />}
 *   />
 */
export const AutocompleteUI = ({ label, ...props }: AutocompleteUIProps) => {
  return (
    <Autocomplete
      renderInput={(params) => (
        <TextFieldUI {...params} label={label} size="small" />
      )}
      {...props}
    />
  );
};

/**
 * ControlledAutoCompleteUI component.
 *
 * @remarks
 * This component is a wrapper around the ControlledAutoCompleteProps component.
 *
 * @param props - The props for the ControlledAutoCompleteUI component.
 * @returns The rendered ControlledAutoCompleteUI component.
 *
 * @example
 * // Usage:
 * <ControlledAutoCompleteUI
 *   control={control}
 *   name="autoComplete"
 *   options={options}
 *   label="AutoComplete"
 *   key="autoComplete"
 * />
 */
export function ControlledAutoCompleteUI(props: ControlledAutoCompleteProps) {
  const { control, options, name, label, key, customOnChange } = props;
  return (
    <Controller
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render={({ field: { value, ref, onChange, ...field } }) => (
        <Autocomplete
          {...field}
          value={
            value !== null || value !== undefined
              ? options?.find((x) => x?.value === value)
              : null
          }
          size="small"
          fullWidth
          options={options}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextFieldUI
              {...params}
              {...field}
              inputRef={ref}
              label={label}
              error={props.error}
              helperText={props?.helperText}
            />
          )}
          isOptionEqualToValue={(option, value) =>
            option.value === value?.value
          }
          onChange={(_, data) => {
            onChange(data?.value);
            if (customOnChange) {
              customOnChange(_, data);
            }
          }}
        />
      )}
      key={key}
      control={control}
      name={name}
    />
  );
}
