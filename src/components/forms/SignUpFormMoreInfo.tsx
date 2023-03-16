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

export function SignUpFormMoreInfo() {
  const [loading, setLoading] = useState(false);

  return (
    <Stack my={50} sx={{ maxWidth: 500, width: "90%" }}>
      <FormHeader title="Complete seu perfil!">
        A sua conta está quase pronta!{" "}
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
            Completar Perfil
          </Title>
          <TextInput
            label="Nome"
            placeholder="Nome e sobrenome"
            required
            value="NOME JA PREENCHIDO"
            // {...form.getInputProps("username")}
            // width="100%"
          />
          <TextInput
            label="Nome da Empresa"
            required
            // {...form.getInputProps("username")}
            // width="100%"
          />
          {/* so vem se necessario */}
          <TextInput
            label="Email"
            placeholder="seu@email.com"
            required
            // {...form.getInputProps("email")}
          />
          {/* so vem se necessario */}
          <TextInput
            label="Número de Telefone"
            type="number"
            required
            // {...form.getInputProps("email")}
          />
          <Select
            style={{ zIndex: 2 }}
            data={[
              "MEI",
              "EI",
              "LTDA",
              "SLU",
              "Sociedade Simples",
              "Sociedade Anônima",
            ]}
            // {...form.getInputProps("genre")}
            // placeholder=""
            label="Selecione seu CNPJ"
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
