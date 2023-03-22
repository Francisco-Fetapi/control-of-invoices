import { UseFormReturnType } from "@mantine/form";

export interface FormForAddAndEdit<T = any> {
  editMode?: boolean;
  handleSubmit: (values: T, event?: React.FormEvent<HTMLFormElement>) => void;
  form: UseFormReturnType<T>;
}
