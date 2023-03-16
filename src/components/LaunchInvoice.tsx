import { ActionIcon, Tooltip } from "@mantine/core";
import { IconDoorEnter } from "@tabler/icons";

export default function LaunchInvoice() {
  return (
    <Tooltip label="Nova nota fiscal" color="blue" withArrow>
      <ActionIcon variant="light">
        <IconDoorEnter size="3rem" />
      </ActionIcon>
    </Tooltip>
  );
}
