import { Autocomplete } from "@mui/material";
import { ControlledAutoCompleteMultipleProps } from "./types";
import { Controller } from "react-hook-form";
import { TextFieldUI } from "./input";

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
export function ControlAutoCompleteMultiple(
  props: ControlledAutoCompleteMultipleProps
) {
  const { control, options, name, label, key, customOnChange } = props;

  return (
    <Controller
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render={({
        field: { value: valuesSelected, ref, onChange, ...field },
      }) => {
        return (
          <Autocomplete
            {...field}
            multiple
            value={
              valuesSelected?.length
                ? options?.filter((option) => {
                    for (const valueSelected of valuesSelected) {
                      if (option?.value === valueSelected) {
                        return true;
                      }
                    }
                    return false;
                  })
                : []
            }
            size="small"
            fullWidth
            options={options}
            getOptionLabel={(option) => option?.label}
            renderInput={(params) => (
              <TextFieldUI
                {...params}
                {...field}
                inputRef={ref}
                label={label}
                error={props?.error}
                helperText={props?.helperText}
              />
            )}
            isOptionEqualToValue={(option, value) =>
              option?.value === value?.value
            }
            onChange={(_, datas) => {
              onChange(
                datas?.length ? datas?.map((data) => data?.value) : null
              );
              if (customOnChange) {
                customOnChange(
                  _,
                  datas
                );
              }
            }}
          />
        );
      }}
      key={key}
      control={control}
      name={name}
    />
  );
}
