import { useForm } from "@mantine/form";
import { User } from "entities/User";
import { useMutation } from "react-query";
import { apiRoutes } from "lib/axios";
import { showNotification } from "@mantine/notifications";
import { useEffect } from "react";

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
  const login = useMutation<unknown, unknown, UserFields>((user) => {
    return apiRoutes.post("/login", {
      user,
    });
  });

  function handleSubmit(values: UserFields) {
    login.mutate(values);
  }
  useEffect(() => {
    if (login.isError) {
      showNotification({
        title: "Email/Senha inválido/a",
        message:
          "Certifique-se de estar preenchendo corretamente o formúlario.",
        color: "red",
      });
    }
  }, [login.isError]);

  return { form, handleSubmit, login };
}
