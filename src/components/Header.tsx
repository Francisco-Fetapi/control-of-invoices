import {
  useMantineColorScheme,
  Header as HeaderMantine,
  MediaQuery,
  Burger,
  Text,
  useMantineTheme,
  Group,
  ActionIcon,
  createStyles,
} from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { IconSun, IconMoonStars, IconLogout } from "@tabler/icons";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { destroyCookie } from "nookies";

interface HeaderProps {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

const useStyles = createStyles((theme) => ({
  background: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },
  themeColor: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[4]
        : theme.colors.blue[6],
  },
  alterIcon: {
    color: theme.colors.cyan[6],
  },
}));

export default function Header({ opened, setOpened }: HeaderProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <HeaderMantine height={70} p="md">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        {/* <img
          // src={`/logo-light.png`}
          src={`/logo-${theme.colorScheme}.png`}
          width={50}
          height={40}
          alt="Logo do sistema"
        /> */}
        <h4>SISTEMA DE EMISSÃO DE NOTAS FISCAIS</h4>

        <Group>
          <ActionIcon
            onClick={() => toggleColorScheme()}
            size="lg"
            className={`${classes.background} ${classes.themeColor}`}
          >
            {colorScheme === "dark" ? (
              <IconSun size={20} />
            ) : (
              <IconMoonStars size={20} />
            )}
          </ActionIcon>
          <ActionIcon
            className={`${classes.background} ${classes.alterIcon}`}
            size="lg"
          >
            <IconLogout size={20} />
          </ActionIcon>
        </Group>
      </div>
    </HeaderMantine>
  );
}
