import { Progress, Box } from "@mantine/core";
import { formatMoney } from "helpers/formatMoney";
import getPercentage from "helpers/getPercentage";
import getSettings from "helpers/getSettings";
import useAuth from "hooks/useAuth";
import { TitleAndButtonActionContainer } from "styles/components/TitleAndButtonAction";

export default function LimitRecipes() {
  const { user } = useAuth();
  const settings = getSettings(user);
  const value = 23520;
  const total = settings.limit;
  const percentage = getPercentage({
    total,
    value,
  });
  const remainingBilling = total - value;

  console.log(percentage);
  return (
    <Box>
      <TitleAndButtonActionContainer>
        <h2>Limite de Faturamento</h2>
        <h2>{percentage}%</h2>
      </TitleAndButtonActionContainer>
      <Box style={{ zoom: 1.5 }}>
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
              label: formatMoney(remainingBilling.toString()),
            },
          ]}
        />
      </Box>
    </Box>
  );
}
