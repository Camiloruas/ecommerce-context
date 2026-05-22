# Lume Store

Projeto de estudo desenvolvido com React, TypeScript e Vite para praticar Context API em um fluxo inspirado em e-commerce, com catálogo, detalhes de produto e carrinho de compras.

 **Projeto online:** [lume-store.vercel.app](https://ecommerce-context-nine.vercel.app)

## Idiomas

- [Português](#português)
- [English](#english)

---

## Português

### Sobre

Lume Store é um projeto educacional inspirado em uma loja virtual, criado para praticar gerenciamento de estado global com Context API no React.

A aplicação simula partes importantes de uma experiência de e-commerce, como catálogo de produtos, página de detalhes e carrinho de compras. O objetivo principal não é representar uma loja completa com checkout, pagamentos ou área administrativa, mas demonstrar organização de componentes, rotas, consumo de API e controle de estado compartilhado.

O projeto também foi refatorado para consumir uma API real por meio de uma camada centralizada de configuração, usando variável de ambiente para manter o código preparado para desenvolvimento local e produção.

### Tecnologias

- React 19
- TypeScript
- Vite
- React Router DOM
- Context API
- Tailwind CSS v4
- Axios
- React Hot Toast
- React Icons
- Vercel

### Funcionalidades

- Listagem de produtos consumidos via API
- Página de detalhes do produto
- Adição de produtos ao carrinho usando Context API
- Remoção e atualização de quantidade no carrinho
- Total do carrinho calculado dinamicamente a partir do estado global
- Estados de carregamento, erro e retorno vazio
- Layout responsivo
- Deploy em produção na Vercel

### Configuração de ambiente

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```env
VITE_API_URL=https://sua-api.com
```

Observações:

- `.env` não deve ser versionado.
- `.env.example` deve conter apenas placeholders.
- Tokens, senhas e chaves privadas nunca devem ser enviados ao repositório.

### Como rodar localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

### Rotas

- `/`: catálogo de produtos
- `/product/:id`: detalhes do produto
- `/cart`: carrinho

### Estrutura principal

- `src/services/api.ts`: configuração centralizada da API
- `src/components/header`: cabeçalho da aplicação
- `src/components/footer`: rodapé com links de contato
- `src/components/layout`: layout compartilhado
- `src/pages/home`: catálogo de produtos
- `src/pages/productDetail`: detalhes do produto
- `src/pages/cart`: carrinho
- `src/contexts/context.tsx`: contexto global do carrinho

### API

A URL base é definida por variável de ambiente:

```env
VITE_API_URL
```

Endpoints consumidos:

- `GET /products`
- `GET /products/:id`

### Testes e validações

Executado em 22/05/2026:

```bash
npm run build
```

Validações realizadas:

- Build de produção concluído com sucesso
- Rotas públicas testadas na Vercel
- API centralizada em `src/services/api.ts`
- Sem URL da API fake hardcoded
- `.env` ignorado no Git
- `vercel.json` configurado para rotas do React Router

### Deploy

Hospedado na Vercel:

[https://ecommerce-context-nine.vercel.app](https://ecommerce-context-nine.vercel.app)

### Autor

Camilo Ruas

- GitHub: [github.com/Camiloruas](https://github.com/Camiloruas)
- LinkedIn: [linkedin.com/in/camilo-ruas-3a2a6425](https://www.linkedin.com/in/camilo-ruas-3a2a6425/)
- Portfólio: [camiloruas.dev](https://www.camiloruas.dev)

---

## English

### About

Lume Store is an educational project inspired by an online store, built to practice global state management with React Context API.

The application simulates key parts of an e-commerce experience, such as product catalog, product details and shopping cart. Its main goal is not to represent a complete store with checkout, payments or admin features, but to demonstrate component organization, routing, API consumption and shared state management.

The project was also refactored to consume a real API through a centralized API configuration layer, using environment variables to keep the app ready for both local development and production.

### Tech Stack

- React 19
- TypeScript
- Vite
- React Router DOM
- Context API
- Tailwind CSS v4
- Axios
- React Hot Toast
- React Icons
- Vercel

### Features

- Product listing from API data
- Product detail page
- Add products to cart using Context API
- Remove items and update cart quantity
- Dynamic cart total calculated from global state
- Loading, error and empty states
- Responsive layout
- Production deployment on Vercel

### Environment Setup

Create a `.env` file in the project root based on `.env.example`:

```env
VITE_API_URL=https://your-api.com
```

Notes:

- `.env` must not be committed.
- `.env.example` should only contain placeholders.
- Tokens, passwords and private keys must never be pushed to the repository.

### Running Locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

### Routes

- `/`: product catalog
- `/product/:id`: product details
- `/cart`: shopping cart

### Main Structure

- `src/services/api.ts`: centralized API configuration
- `src/components/header`: application header
- `src/components/footer`: footer with contact links
- `src/components/layout`: shared layout
- `src/pages/home`: product catalog
- `src/pages/productDetail`: product details
- `src/pages/cart`: shopping cart
- `src/contexts/context.tsx`: global cart context

### API

The base URL is defined through an environment variable:

```env
VITE_API_URL
```

Consumed endpoints:

- `GET /products`
- `GET /products/:id`

### Tests and Checks

Run on May 22, 2026:

```bash
npm run build
```

Checks performed:

- Production build completed successfully
- Public routes tested on Vercel
- API centralized in `src/services/api.ts`
- No fake API URL hardcoded
- `.env` ignored by Git
- `vercel.json` configured for React Router routes

### Deployment

Hosted on Vercel:

[https://ecommerce-context-nine.vercel.app](https://ecommerce-context-nine.vercel.app)

### Author

Camilo Ruas

- GitHub: [github.com/Camiloruas](https://github.com/Camiloruas)
- LinkedIn: [linkedin.com/in/camilo-ruas-3a2a6425](https://www.linkedin.com/in/camilo-ruas-3a2a6425/)
- Portfolio: [camiloruas.dev](https://www.camiloruas.dev)
