import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Controller } from "react-hook-form";
import { ControlledRadioButtonProps, RadioButtonProps } from "./types";

/**
 * A custom radio group component.
 * @remarks This component is a wrapper around the RadioGroup component.
 * @param {RadioButtonProps} props - The props for the RadioGroupUI component.
 * 
 * @component
 * @example
 * ```tsx
 * <RadioGroupUI
 *   formControlLabelProps={...}
 *   formControlLabels={...}
 *   radioGroupProps={...}
 *   ref={...}
 * />
 * ```

 */
export const RadioGroupUI = ({
  formControlLabelProps,
  formControlLabels,
  radioGroupProps,
}: RadioButtonProps) => {
  return (
    <RadioGroup {...radioGroupProps}>
      {formControlLabels?.map((formControlLabel, index) => (
        <FormControlLabel
          {...formControlLabelProps}
          key={`radio-${index}-${formControlLabel?.label}`}
          value={formControlLabel.value}
          control={<Radio />}
          label={formControlLabel.label}
        />
      ))}
    </RadioGroup>
  );
};

/**
 * A controlled radio group component that wraps the RadioGroupUI component.
 * @remarks This component is a wrapper around the Controller component.
 * @param {React.Ref<HTMLButtonElement>} ref - The ref to attach to the component.
 * @param {ControlledRadioButtonProps} props - The props for the ControlledRadioGroupUI component.
 * @returns {JSX.Element} The rendered ControlledRadioGroupUI component.
 *
 * @component
 * @example
 * // Usage:
 * <ControlledRadioGroupUI
 *   control={control}
 *   name="radioGroup"
 *   formControlLabels={formControlLabels}
 *   radioGroupProps={radioGroupProps}
 *   formControlLabelProps={formControlLabelProps}
 *   ref={ref}
 * />
 *
 */
export const ControlledRadioGroupUI = ({
  control,
  name,
  formControlLabels,
  radioGroupProps,
  formControlLabelProps,
}: ControlledRadioButtonProps) => {
  return (
    <Controller
      render={({ field }) => (
        <RadioGroupUI
          formControlLabelProps={formControlLabelProps}
          formControlLabels={formControlLabels}
          radioGroupProps={{ ...radioGroupProps, ...field }}
        />
      )}
      name={name}
      control={control}
    />
  );
};
