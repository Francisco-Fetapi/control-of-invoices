import { Box, Button, Center } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import AppScheme from "layouts/AppScheme";

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <h2>Lançar Despesa</h2>

        {/* <FormLaunchInvoice /> */}
        <Center mt={30}>
          <Button leftIcon={<IconPlus size="1rem" />}>Lançar Despesa</Button>
        </Center>
      </AppScheme>
    </div>
  );
}
