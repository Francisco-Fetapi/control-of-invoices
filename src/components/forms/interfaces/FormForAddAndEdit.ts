import { UseFormReturnType } from "@mantine/form";

export interface FormForAddAndEdit<T = any> {
  editMode?: boolean;
  handleSubmit: () => void;
  form: UseFormReturnType<T>;
}
