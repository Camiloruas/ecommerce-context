# Ecommerce Context (README Temporario)

Este README e temporario e descreve o estado atual do projeto.

## Sobre o Projeto

Aplicacao web de e-commerce em desenvolvimento, com foco em praticar organizacao de layout, roteamento e evolucao para gerenciamento de estado global (Context API).

## Tecnologias em Uso (ate agora)

- React 19
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS v4
- React Icons

## Estrutura Atual

- `src/components`: componentes reutilizaveis (`Header`, `Layout`)
- `src/pages`: paginas da aplicacao (`Home`, `Cart`)
- `src/styles`: estilos globais

## Rotas Implementadas

- `/` -> pagina Home
- `/cart` -> pagina Carrinho

## Scripts Disponiveis

- `npm run dev`: inicia ambiente de desenvolvimento
- `npm run build`: gera build de producao
- `npm run preview`: visualiza build local

## Status Atual

- Layout base criado
- Navegacao entre Home e Carrinho funcionando
- Dados ainda estaticos (mockados no componente)
- Contexto global de carrinho ainda em implementacao

## Proximos Passos

- Criar contexto de carrinho com React Context
- Permitir adicionar/remover itens
- Calcular subtotal e total dinamicamente
- Evoluir para consumo de API de produtos

## Observacao

No final do projeto, este README sera revisado para um padrao definitivo com documentacao completa.
