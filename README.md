# Buger Eats Web - Automação de testes e2e com Cypress

Este repositório contém o projeto de automação de testes e2e desenvolvido em **Cypress** para a plataforma **Buger Eats** (disponível em [buger-eats-qa.vercel.app](https://buger-eats-qa.vercel.app)). A aplicação permite o cadastro de entregadores parceiros, validando diversos métodos de entrega, preenchimento de dados e anexação de documentos.

---

## Tecnologias utilizadas

- **Cypress** (`^13.7.1`) — Framework de testes E2E para web.
- **Node.js** — Ambiente de execução JavaScript.
- **dotenv** (`^17.4.2`) — Carrega variáveis de ambiente de um arquivo `.env` para o `process.env`.
- **faker-br** (`^0.4.1`) — Geração de dados randômicos brasileiros válidos (CPF, CEP, nomes, etc.).
- **cypress-tesults-reporter** (`^1.4.1`) — Integração e reporte de resultados de teste no painel do Tesults.

---

## Estrutura do projeto

O projeto adota o padrão **Page Object Model** combinado com a separação de seletores em arquivos JSON para melhor manutenção e reutilização do código:

```
burger-eats-web/
├── cypress/
│   ├── e2e/
│   │   └── desktop/
│   │       ├── register.cy.js        # Fluxos principais de cadastro 
│   │       └── warning.cy.js         # Validações de campos obrigatórios e alertas de erro
│   ├── fixtures/
│   │   └── hamster.jpg               # Imagem fictícia para upload de documento de CNH nos testes
│   └── support/
│       ├── components/
│       │   └── modal.js              # Helpers para validação de modais e mensagens de alerta
│       ├── elements/
│       │   ├── elements.js           # Agrupador central de seletores
│       │   ├── home.json             # Seletores CSS da página inicial
│       │   ├── inputs.json           # Seletores CSS dos campos de formulário
│       │   └── modal.json            # Seletores e textos de validação esperados nos modais
│       ├── pages/
│       │   ├── home.js               # Ações e navegação da página inicial (Page Object)
│       │   └── register.js           # Fluxos e ações do formulário de registro (Page Object)
│       ├── commands.js               # Comandos customizados Cypress (geradores faker de CPF, Nome, CEP, etc.)
│       └── e2e.js                    # Configurações de importação global do Cypress
├── cypress.config.js                 # Configuração geral do Cypress (BaseURL, Viewports e Ambientes)
├── package.json                      # Dependências, dependências de desenvolvimento e scripts de execução
├── runner.js                         # Executor programático do Cypress integrado com o Tesults Reporter
└── README.md                         # Documentação do projeto (este arquivo)
```

---

## Configuração e instalação

### Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 14 ou superior recomendada)
- Gerenciador de pacotes **npm** (já vem instalado com o Node)

### Passo a passo
1. Clone este repositório para a sua máquina local:
   ```bash
   git clone https://github.com/reenaataacruuz/burger-eats-web.git
   cd burger-eats-web
   ```

2. Instale as dependências necessárias do projeto:
   ```bash
   npm install
   ```

3. Remova o ".exemplo" do arquivo ".env.exemplo" na raiz do projeto e defina o ambiente de viewport padrão:
   ```env
   AMBIENT="web" ou "mobile"
   ```

4. Adicione a API-KEY do seu projeto do tesults no arquivo .env:
   ```env
   TESULTS_TOKEN="token_do_tesults"
   ```
---

## Como executar os testes

O projeto possui comandos configurados para diferentes cenários de execução (Desktop/Web e Mobile) definidos através da variável de ambiente `AMBIENT` que modifica dinamicamente as dimensões da tela (Viewport):

### 1. Interface gráfica do cypress 
Para abrir a interface interativa do Cypress e escolher quais testes rodar em tempo real:
```bash
npm run start
```

### 2. Executar em modo headless (Web desktop)
Para rodar todos os testes em segundo plano no navegador Chrome com resolução Desktop (1366x1080):
```bash
npm run web
```

### 3. Executar em modo headless (Web mobile)
Para rodar todos os testes em segundo plano simulando a tela de um smartphone (360x760):
```bash
npm run mobile
```

### 4. Execução integrada com o tesults
Para rodar os testes programaticamente através do script `runner.js` e publicar os resultados no painel de controle do Tesults:
```bash
node runner.js
```

---

## Boas práticas e padrões aplicados

- **Page Object Model**: Organiza as interações com as páginas em arquivos dedicados sob `cypress/support/pages/`, separando o comportamento dos testes da lógica de cliques e preenchimentos.
- **Externalização de seletores (JSON)**: Os IDs e seletores CSS estão isolados na pasta `cypress/support/elements/` em formato JSON. Se um elemento mudar na interface da aplicação, a manutenção é feita em um único ponto.
- **Custom commands**: Comandos Cypress criados de forma personalizada (`cy.fakerCPF()`, `cy.fakerZipCode()`, etc.) para agrupar e simplificar etapas recorrentes do teste.
- **Massa de dados dinâmica**: Utilização do `faker-br` para preencher informações como CPF, CEP e nomes reais dinamicamente, garantindo testes robustos e independentes de massa pré-existente.
- **Testes responsivos**: Ajuste automático do viewport através da configuração de ambiente no `cypress.config.js`, permitindo testar facilmente o layout desktop ou mobile.