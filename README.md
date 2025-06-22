# Projeto Finder App (News Explorer)

Este é o projeto final do curso de Desenvolvimento Web, focado na criação de uma aplicação front-end completa e reativa. A aplicação, chamada "Finder App", permite que os utilizadores pesquisem notícias de todo o mundo em tempo real, utilizando a API de notícias [NewsAPI](https://newsapi.org/).

---

### **[Clique aqui para ver o projeto em funcionamento](https://news-explorer-frontend-alpha.vercel.app)**

---

## Funcionalidades Principais

-   **Pesquisa Dinâmica:** Pesquise notícias por qualquer palavra-chave.
-   **Resultados em Tempo Real:** A aplicação conecta-se à NewsAPI para obter as notícias mais recentes relacionadas com a sua pesquisa.
-   **Feedback ao Utilizador:** Indicadores visuais de "A carregar..." durante a pesquisa e mensagens claras para "Nenhum resultado encontrado" ou em caso de erro na API.
-   **Paginação Simples:** Os resultados são apresentados em grupos de 3, com um botão "Mostrar mais" para carregar artigos adicionais, melhorando a performance e a experiência de utilização.
-   **Design Responsivo:** A interface adapta-se a diferentes tamanhos de ecrã, desde telemóveis a desktops.
-   **Links Externos:** Cada card de notícia contém um link que direciona o utilizador para a notícia completa no seu site de origem, abrindo numa nova aba.

## Tecnologias Utilizadas

-   **React:** A biblioteca principal para a construção da interface de utilizador reativa e baseada em componentes.
-   **HTML5 & CSS3:** Utilizados para a estrutura semântica e estilização moderna, seguindo a metodologia BEM.
-   **JavaScript (ES6+):** Lógica da aplicação, incluindo chamadas assíncronas com a Fetch API.
-   **NewsAPI:** API de terceiros utilizada como fonte de dados para as notícias.
-   **Git & GitHub:** Controlo de versão e alojamento do código.
-   **Vercel/Netlify:** Plataforma utilizada para a implantação (deploy) da aplicação.

## Estrutura do Projeto

O projeto foi desenvolvido com uma arquitetura de componentes bem definida para garantir a reutilização de código e a manutenibilidade:


/src
|-- /components     # Componentes reutilizáveis (Header, Footer, SearchForm, etc.)
|-- /constants      # Constantes do projeto (ex: configurações da API)
|-- /fonts          # Ficheiros de fontes locais
|-- /utils          # Funções utilitárias (ex: lógica da API)
|-- App.js          # Componente principal que orquestra a aplicação
|-- index.js        # Ponto de entrada da aplicação


## Como Executar o Projeto Localmente

1.  Clone o repositório: `git clone https://github.com/ellensilvaaat/news-explorer-frontend.git`
2.  Navegue até à pasta do projeto: `cd news-explorer-frontend`
3.  Instale as dependências: `npm install`
4.  Inicie o servidor de desenvolvimento: `npm start`
5.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador.
