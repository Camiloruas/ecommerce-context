# Ecommerce Context

Aplicacao de e-commerce com React + TypeScript consumindo API real de produtos.

## Stack

- React 19
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS v4
- Axios
- React Hot Toast

## Requisitos

- Node.js 20+
- npm 10+

## Configuracao de ambiente

1. Crie o arquivo `.env` na raiz com base no exemplo:

```env
VITE_API_URL=https://sua-api.com
```

2. Para producao local deste projeto, use sua URL real:

```env
VITE_API_URL=https://loja-api.camiloruas.dev
```

Observacoes:
- `.env` esta no `.gitignore`.
- Nunca versionar secrets/tokens/chaves.

## Como rodar

```bash
npm install
npm run dev
```

Build de producao:

```bash
npm run build
npm run preview
```

## Estrutura principal

- `src/services/api.ts`: camada centralizada de API (`axios` + endpoints)
- `src/pages/home/index.tsx`: listagem de produtos
- `src/pages/productDetail/index.tsx`: detalhes do produto
- `src/contexts/context.tsx`: contexto do carrinho

## API

Base URL via ambiente:

- `VITE_API_URL`

Endpoint usado no frontend:

- `GET /products`

A rota de detalhe usa o mesmo recurso com id:

- `GET /products/:id`

## Tratamento de estados da UI

Implementado nas telas que consomem API:

- `loading`: exibicao de mensagem de carregamento
- `falha de conexao`: mensagem de erro amigavel
- `retorno vazio`: mensagem quando nao ha produtos

## Rotas

- `/`: home com produtos
- `/product/:id`: detalhes do produto
- `/cart`: carrinho

## Testes executados (22/05/2026)

- `npm run build`: sucesso (TypeScript + Vite)
- Verificacao manual de codigo:
  - sem URL hardcoded da API fake
  - consumo centralizado em `src/services/api.ts`
  - `.env` ignorado e `.env.example` versionado

## Limpeza aplicada

Removidos por nao uso:

- `db.json` (mock local da API fake)
- dependencia `json-server`
- assets padrao nao referenciados em `src/assets`
- pastas vazias: `src/hooks`, `src/types`, `src/utils`
