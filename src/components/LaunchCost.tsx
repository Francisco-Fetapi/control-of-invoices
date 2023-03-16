import { ActionIcon, Tooltip } from "@mantine/core";
import { IconDoorExit } from "@tabler/icons";

export default function LaunchCost() {
  return (
    <Tooltip label="Nova Despesa" color="red" withArrow>
      <ActionIcon variant="light">
        <IconDoorExit size="3rem" />
      </ActionIcon>
    </Tooltip>
  );
}
