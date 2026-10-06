# Turismo Caparaó

Aplicação mobile desenvolvida como projeto acadêmico para facilitar o acesso a informações turísticas da região do Caparaó, reunindo em um único aplicativo locais de interesse, trilhas, cachoeiras, restaurantes e hospedagens.

> **Status:** Em desenvolvimento 🚧

## 📌 Sobre o projeto

O **Turismo Caparaó** tem como objetivo centralizar informações sobre pontos turísticos e estabelecimentos da região do Caparaó, facilitando a descoberta de locais e o planejamento de visitas.

A proposta é oferecer uma aplicação simples e acessível para que visitantes possam encontrar informações sobre diferentes locais turísticos, consultar detalhes e salvar seus locais favoritos.

O projeto está sendo desenvolvido inicialmente como um MVP, com possibilidade de expansão futura para outras funcionalidades relacionadas ao turismo regional.

## 🎯 Objetivos

- Centralizar informações turísticas da região do Caparaó;
- Facilitar a descoberta de trilhas, cachoeiras e outros locais;
- Disponibilizar informações sobre restaurantes e hospedagens;
- Permitir a visualização dos detalhes dos locais;
- Permitir que o usuário salve locais como favoritos;
- Criar uma base que possa ser expandida futuramente para outras funcionalidades.

## ✨ Funcionalidades

### Atualmente implementadas

- [x] Listagem de locais turísticos
- [x] Busca por nome do local
- [x] Busca por cidade
- [x] Separação por categorias
- [x] Trilhas
- [x] Cachoeiras
- [x] Restaurantes
- [x] Hospedagens
- [x] Tela de detalhes dos locais
- [x] Sistema de favoritos
- [x] Persistência dos favoritos no dispositivo
- [x] API REST para comunicação com o aplicativo
- [x] Banco de dados relacional MySQL
- [x] Tratamento básico de carregamento e erros

### 🚧 Em desenvolvimento / planejadas

- [ ] Mapa interativo
- [ ] Localização e rotas
- [ ] Filtros avançados
- [ ] Informações adicionais sobre trilhas
- [ ] Avaliações dos locais
- [ ] Sistema de cadastro de estabelecimentos
- [ ] Painel administrativo
- [ ] Expansão para outros locais da região

## 🛠️ Tecnologias utilizadas

### Aplicativo mobile

- React Native
- Expo
- TypeScript
- Expo Router
- Axios
- AsyncStorage

### Backend

- Node.js
- Express
- JavaScript
- API REST
- CORS

### Banco de dados

- MySQL
- SQL

### Ferramentas

- Git
- GitHub
- Visual Studio Code

## 🏗️ Arquitetura

O projeto utiliza uma arquitetura dividida em três partes principais:

```text
┌─────────────────────────┐
│     Aplicativo Mobile   │
│     React Native/Expo   │
└────────────┬────────────┘
             │
             │ HTTP / REST
             ▼
┌─────────────────────────┐
│         Backend         │
│      Node.js/Express    │
└────────────┬────────────┘
             │
             │ SQL
             ▼
┌─────────────────────────┐
│       Banco de Dados    │
│          MySQL          │
└─────────────────────────┘
```

O aplicativo mobile é responsável pela interface e interação com o usuário.

O backend disponibiliza a API REST responsável pelo acesso e processamento dos dados.

O MySQL é utilizado para armazenamento das informações dos locais e categorias.

## 📂 Estrutura do projeto

```text
turismo/
│
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   │
│   ├── constants/
│   │   └── categorias.js
│   │
│   ├── controllers/
│   │   └── locaisController.js
│   │
│   ├── middlewares/
│   │   ├── asyncHandler.js
│   │   └── errorHandler.js
│   │
│   ├── migrations/
│   │   └── ...
│   │
│   ├── routes/
│   │   └── locais.routes.js
│   │
│   ├── services/
│   │   └── locaisService.js
│   │
│   ├── app.js
│   └── server.js
│
├── mobile/
│   └── src/
│       ├── app/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       ├── types/
│       └── theme/
│
└── README.md
```

## 🔌 API

A API disponibiliza endpoints relacionados aos locais turísticos.

### Listar todos os locais

```http
GET /locais
```

### Buscar local por ID

```http
GET /locais/:id
```

### Listar categorias

```http
GET /locais/categorias
```

### Listar locais por categoria

```http
GET /locais/trilhas
GET /locais/cachoeiras
GET /locais/restaurantes
GET /locais/hospedagens
```

## 💾 Banco de dados

O projeto utiliza **MySQL** para armazenar as informações relacionadas aos locais turísticos e suas categorias.

Entre os dados utilizados pelos locais estão informações como:

- Nome;
- Cidade;
- Categoria;
- Descrição;
- Dificuldade;
- Duração;
- Outras informações relacionadas ao local.

A estrutura do banco é organizada de forma relacional, utilizando categorias associadas aos locais.

## ❤️ Favoritos

O aplicativo possui um sistema de favoritos.

Quando o usuário marca um local como favorito, seu identificador é armazenado localmente no dispositivo utilizando **AsyncStorage**.

A tela de favoritos consulta os locais disponíveis na API e apresenta somente aqueles que possuem seus identificadores salvos como favoritos.

## 🔎 Busca

A aplicação possui busca por texto nas telas de locais.

A pesquisa considera principalmente:

- Nome do local;
- Cidade.

Isso permite que o usuário encontre um local sem precisar navegar manualmente por toda a lista.

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- npm
- MySQL
- Expo/Expo CLI
- Git

### 1. Clonar o projeto

```bash
git clone https://github.com/TiagoDev-0/app-turismo-caparao.git
cd app-turismo-caparao
```

### 2. Configurar o backend

```bash
cd backend
npm install
```

Configure as variáveis de ambiente necessárias para a conexão com o banco de dados.

Depois, inicie o servidor:

```bash
node server.js
```

O backend ficará disponível de acordo com o `HOST` e `PORT` configurados no projeto.

### 3. Executar o aplicativo

Em outro terminal:

```bash
cd mobile
npm install
npx expo start
```

A partir daí, o projeto pode ser executado utilizando uma das opções disponibilizadas pelo Expo.

## 🧪 Desenvolvimento

Durante o desenvolvimento são utilizados:

- Git para controle de versão;
- GitHub para hospedagem do código;
- TypeScript no aplicativo mobile;
- API REST para comunicação entre aplicação e servidor;
- MySQL para persistência dos dados.

As funcionalidades são implementadas gradualmente, buscando manter uma separação entre interface, serviços, regras de acesso aos dados e componentes reutilizáveis.

## 📈 Próximos passos

O projeto ainda está em desenvolvimento. Entre os próximos objetivos estão a implementação do mapa, recursos de localização e rotas, filtros mais avançados e funcionalidades voltadas à expansão do catálogo turístico.

A arquitetura atual também permite que novas funcionalidades sejam adicionadas sem precisar concentrar toda a lógica nas telas do aplicativo.

## 👨‍💻 Autor

**Tiago Silva dos Santos**

Estudante de Tecnologia em Análise e Desenvolvimento de Sistemas — IFES.

Interesses principais:

- Desenvolvimento Backend
- Desenvolvimento Full Stack
- APIs REST
- Banco de Dados
- Engenharia de Software
- Segurança de Aplicações

## 📄 Licença

Projeto desenvolvido para fins acadêmicos e de aprendizado.