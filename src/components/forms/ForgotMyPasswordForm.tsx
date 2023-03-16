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

export function ForgotMyPasswordForm() {
  const { classes } = useStyles();

  const [loading, setLoading] = useState(false);

  return (
    <Container my={30}>
      <Title className={classes.title} align="center">
        Esqueceu sua senha?
      </Title>
      <Text color="dimmed" size="sm" align="center">
        Insira o seu email e receba um código de confirmação para inserir uma
        nova senha.
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
          // {...form.getInputProps("email")}
          label="Seu email"
          placeholder="meu@email.com"
          required
        />
        <Group position="apart" mt="lg" className={classes.controls}>
          <Link href="/iniciar-sessao">
            <Anchor<"a"> color="dimmed" size="sm" className={classes.control}>
              <Center inline>
                <IconArrowLeft size={12} stroke={1.5} />
                <Box ml={5}>Iniciar sessão</Box>
              </Center>
            </Anchor>
          </Link>
          <Button loading={loading} type="submit" className={classes.control}>
            Redefinir senha
          </Button>
        </Group>
      </Paper>
    </Container>
  );
}
