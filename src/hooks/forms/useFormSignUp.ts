import { useMutation } from "react-query";
import { apiRoutes } from "lib/axios";
import { useForm } from "@mantine/form";
import type { CNPJ, User } from "entities/User";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import { RegisterApiResponse } from "pages/api/users/register";
import { setCookie } from "nookies";
import useAutoLogin from "hooks/useAutoLogin";

interface UserFields extends User {
  passwordConfirmation: string;
}

export const validCNPJ: CNPJ[] = [
  "EI",
  "LTDA",
  "MEI",
  "SLU",
  "Sociedade Anônima",
  "Sociedade Simples",
];

export default function useFormSignUp() {
  const form = useForm<UserFields>({
    initialValues: {
      name: "",
      corporationName: "",
      cnpj: "MEI",
      email: "",
      password: "",
      passwordConfirmation: "",
      phoneNumber: "",
    },
    validate({
      cnpj,
      corporationName,
      name,
      password,
      passwordConfirmation,
      phoneNumber,
    }) {
      let errors: any = {};
      if (name.length < 3) {
        errors.name = "Nome inválido. Mínimo de 3 caracteres";
      }
      if (corporationName.length < 3) {
        errors.name = "Nome inválido. Mínimo de 3 caracteres";
      }
      if (password.length < 6) {
        errors.password = "A Senha deve ter no minimo 6 caracteres.";
      }
      if (password !== passwordConfirmation) {
        errors.passwordConfirmation = "Este campo deve ser igual a Senha.";
      }

      if (phoneNumber.length < 4) {
        errors.phoneNumber = "Número de Telefone demasiado curto.";
      }
      if (!phoneNumber.startsWith("+")) {
        errors.phoneNumber =
          "O Número de Telefone deve ser precedido com o código do seu país. Ex.: +244934712217";
      }

      return errors;
    },
  });
  const router = useRouter();
  const createAccount = useMutation((user: UserFields) => {
    return apiRoutes.post<RegisterApiResponse>("/users/register", {
      user,
    });
  });
  const autologin = useAutoLogin();

  function handleSubmit(values: UserFields) {
    createAccount.mutate(values, {
      onSuccess(res, variables, context) {
        const msg = res.data.msg || "";
        if (res.status === 201) {
          const uid = res.data.uid!;
          showNotification({
            title: "Usuario criado",
            message:
              "A sua conta foi criada com sucesso. Em breve será redirecionado para a página principal.",
            color: "green",
          });

          autologin.handle((yes) => {
            setCookie(null, "uid", uid, {
              maxAge: yes ? 30 * 24 * 60 * 60 : undefined,
              path: "/",
            });
            apiRoutes.defaults.headers["uid"] = uid;
            router.push("/");
          });

          return;
        }
        console.log(res.data);
        if (msg.includes("email-already-in-use")) {
          showNotification({
            title: "O Email já existe!",
            message:
              "Já existe um usuário com o email que está tentando cadastrar.",
            color: "red",
          });
        } else {
          showNotification({
            title: "Erro ao cadastrar.",
            message:
              "Houve um erro ao tentar criar a sua conta. Certifique-se de estar preenchendo corretamente o formúlario.",
            color: "red",
          });
        }
      },
    });
  }

  return { form, handleSubmit, createAccount };
}
