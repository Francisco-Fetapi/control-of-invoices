import { useMutation } from "react-query";
import { apiRoutes } from "lib/axios";
import { useEffect } from "react";
import { useForm } from "@mantine/form";
import type { CNPJ, User } from "entities/User";

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
        errors.password = "Senha deve ter no minimo 6 caracteres.";
      }
      if (password !== passwordConfirmation) {
        errors.passwordConfirmation = "Este campo deve ser igual a Senha.";
      }

      if (phoneNumber.length < 4) {
        errors.phoneNumber = "Número de Telefone demasiado curto.";
      }
      if (phoneNumber.startsWith("+")) {
        errors.phoneNumber =
          "O Número de Telefone deve ser precedido com o código do seu país.";
      }

      return errors;
    },
  });
  const createAccount = useMutation<unknown, unknown, UserFields>((user) => {
    return apiRoutes.post("/users/register", {
      user,
    });
  });

  useEffect(() => {
    if (createAccount.isError) {
    }
  }, [createAccount.isError]);

  console.log(createAccount);

  function handleSubmit(values: UserFields) {
    createAccount.mutate(values);
  }

  return { form, handleSubmit, createAccount };
}
