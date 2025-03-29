import {
  FormControlLabelProps,
  RadioGroupProps,
  SwitchProps,
  TextFieldProps,
  SelectProps,
  MenuItemProps,
} from "@mui/material";
import { Control, FieldValues } from "react-hook-form";
import { CheckboxProps } from "@mui/material";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { PickerValidDate } from "@mui/x-date-pickers/models";

// TextField
export type ControlledTextFieldProps<T> = {
  control: Control<FieldValues<T>>;
} & TextFieldProps;

// AutoComplete
export type ValueAutoComplete = {
  label: string;
  value: string | number | boolean | null | undefined;
};

export type AutocompleteUIProps = {
  label: string;
  // name: string;
  options: ValueAutoComplete[];
  autoCompleteProps?: AutocompleteProps<
    ValueAutoComplete,
    false,
    false,
    false,
    ElementType<HTMLDivElement>
  >;
};

export type ControlledAutoCompleteMultipleProps = {
  control: Control<FieldValues<Value>>;
  options: ValueAutoComplete[];
  helperText?: string;
  error?: boolean;
  name: string;
  label: string;
  key?: string;
  customOnChange?: (
    event: React.SyntheticEvent,
    value: ValueAutoComplete[] | null,
    reason?: AutocompleteChangeReason
  ) => void;
};

export type ControlledAutoCompleteProps = {
  control: Control<FieldValues<Value>>;
  options: ValueAutoComplete[];
  helperText?: string;
  error?: boolean;
  name: string;
  label: string;
  key?: string;
  customOnChange?: (
    event: React.SyntheticEvent,
    value: ValueAutoComplete | null,
    reason?: AutocompleteChangeReason
  ) => void;
};

// Checkbox
export type LabelledCheckboxUIProps = {
  label: string;
  checked?: boolean;
  customOnChange?: (checked: React.ChangeEvent<HTMLInputElement>) => void;
  checkboxProps?: CheckboxProps;
};

export type ControlledCheckboxUIProps = {
  checked?: boolean;
  control: Control<FieldValues<T>>;
  customOnChange: (checked: React.ChangeEvent<HTMLInputElement>) => void;
} & CheckboxProps;

export type ControlledLabelledCheckboxUIProps = {
  control: Control;
  name: string;
} & LabelledCheckboxUIProps;

// RadioGroup
export type RadioProps = {
  value: string | number;
  label: string;
};

export type RadioButtonProps = {
  formControlLabels?: RadioProps[];
  formControlLabelProps?: FormControlLabelProps;
  radioGroupProps?: RadioGroupProps;
};

export type ControlledRadioButtonProps = {
  control: Control;
  name: string;
  formControlLabels?: RadioProps[];
  formControlLabelProps?: FormControlLabelProps;
  radioGroupProps?: RadioGroupProps;
};

// Select
export type SelectOptionsProps = {
  value: string | number;
  label: string;
};

export type SelectUIProps = {
  options: SelectOptionsProps[];
  name: string;
  menuItemProps?: MenuItemProps;
  selectProps?: SelectProps;
};

export type ControlledSelectUIProps = {
  control: Control;
  options: SelectOptionsProps[];
  name: string;
  menuItemProps?: MenuItemProps;
  selectProps?: SelectProps;
};

// Switch
export type ControlledSwitchUIProps = {
  control: Control;
  name: string;
  switchProps?: SwitchProps;
};

export type LabelledSwitchUIProps = {
  label: string;
  switchProps?: SwitchProps;
};

export type ControlledLabelledSwitchUIProps = {
  control: Control;
  name: string;
} & LabelledSwitchUIProps;

// DatePicker
export type DatePickerUIProps = {
  error?: boolean;
  helperText?: string;
} & DatePickerProps<PickerValidDate, TEnableAccessibleFieldDOMStructure>;

export type ControlledDatePickerUIProps = {
  control: Control;
} & DatePickerUIProps;

export type SearchInputProps = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & TextFieldProps;
