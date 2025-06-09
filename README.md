# 🛍️ Frontend - Gerenciamento de Produtos

Este é o projeto de frontend para a aplicação de **Gerenciamento de Produtos**, desenvolvido como parte do processo seletivo para Desenvolvedor Full Stack na **eMutua Digital**.

Construído com **Next.js** e **React**, esta interface consome a **API RESTful** do backend para fornecer uma experiência de usuário reativa e moderna para as operações de **CRUD de produtos**.

---

## ✨ Funcionalidades

- **Listagem de Produtos**: Exibição clara e organizada de todos os produtos em uma tabela responsiva.
- **CRUD Interativo**: Criação, Atualização e Exclusão de produtos através de um painel lateral (_drawer_) interativo, utilizando Headless UI para máxima acessibilidade e customização.
- **Busca com Debounce**: Busca de produtos em tempo real que consome o endpoint do OpenSearch no backend, com lógica de "debouncing" para otimizar as chamadas à API.
- **Confirmação de Ações**: Modal de confirmação para ações destrutivas, como a exclusão de um produto.
- **Design Moderno**: Interface limpa, profissional e responsiva construída com Tailwind CSS.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 
- **Biblioteca UI**: React 19
- **Estilização**: Tailwind CSS
- **Componentes**: Headless UI
- **Ícones**: Heroicons
- **Linguagem**: JavaScript

---

## 🚀 Instalação e Execução

### Pré-requisitos

- **Node.js** (v18 ou superior)
- **npm**
- O backend (**emutua-backend**) deve estar em execução para que a API esteja disponível.

### 1. Clonar o Repositório

```bash
git clone <URL_DO_SEU_REPOSITORIO_FRONTEND>
cd emutua-frontend
```

## 2. Instalar as Dependências
```bash
npm install
```

## 3. Configurar as Variáveis de Ambiente
Crie um arquivo .env.local na raiz do projeto com o seguinte conteúdo:

```bash
NEXT_PUBLIC_API_URL=http://localhost/api
## Altere a URL conforme necessário para apontar para a sua API.
```
## 4. Rodar o Servidor de Desenvolvimento
```bash
npm run dev
```
Abra http://localhost:3000 no navegador para ver a aplicação em funcionamento.