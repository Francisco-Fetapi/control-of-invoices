import InvoicesPerMonth from "components/charts/InvoicesPerMonth";
import LimitRecipes from "components/charts/LimitRecipes";
import HistoryProvider from "context/HistoryProvider";
import AppScheme from "layouts/AppScheme";

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <HistoryProvider>
          <LimitRecipes />
          <InvoicesPerMonth year="2020" />
          <h2>Visualização Rápida</h2>
          <ul>
            <li>
              gráfico indicativo de quanto ainda há disponível de faturamento
              para emitir uma Nota Fiscal sem que haja desenquadramento como MEI
            </li>
            <li>gráficos com o valor de NF gerado, mês a mês</li>
            <li>gráficos com o valor de despesas mês a mês</li>
            <li>
              gráficos com balanço simples, mostrando receitas - despesas mês a
              mês
            </li>
            <li>gráficos com as despesas por categorias</li>
          </ul>

          <br />

          <p>
            Deve ser possível escolher o ano, para possibilitar visualização de
            dados históricos
          </p>
        </HistoryProvider>
      </AppScheme>
    </div>
  );
}
