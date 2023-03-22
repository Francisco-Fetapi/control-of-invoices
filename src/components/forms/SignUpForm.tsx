import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Text,
  Group,
  Button,
  Center,
  Stack,
  Select,
  Divider,
} from "@mantine/core";
import Link from "next/link";
import FormHeader from "../FormHeader";
import { FacebookButton, GoogleButton } from "components/SocialButtons";
import useFormSignUp, { validCNPJ } from "hooks/forms/useFormSignUp";

export function SignUpForm() {
  const { form, handleSubmit, createAccount } = useFormSignUp();

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
        onSubmit={form.onSubmit(handleSubmit)}
      >
        <Stack style={{ flexDirection: "column" }}>
          <Text size="lg" weight={500}>
            Bem vindo! Crie a sua conta com o
          </Text>
          <Group grow mb="xs">
            <GoogleButton radius="xl">Google</GoogleButton>
            <FacebookButton radius="xl">Facebook</FacebookButton>
          </Group>
          <Divider label="Ou continue com o email" labelPosition="center" />
          <TextInput
            label="Nome"
            placeholder="Nome e sobrenome"
            required
            {...form.getInputProps("name")}
            // width="100%"
          />
          <TextInput
            label="Nome da Empresa"
            required
            {...form.getInputProps("corporationName")}
            // width="100%"
          />
          <TextInput
            label="Email"
            type="email"
            placeholder="seu@email.com"
            required
            {...form.getInputProps("email")}
          />
          <TextInput
            label="Número de Telefone"
            required
            {...form.getInputProps("phoneNumber")}
          />
          
          <PasswordInput
            label="Senha"
            placeholder="6 digitos no minimo"
            required
            {...form.getInputProps("password")}
          />
          <PasswordInput
            label="Confirmar senha"
            placeholder="Confirme sua senha"
            required
            {...form.getInputProps("passwordConfirmation")}
          />

          <Center>
            <Button type="submit" loading={createAccount.isLoading}>
              Criar conta
            </Button>
            
          </Center>
        </Stack>
      </Paper>
    </Stack>
  );
}
