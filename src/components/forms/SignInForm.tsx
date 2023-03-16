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
} from "@mantine/core";

import Link from "next/link";
import FormHeader from "../FormHeader";
import { useState } from "react";

export function SignInForm() {
  const [loading, setLoading] = useState(false);

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
            INICIAR SESSÃO
          </Title>

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
          <Group position="apart">
            <Link href="/esqueci-minha-senha">
              <Anchor<"a"> size="sm">Esqueceste sua senha?</Anchor>
            </Link>
          </Group>
          <Center>
            <Button loading={loading} type="submit">
              Iniciar sessão
            </Button>
          </Center>
        </Stack>
      </Paper>
    </Stack>
  );
}