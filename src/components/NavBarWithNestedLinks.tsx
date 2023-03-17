import { Navbar, Group, Code, ScrollArea, createStyles } from "@mantine/core";
import { UserButton } from "./UserButton";
import { LinksGroup } from "./NavbarLinksGroup";
import { LinkMenu } from "layouts/AppScheme";

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
    </Navbar>
  );
}
