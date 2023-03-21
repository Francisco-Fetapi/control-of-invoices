import { useForm } from "@mantine/form";
import { User } from "entities/User";
import { useMutation } from "react-query";
import { apiRoutes } from "lib/axios";
import { showNotification } from "@mantine/notifications";

import { LoginApiResponse } from "pages/api/login";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import useAutoLogin from "hooks/useAutoLogin";

interface UserFields extends Pick<User, "email" | "password"> {}

export default function useFormSignin() {
  const form = useForm<UserFields>({
    initialValues: {
      email: "",
      password: "",
    },
    validate({ email, password }) {
      let errors: any = {};
      if (password.length < 6) {
        errors.password = "A Senha deve ter no minimo 6 caracteres.";
      }

      return errors;
    },
  });
  const login = useMutation((user: UserFields) => {
    return apiRoutes.post<LoginApiResponse>("/login", {
      user,
    });
  });
  const router = useRouter();
  const autologin = useAutoLogin();

  function handleSubmit(values: UserFields) {
    login.mutate(values, {
      onSuccess(res, variables, context) {
        if (!res.data.user) {
          showNotification({
            title: "Usuário não encontrado",
            message: "Email ou senha incorretos.",
            color: "red",
          });
        } else {
          const user = res.data.user;
          showNotification({
            title: "Credencias Válidas",
            message:
              "A sua conta foi encontrada. Em breve será redirecionado para a página principal.",
            color: "green",
          });

          autologin.handle((yes) => {
            setCookie(null, "uid", user.uid, {
              maxAge: yes ? 30 * 24 * 60 * 60 : undefined,
              path: "/",
            });
            apiRoutes.defaults.headers["uid"] = user.uid;
            router.push("/");
          });
        }
        console.log(res.data);
      },
    });
  }

  return { form, handleSubmit, login };
}
