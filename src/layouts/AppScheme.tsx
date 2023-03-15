import { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Aside from "components/Aside";
import Header from "components/Header";
import { useRouter } from "next/router";

interface AppSchemeProps {
  children: React.ReactNode;
}

export default function AppScheme({ children }: AppSchemeProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="md"
      asideOffsetBreakpoint="md"
      navbar={<NavBar opened={opened} />}
      aside={<Aside />}
      footer={<Footer />}
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      {children}
    </AppShell>
  );
}
