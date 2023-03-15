import {
  MediaQuery,
  Text,
  Aside as AsideMantine,
  Title,
  ScrollArea,
  Box,
} from "@mantine/core";

export default function Aside() {
  return (
    <MediaQuery smallerThan="md" styles={{ display: "none" }}>
      <AsideMantine hiddenBreakpoint="md" width={{ lg: 350, sm: 270 }}>
        <Box p="xs">
          <Title order={3}>SideBar</Title>
          <Text mt={2} size="xs" color="dimmed" mb={10}>
            Informacoes secundarias
          </Text>
        </Box>
        <ScrollArea>
          <p>Ola Mundo!</p>
        </ScrollArea>
      </AsideMantine>
    </MediaQuery>
  );
}
