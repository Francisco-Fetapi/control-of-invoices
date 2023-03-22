import { Progress, Box } from "@mantine/core";
import { formatMoney } from "helpers/formatMoney";
import getPercentage from "helpers/getPercentage";
import getSettings from "helpers/getSettings";
import useAuth from "hooks/useAuth";

export default function LimitRecipes() {
  const { user } = useAuth();
  const settings = getSettings(user);
  const value = 23000;
  const total = settings.limit;
  const percentage = getPercentage({
    total,
    value,
  });

  console.log(percentage);
  return (
    <Box>
      <h2>Limite de Faturamento</h2>
      <Progress
        size="xl"
        radius="xl"
        sections={[
          {
            value: percentage,
            color: "green",
            label: formatMoney(value.toString()),
          },
          {
            value: 100 - percentage,
            color: "red",
            label: formatMoney((total - value).toString()),
          },
        ]}
      />
    </Box>
  );
}
