# Sistema de Controle de Notas Fiscais

## Introdução

Este projeto foi desenvolvido como uma solução para o problema de controle de notas fiscais de um freelancer que presta serviços para diferentes empresas. A aplicação permite que o usuário controle suas notas fiscais, lançando o número, valor, empresa, competência e serviço prestado.

A aplicação também possui um sistema de login social, permitindo que o usuário faça login e signin utilizando suas contas do Google ou Facebook.

Além disso, o sistema envia mensagens caso o cliente esteja ultrapassando o limite de faturamento como MEI.

## Avaliação do Escopo

O escopo do projeto incluiu a implementação de um CRUD de Notas Fiscais, Despesas, Empresas Parceiras e Categorias de Despesas, bem como a possibilidade de arquivar uma Categoria de Despesa.

## Estimativa

### Em Dias
- 22/03/2023: 1 dia
- 21/03/2023: 1 dia
- 20/03/2023: 1 dia
- 17/03/2023: 1 dia
- 16/03/2023: 1 dia
- 15/03/2023: 1 dia

### Em Horas
- 22/03/2023 5h0m: Criação dos gráficos para prover uma melhor visualização dos dados.
- 21/03/2023 15h: Criação do CRUD de todas as coleções do projeto.
- 20/03/2023 12h: Conexão do Sistema com o firebase. Autenticação com Email e Senha implementado.
- 17/03/2023 7h: Criação das principais páginas e componentes. (SEM FUNCIONALIDADE).
- 16/03/2023 5h: Estruturando as páginas e principais componentes.
- 15/03/2023 2h20m: Preparação do ambiente.

### Atividades Realizadas

- Criação dos gráficos para prover uma melhor visualização dos dados.
- Criação do CRUD de todas as coleções do projeto.
- Conexão do Sistema com o firebase. Autenticação com Email e Senha implementado.
- Criação das principais páginas e componentes. (SEM FUNCIONALIDADE)
- Estruturando as páginas e principais componentes.
- Preparação do ambiente.

## Atividades em falta

Com base na descrição inicial e no que eu implementei, as funções que não foram implementadas incluem:

- Envio de mensagens para caso o cliente esteja ultrapassando o limite de faturamento como MEI.

## Tecnologias Utilizadas

- Next.js: framework utilizado para desenvolver a aplicação web.
- TypeScript: linguagem de programação utilizada para escrever o código da aplicação.
- Firebase: plataforma utilizada para hospedar o banco de dados e gerenciar a autenticação dos usuários.

Para rodar localmente a aplicação é necessário criar um arquivo `.env` na raiz do projeto e informar as credenciais de conexão do Firebase. As seguintes variáveis de ambiente devem ser definidas no arquivo:

