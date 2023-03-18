import { Button } from "@mantine/core";

interface FormAddAndEditButtonProps {
  editMode?: boolean;
}

export default function FormAddAndEditButton({
  editMode,
}: FormAddAndEditButtonProps) {
  return <Button type="submit">{editMode ? "Salvar" : "Adicionar"}</Button>;
}
