import {
  createStyles,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons";
import Link from "next/link";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 26,
    fontWeight: 900,
  },

  controls: {
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
}));

export interface IConfirmationEmail {
  status: "success";
  code: string;
}

export function ConfirmEmailForm() {
  const { classes } = useStyles();

  const [loading, setLoading] = useState(false);

  const noEmail = false;

  return (
    <Container my={30} sx={{ maxWidth: 500, width: "90%" }}>
      <Title className={classes.title} align="center">
        Confirmação do Email
      </Title>
      <Text color="dimmed" size="sm" align="center">
        Acabamos de enviar um código de confirmação para o seu email, insira-o
        na caixa de texto abaixo para confirmá-lo.
      </Text>

      <Paper
        component="form"
        autoComplete="off"
        // onSubmit={form.onSubmit(handleSubmit)}
        withBorder
        shadow="md"
        p={30}
        radius="md"
        mt="xl"
      >
        <TextInput
          // {...form.getInputProps("code")}
          label="Código de confirmação"
          placeholder="xxx-xxx"
          required
          disabled={noEmail}
        />
        <Group position="apart" mt="lg" className={classes.controls}>
          <Link href="/criar-conta">
            <Anchor<"a"> color="dimmed" size="sm" className={classes.control}>
              <Center inline>
                <IconArrowLeft size={12} stroke={1.5} />
                <Box ml={5}>Criar conta</Box>
              </Center>
            </Anchor>
          </Link>
          <Link href="/" passHref>
            <Button
              disabled={noEmail}
              loading={loading}
              component="a"
              className={classes.control}
            >
              Confirmar email
            </Button>
          </Link>
        </Group>
      </Paper>

      {!noEmail ? (
        <>
          <Text mt={10} color="yellow" size="sm">
            Procure o email na <b>Caixa de Spam</b> caso não o encontre na caixa
            principal.
          </Text>
          <Center mt={15}>
            <Anchor size="sm">
              Não recebi código nenhum, mesmo na caixa de spam
            </Anchor>
          </Center>
        </>
      ) : (
        <Text mt={10} color="yellow" size="sm">
          Preencha o formulário base antes de confirmar o email.{" "}
          <Link href="/criar-conta">
            <Anchor<"a">>Criar conta.</Anchor>
          </Link>
        </Text>
      )}
    </Container>
  );
}
