import { Menu } from "@mantine/core";
import { IconTrash, IconPencil, IconInfoCircle } from "@tabler/icons";

interface MenuRowProps {
  children: React.ReactNode;
  handleDelete: () => void;
  handleDetails?: () => void;
  handleEdit: () => void;
  detailsLabel?: string;
}

export function TableMenuRow({
  children,
  handleDelete,
  handleDetails,
  handleEdit,
  detailsLabel = "Detalhes",
}: MenuRowProps) {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>{children}</Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Gerais</Menu.Label>
        {handleDetails && (
          <Menu.Item
            onClick={handleDetails}
            icon={<IconInfoCircle size={14} />}
          >
            {detailsLabel}
          </Menu.Item>
        )}

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
