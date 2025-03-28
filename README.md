# ATIVIDADES ESCOLA ACME API
Situação de Aprendizagem - Back-End (Node.JS, JavaSript, VsCode, ORM Prisma, Insomnia)
## Contextualização
A ESCOLA ACME tem atuado em nossa cidade com ótimo atendimento e confiabilidade, é nossa cliente e necessita de um sistema Web para registro das atividades e notas de seus alunos.<br>O P.O. após uma visita ao cliente, elaborou o DER e UML DC(Diagrama de Classes) a seguir e elencou os requisitos funcionais.<br>
![DER e DC](./docs/der-dc.png)
## Desafio
Desenvolver as funcionalidades conforme requisitos

### Requisitos funcionais
- [RF001] O sistema deve permitir o CRUD de Alunos.
    - [RF001.1] O sistema deve permitir o CRUD de telefones, pois cada **aluno** pode possuir 0 ou vários telefones de tipos diferentes como celular, fixo ou comercial.
    - [RF001.2] A rota **read** do **aluno** deve mostrar os dados de todos os alunos e seus respectivos telefones.
    - [RF001.3] A rota **readOne** do **aluno** deve mostrar os dados de um aluno específico, seus telefones e suas **atividades**.
- [RF002] O sistema deve permitir o CRUD de Atividades.
    - [RF002.1] O sistema deve associar a atividade a um aluno.
    - [RF002.2] Ao cadastrar uma nova atividade **create** no controller, a dataInicio deve ser gerada pelo Banco de Dados @dedault(now()).
    - [RF002.3] Ao cadastrar uma nova atividade **create** no controller, a dataEntrega, a nota e a parcial podem ser nulas **"?"** pois serão preenchidas na rota **update** quando o aluno entregar e o professor corrigir.
    - [RF002.4] Se ao realizar **update** o campo **nota** for enviado o sistema deve calcular a **parcial** com a formula **"nota * peso / 10"**.

### Casos de teste (Insomnia)
- [CT001] Deve ser cadastrado pelo menos 5 alunos.
- [CT002] Deve ser cadastrado ao menos 1 telefone para cada aluno.
    - [CT002.1] Pelo menos dois alunos devem ter dois ou mais telefones cadastrados.
- [CT003] Cadastre, altere e exclua um aluno.
- [CT004] Cadastre uma atividade para cada aluno.
    - [CT004.1] Pelo menos um aluno deve ter duas ou mais atividades cadastradas.
- [CT005] Cadastre, altere e exclua uma atividade.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para construir aplicações web em Node.js.
- **Prisma**: ORM (Object-Relational Mapping) para interagir com o banco de dados.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **Insomnia/Postman**: Ferramentas para testar APIs.
- **dotenv**: Para gerenciar variáveis de ambiente

## Passo a Passo de como executar a API

### 1. Clone o Repositório

Clone o repositório para sua máquina local usando o seguinte comando:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Navegue até o Diretório do Projeto
- Entre no diretório do projeto:
  ```bash
  cd seu-repositorio
  ```

### 3. Instale as Dependências
- Instale as dependências do projeto usando o npm:
  ```bash
  npm i express cors dotenv routes mysql
  ```

### 4. Configure o Banco de Dados
- Crie um Banco de Dados:
Acesse seu servidor MySQL e crie um banco de dados com o nome desejado (por exemplo, pbe2-vps01-escola-atividades-2025-main).
Configure o arquivo .env:

Crie um arquivo .env na raiz do projeto e adicione a URL de conexão do seu banco de dados:
```plaintext
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco_de_dados"
```

### 5. Execute as Migrações do Prisma
- Para criar as tabelas no banco de dados, execute o seguinte comando:
  ```bash
  npx prisma migrate dev
  ```

### 6. Inicie o Servidor
- Inicie o servidor da API com o seguinte comando:
```bash
nodemon
```

### 7. Teste a API
- Use o Insomnia ou Postman para testar os endpoints da API. Você pode fazer requisições
