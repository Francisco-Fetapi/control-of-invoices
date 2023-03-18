import Link from "next/link";
import { TitleAndButtonActionContainer } from "styles/components/TitleAndButtonAction";
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconPlus, TablerIcon } from "@tabler/icons";
import { useRouter } from "next/router";

interface TitleAndButtonActionProps {
  title: string;
  icon?: TablerIcon;
  href: `/${string}`;
}

export default function TitleAndButtonAction({
  title,
  icon: Icon = IconPlus,
  href,
}: TitleAndButtonActionProps) {
  const router = useRouter();
  return (
    <TitleAndButtonActionContainer>
      <h2>{title}</h2>

      <Tooltip label="Adicionar" color="blue" withArrow position="bottom-start">
        <ActionIcon variant="subtle" onClick={() => router.push(href)}>
          <Icon size={34} />
        </ActionIcon>
      </Tooltip>
    </TitleAndButtonActionContainer>
  );
}
