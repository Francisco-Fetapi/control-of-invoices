# Sistema de Controle de Notas Fiscais

## Introdução

Este é um projeto desenvolvido para atender à necessidade do cliente Senhor Vibbraneo de controlar suas notas fiscais de forma organizada e eficiente. O sistema permite o lançamento de informações sobre notas fiscais emitidas para diferentes empresas, assim como o controle de despesas e categorias de despesas associadas.

## Avaliação do Escopo

O escopo do projeto incluiu a implementação de um CRUD de Notas Fiscais, Despesas, Empresas Parceiras e Categorias de Despesas.

## Estimativa

### Em Dias
O projeto foi concluido num prazo igual à 7 dias. 

### Em Horas
Abaixo temos as `Atividades Realizadas` da main recente à mais antiga e o tempo que levou para conclui-las.

- 22/03/2023 -> 5h0m: Criação dos gráficos para prover uma melhor visualização dos dados.
- 21/03/2023 -> 15h: Criação do CRUD de todas as coleções do projeto.
- 20/03/2023 -> 12h: Conexão do Sistema com o firebase. Autenticação com Email e Senha implementado.
- 17/03/2023 -> 7h: Criação das principais páginas e componentes. (SEM FUNCIONALIDADE).
- 16/03/2023 -> 5h: Estruturando as páginas e principais componentes.
- 15/03/2023 -> 2h20m: Preparação do ambiente.

## Atividades em falta

Com base na descrição inicial e no que eu implementei, as funções que não foram implementadas incluem:

- Envio de mensagens para caso o cliente esteja ultrapassando o limite de faturamento como MEI.
- Criar Conta/Iniciar Sessão com o Facebook e o Google.
- Exibir o gráfico que mostra as despesas classficadas por categoria.

## Tecnologias Utilizadas

- Next.js: framework utilizado para desenvolver a aplicação web.
- TypeScript: linguagem de programação utilizada para escrever o código da aplicação.
- Firebase: plataforma utilizada para hospedar o banco de dados e gerenciar a autenticação dos usuários.

Para rodar localmente a aplicação é necessário criar um arquivo `.env` na raiz do projeto e informar as credenciais de conexão do Firebase. As seguintes variáveis de ambiente devem ser definidas no arquivo:

```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```
As credenciais podem ser obtidas na console do Firebase. Certifique-se de que o projeto esteja configurado corretamente para permitir a conexão com a aplicação.
