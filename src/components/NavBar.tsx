import React from "react";
import {
  Group,
  Navbar,
  Divider,
  ScrollArea,
  Stack,
  MediaQuery,
} from "@mantine/core";
import { IconHistory, IconHome, IconSettings, IconUser } from "@tabler/icons";
import NavBarLink from "./NavBarLink";
import LaunchInvoice from "./LaunchInvoice";

interface NavBarProps {
  opened: boolean;
}

export default function NavBar({ opened }: NavBarProps) {
  return (
    <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ lg: 300, sm: 320 }}>
      <Navbar.Section p="sm">
        <Group sx={{ justifyContent: "flex-end" }}>
          <LaunchInvoice />
        </Group>
      </Navbar.Section>
      <Navbar.Section grow component={ScrollArea} p="md">
        {/* Os itens do menu */}
        <NavBarLink Icon={IconHome} label="Página Inicial" link="/" />
        <NavBarLink Icon={IconHistory} label="Histórico" link="/link2" />
        <NavBarLink Icon={IconSettings} label="Preferências" link="/link2" />
      </Navbar.Section>
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Navbar.Section>
          <Divider />
          <p>Footer NavBar</p>
        </Navbar.Section>
      </MediaQuery>
    </Navbar>
  );
}
