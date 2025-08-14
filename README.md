# ⚽ LeagueBoard - Front-end

![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwind_css-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

---

## 🎯 Sobre o Projeto

Este projeto é a parte front-end do **LeagueBoard**, uma aplicação desenvolvida para buscar e visualizar informações sobre clubes de futebol. Construído com **React** e **TypeScript**, ele se conecta a uma API backend (em Node.js) para gerenciar dados de clubes e um sistema completo de autenticação de usuários.

O objetivo do projeto é oferecer uma interface intuitiva e dinâmica, com funcionalidades como busca avançada, visualização detalhada de clubes e um sistema de autenticação robusto.

## ✨ Funcionalidades Principais

- **🔒 Autenticação Completa:** Sistema de cadastro e login de usuários integrado com **Firebase Authentication**.
- **🔎 Busca de Clubes Inteligente:** Funcionalidade de busca com filtro em tempo real e sugestões automáticas (`autocomplete`).
- **📊 Visualização Detalhada:** Páginas dedicadas para a visualização de informações detalhadas de cada clube.
- **⚙️ Menu Dinâmico:** Um menu de navegação que se adapta ao status do usuário (exibe `Dashboard`, `Home` e `Logout` apenas para usuários logados).
- **🚀 Feedbacks Visuais:** Notificações **toast** (`React Hot Toast`) para informar o usuário sobre o sucesso de ações como login, cadastro ou possíveis erros.

## 💻 Tecnologias e Bibliotecas

Este projeto foi desenvolvido com um conjunto de ferramentas e bibliotecas modernas para garantir performance e manutenibilidade:

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Framework** | **React** | Biblioteca principal para a interface do usuário. |
| **Linguagem** | **TypeScript** | Garante tipagem estática, tornando o código mais robusto e previsível. |
| **Roteamento** | **React Router DOM** | Gerenciamento de rotas e navegação da aplicação. |
| **Estilização** | **Tailwind CSS** | Framework de CSS para uma estilização rápida e responsiva. |
| **Autenticação** | **Firebase Auth** | Serviço de autenticação de usuários para cadastro e login. |
| **Formulários** | **React Hook Form** | Gerenciamento e validação de formulários de forma eficiente. |
| **Validação** | **Zod** | Biblioteca para validação de esquemas de dados. |
| **Notificações** | **React Hot Toast** | Para exibir notificações e feedbacks visuais simples. |

## 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e executar a aplicação em sua máquina.

**1. Pré-requisitos:**

- Certifique-se de ter o [Node.js](https://nodejs.org/en/) e o [npm](https://www.npmjs.com/) instalados.

**2. Clone o Repositório:**

```bash
git clone [https://github.com/seu-usuario/leagueboard-frontend.git](https://github.com/seu-usuario/leagueboard-frontend.git)
cd leagueboard-frontend
3. Instale as Dependências:

Bash

npm install
# ou
yarn install
4. Configuração do Firebase:

Crie um projeto no Firebase Console.

Ative o serviço de Authentication.

Obtenha suas credenciais de configuração (API Key, Auth Domain, etc.) e crie um arquivo .env na raiz do projeto com as seguintes variáveis:

REACT_APP_FIREBASE_API_KEY=sua-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=seu-auth-domain
# ...outras variáveis do Firebase
5. Inicie a Aplicação:

Bash

npm start
# ou
yarn start
