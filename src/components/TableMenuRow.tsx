import { Menu } from "@mantine/core";
import { IconTrash, IconPencil, IconInfoCircle } from "@tabler/icons";

// TODO: nas tabelas implementar o botao Elimar (selecionados). Aparece quando tiver pelo menos 1 items selecionado. Deve ser um Hook que todas as tabelas irao implementar.

// TODO: a logica de selecionar os itens da tabela deve estar num hook.

interface MenuRowProps {
  children: React.ReactNode;
  handleDelete: () => void;
  handleDetails: () => void;
  handleEdit: () => void;
}

export function TableMenuRow({
  children,
  handleDelete,
  handleDetails,
  handleEdit,
}: MenuRowProps) {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>{children}</Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Gerais</Menu.Label>
        <Menu.Item onClick={handleDetails} icon={<IconInfoCircle size={14} />}>
          Detalhes
        </Menu.Item>
        <Menu.Item onClick={handleEdit} icon={<IconPencil size={14} />}>
          Editar
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          onClick={handleDelete}
          color="red"
          icon={<IconTrash size={14} />}
        >
          Apagar
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
