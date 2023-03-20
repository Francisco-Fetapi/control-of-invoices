import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Group,
  Button,
  Box,
  Center,
  Stack,
  Divider,
} from "@mantine/core";

import Link from "next/link";
import FormHeader from "../FormHeader";
import { useState } from "react";
import { FacebookButton, GoogleButton } from "components/SocialButtons";
import { useForm } from "@mantine/form";
import { User } from "entities/User";
import { useMutation } from "react-query";
import { apiRoutes } from "lib/axios";

interface UserFields extends Pick<User, "email" | "password"> {}

export function SignInForm() {
  const form = useForm<UserFields>({
    initialValues: {
      email: "",
      password: "",
    },
    validate({ email, password }) {
      let errors: any = {};
      if (password.length < 6) {
        errors.password = "Senha deve ter no minimo 6 caracteres.";
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

  return (
    <Stack my={50} sx={{ maxWidth: 500, width: "90%" }}>
      <FormHeader title="Bem-vindo de Volta!">
        Ainda não tens uma conta?{" "}
        <Link href="/criar-conta">
          <Anchor<"a"> size="sm">Criar conta</Anchor>
        </Link>
      </FormHeader>
      <Paper
        component="form"
        autoComplete="off"
        withBorder
        shadow="md"
        p={30}
        mt={30}
        radius="md"
        onSubmit={form.onSubmit(handleSubmit)}
      >
        <Stack style={{ flexDirection: "column" }}>
          <Text size="lg" weight={500}>
            Bem vindo! Inicie sessão com o
          </Text>
          <Group grow mb="xs">
            <GoogleButton radius="xl">Google</GoogleButton>
            <FacebookButton radius="xl">Facebook</FacebookButton>
          </Group>
          <Divider label="Ou continue com o email" labelPosition="center" />

          <TextInput
            label="Email"
            placeholder="seu@email.com"
            required
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Senha"
            placeholder="6 digitos no minimo"
            required
            {...form.getInputProps("password")}
          />
          <Group position="apart">
            <Link href="/esqueci-minha-senha">
              <Anchor<"a"> size="sm">Esqueceste sua senha?</Anchor>
            </Link>
          </Group>
          <Center>
            <Button loading={login.isLoading} type="submit">
              Iniciar sessão
            </Button>
          </Center>
        </Stack>
      </Paper>
    </Stack>
  );
}
