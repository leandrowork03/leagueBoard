# LeagueBoard - Parte do Front-end

Front-end React para o LeagueBoard, sistema para busca e visualização de clubes de futebol.

---

## Sobre

Este projeto é o front-end desenvolvido em React e TypeScript que consome uma API backend em Node.js para fornecer dados dos clubes, autenticação e funcionalidades do sistema.

Inclui:

- Sistema de autenticação com cadastro e login
- Busca de clubes com sugestões automáticas (autocomplete)
- Visualização de detalhes dos clubes
- Menu dinâmico para usuários logados (dashboard, home e logout)
- Feedbacks visuais com notificações toast

---

## Tecnologias e bibliotecas principais

- React com hooks e React Router para navegação
- TypeScript para tipagem estática
- React Hook Form para gerenciamento e validação de formulários
- Zod para validação e esquema dos dados dos formulários
- React Hot Toast para notificações visuais
- Firebase Authentication para autenticação de usuários
- CSS com Tailwind (ou seu sistema de estilos)

---

## Funcionalidades principais

- Cadastro e login com validação avançada (via react-hook-form + zod)
- Busca de clubes com filtro em tempo real e autocomplete
- Visualização dos detalhes de cada clube
- Menu usuário com opções dashboard, home e logout, exibido apenas para usuários logados
- Feedbacks rápidos para ações como login, cadastro, erros, etc.

---

## Como rodar localmente

1. Clone este repositório.

```bash
git clone <URL_DO_REPOSITÓRIO>
cd leagueboard-front
