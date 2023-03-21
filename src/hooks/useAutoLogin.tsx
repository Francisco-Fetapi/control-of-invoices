import { openConfirmModal } from "@mantine/modals";

type Fn = (value: boolean) => void;

export default function useAutoLogin() {
  function handle(fn: Fn) {
    openConfirmModal({
      title: "Auto Login",
      children: (
        <>
          Ao habilitar o auto login não terá que informar as suas credencias na
          próxima sessão.
          <br /> <b>ATENÇÃO:</b> Por questões de segurança, recomendamos que não
          habilite o auto login caso esteja usando este dispositivo com mais
          alguém.
        </>
      ),
      labels: { confirm: "Habilitar", cancel: "Cancelar" },
      onCancel: () => fn(false),
      onConfirm: () => {
        fn(true);
      },
    });
  }

  return { handle };
}
