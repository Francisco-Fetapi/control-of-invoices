import { Text } from "@mantine/core";
import { openModal, openConfirmModal } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";

interface Notification {
  title: React.ReactNode;
  message: React.ReactNode;
}

interface UseTableActionsProps {
  messageAreYouSure?: Notification;
  deletedNotification?: Notification;
  deletedNotificationError?: Notification;
  ViewDetails?: React.ReactNode;
  EditForm: React.ReactNode;
  handleDelete: () => void;
  detailsLabel?: string;
}

const messageDeletedDefault: Notification = {
  title: "Item apagado",
  message: "O item foi apagado com sucesso!",
};
const messageDeletedErrorDefault: Notification = {
  title: "Erro ao apagar",
  message: "Houve um erro ao tentar apagar este item.",
};
const messageAreYouSureDefault: Notification = {
  title: "Apagar item",
  message: (
    <>
      Você tem certeza que pretende apagar este item?
      <br /> <b>Nota: O processo é irreversivel.</b>
    </>
  ),
};

export default function useTableActions({
  ViewDetails,
  EditForm,
  deletedNotification = messageDeletedDefault,
  deletedNotificationError = messageDeletedErrorDefault,
  messageAreYouSure = messageAreYouSureDefault,
  handleDelete,
  detailsLabel = "Detalhes",
}: UseTableActionsProps) {
  function openModalDelete() {
    openConfirmModal({
      title: messageAreYouSure.title,
      children: <Text size="sm">{messageAreYouSure.message}</Text>,
      labels: { confirm: "Confirmar", cancel: "Cancelar" },
      onCancel: () => console.log("Cancel"),
      onConfirm: async () => {
        handleDelete();
      },
    });
  }

  function openModalMoreDetails() {
    openModal({
      title: detailsLabel,
      children: ViewDetails,
    });
  }
  function openEditForm() {
    openModal({
      title: "Editar",
      children: EditForm,
    });
  }

  return {
    openEditForm,
    openModalDelete,
    openModalMoreDetails: ViewDetails ? openModalMoreDetails : undefined,
    detailsLabel,
  };
}
