import { openConfirmModal } from "@mantine/modals";
import { apiRoutes } from "lib/axios";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";

export default function useLogout() {
  const router = useRouter();
  function handle() {
    openConfirmModal({
      title: "Terminar Sessão",
      children: "Tem certeza que quer terminar sessão?",
      labels: { confirm: "Sim", cancel: "Não" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => {
        apiRoutes.get("/logout");
        logout();
      },
    });
  }

  function logout() {
    destroyCookie(null, "uid");
    apiRoutes.defaults.headers["uid"] = null;
    router.push("/iniciar-sessao");
  }

  return { handle };
}
