import AppScheme from "layouts/AppScheme";

// TODO: middlware to redirect user to login if isn't logged

// way1:  put all pages that need(or not) authentication in the same folder.

// way2:  create a middlare for all pages and use if statement to determine what page need authenticaton. use an array to list all pages that need authentication. the middleware only can go to next handler if satisfy the conditions.

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <h2>Visualização Rápida</h2>
        <ul>
          <li>
            gráfico indicativo de quanto ainda há disponível de faturamento para
            emitir uma Nota Fiscal sem que haja desenquadramento como MEI
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
      </AppScheme>
    </div>
  );
}
