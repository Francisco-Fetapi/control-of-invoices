import React from "react";
import { Navbar, Divider, ScrollArea, Stack, MediaQuery } from "@mantine/core";
import { IconHome, IconNotes, IconUser } from "@tabler/icons";
import NavBarLink from "./NavBarLink";

interface NavBarProps {
  opened: boolean;
}

export default function NavBar({ opened }: NavBarProps) {
  return (
    <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ lg: 300, sm: 320 }}>
      <Navbar.Section grow component={ScrollArea} p="md">
        {/* Os itens do menu */}
        <Stack>
          <p>NavBar</p>
        </Stack>
        <NavBarLink Icon={IconHome} label="Página Inicial" link="/" />
        <NavBarLink Icon={IconUser} label="Link 2" link="/link2" />
        <NavBarLink Icon={IconNotes} label="Link 3" link="/link3" />
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
