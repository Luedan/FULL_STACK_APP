import { FormControlLabel, Switch, SwitchProps } from "@mui/material";
import { Controller } from "react-hook-form";
import {
  ControlledLabelledSwitchUIProps,
  ControlledSwitchUIProps,
  LabelledSwitchUIProps,
} from "./types";

/**
 * A custom switch component.
 *
 * @param {SwitchProps} props - The props for the Switch component.
 * @returns {JSX.Element} The rendered Switch component.
 *
 * @component
 * @example
 * // Usage:
 * <SwitchUI checked={true} onChange={handleSwitchChange} />
 */
export const SwitchUI = 
  (props: SwitchProps) => {
    return <Switch {...props} />;
  };

/**
 * A custom labelled switch component.
 *
 * @param {LabelledSwitchUIProps} props - The props for the LabelledSwitchUI component.
 * @returns {JSX.Element} The rendered LabelledSwitchUI component.
 *
 * @component
 * @example
 * // Usage:
 * <LabelledSwitchUI label="Label" switchProps={{ checked: true }} />
 */
export const LabelledSwitchUI = ({ label, switchProps }: LabelledSwitchUIProps) => {
  return (
    <FormControlLabel
      label={label}
      control={<SwitchUI {...switchProps} />}
    />
  );
}

/**
 * A custom controlled switch component.
 *
 * @param {ControlledSwitchUIProps} props - The props for the ControlledSwitchUI component.
 * @returns {JSX.Element} The rendered ControlledSwitchUI component.
 *
 * @component
 * @example
 * // Usage:
 * <ControlledSwitchUI control={control} name="switch" switchProps={{ checked: true }} />
 */
export const ControlledSwitchUI = ({ control, name, switchProps }: ControlledSwitchUIProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <SwitchUI
          {...switchProps}
          onChange={(e) => field.onChange(e.target.checked)}
          checked={field.value}
        />
      )}
    />
  );
}

/**
 * A custom controlled labelled switch component.
 *
 * @param {ControlledLabelledSwitchUIProps} props - The props for the ControlledLabelledSwitchUI component.
 * @returns {JSX.Element} The rendered ControlledLabelledSwitchUI component.
 *
 * @component
 * @example
 * // Usage:
 * <ControlledLabelledSwitchUI control={control} name="switch" label="Label" switchProps={{ checked: true }} />
 */
export const ControlledLabelledSwitchUI = ({ control, label, name, switchProps }:ControlledLabelledSwitchUIProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <LabelledSwitchUI
          switchProps={{
            ...switchProps,
            checked: field.value,
            onChange: (e) => field.onChange(e.target.checked),
          }}
          label={label}
        />
      )}
    />
  );
}
