import {
  Navbar,
  ScrollArea,
  createStyles,
  UnstyledButton,
} from "@mantine/core";
import { UserButton } from "./UserButton";
import { LinksGroup } from "./NavbarLinksGroup";
import { LinkMenu } from "layouts/AppScheme";
import { IconDoorExit, IconDoorEnter } from "@tabler/icons";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    // padding: theme.spacing.md,
    paddingTop: 0,
    // marginLeft: `calc(${theme.spacing.md} * -1)`,
    // marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `1rem solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.md} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      // [`& .${getStylesRef('icon')}`]: {
      //   color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      // },
    },
  },

  linkIcon: {
    // ref: getStylesRef('icon'),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },
  footer2: {
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    // paddingTop: theme.spacing.xs,
  },
  control: {
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: `${theme.spacing.sm}px 9px`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[3],
    },
  },
}));

interface NavBarProps {
  opened: boolean;
  links: LinkMenu[];
}

export function NavbarNested({ opened, links }: NavBarProps) {
  const { classes } = useStyles();
  const Links = links.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ lg: 300, sm: 320 }}>
      <Navbar.Section className={classes.header}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Nome Usuario"
          email="emaildousuario@gmail.com"
        />
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{Links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer2}>
        <Link href="/despesas/lancar" passHref>
          <UnstyledButton component="a" className={classes.control}>
            <IconDoorExit className={classes.linkIcon} stroke={1.5} />
            <span>Lançar Despesa</span>
          </UnstyledButton>
        </Link>

        <Link href="/lancar-nota-fiscal" passHref>
          <UnstyledButton component="a" className={classes.control}>
            <IconDoorEnter className={classes.linkIcon} stroke={1.5} />
            <span>Lançar Nota Fiscal</span>
          </UnstyledButton>
        </Link>
      </Navbar.Section>
    </Navbar>
  );
}
