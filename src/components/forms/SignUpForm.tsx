import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Group,
  Button,
  Box,
  Center,
  Stack,
  Select,
} from "@mantine/core";

import Link from "next/link";

import FormHeader from "../FormHeader";
import { useState } from "react";

export function SignUpForm() {
  const [loading, setLoading] = useState(false);

  return (
    <Stack my={50} sx={{ maxWidth: 500, width: "90%" }}>
      <FormHeader title="Seja Bem-vindo!">
        Você já tem uma conta?{" "}
        <Link href="/iniciar-sessao">
          <Anchor<"a"> size="sm">Iniciar sessão</Anchor>
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
        // onSubmit={form.onSubmit(handleSubmit)}
      >
        <Stack style={{ flexDirection: "column" }}>
          <Title
            align="center"
            sx={() => ({
              fontWeight: 600,
              fontSize: 25,
            })}
            mb="md"
          >
            CRIAR CONTA
          </Title>
          <TextInput
            label="Nome"
            placeholder="Nome e sobrenome"
            required
            // {...form.getInputProps("username")}
            // width="100%"
          />
          <TextInput
            label="Email"
            placeholder="seu@email.com"
            required
            // {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Senha"
            placeholder="6 digitos no minimo"
            required
            // {...form.getInputProps("password1")}
          />
          <PasswordInput
            label="Confirmar senha"
            placeholder="Confirme sua senha"
            required
            // {...form.getInputProps("password2")}
          />
          <TextInput
            type="date"
            label="Data de nascimento"
            placeholder="DD/MM/AAAA"
            required
            // {...form.getInputProps("birthday")}
          />
          <Select
            style={{ zIndex: 2 }}
            data={[]}
            // {...form.getInputProps("genre")}
            // placeholder=""
            label="Selecione seu genero"
            required
          />

          <Center>
            <Button loading={loading} type="submit">
              Criar conta
            </Button>
          </Center>
        </Stack>
      </Paper>
    </Stack>
  );
}
