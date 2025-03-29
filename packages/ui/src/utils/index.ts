import { ValueAutoComplete } from "../components/atoms/forms/types";

export function createAutoCompleteOptions<T>(
  data: T[],
  keys: { label: keyof T; value: keyof T }
): ValueAutoComplete[] {
  return data.map((item) => ({
    label: item[keys.label] as string,
    value: item[keys.value] as string | number | boolean | null | undefined,
  }));
}
