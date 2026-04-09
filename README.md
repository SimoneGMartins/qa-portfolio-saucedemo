# qa-portfolio-saucedemo
Projeto de testes de software utilizando SauceDemo, com testes manuais, automação E2E com Cypress, testes de API e integração contínua.
## 🔍 Sobre o projeto

Este projeto foi desenvolvido para praticar e demonstrar habilidades em QA (Quality Assurance), utilizando a aplicação SauceDemo como base.

---

## 🧪 Testes realizados

### ✔️ Testes Manuais
- Criação e execução de casos de teste
- Cenários positivos e negativos
- Validação de funcionalidades como login, produtos e carrinho

### 🤖 Testes Automatizados
- Automação de testes end-to-end utilizando Cypress
- Validação de fluxos principais como login e carrinho
---
## 🎭 Testes Automatizados com Playwright

Implementação de testes automatizados utilizando Playwright, explorando uma abordagem moderna para testes end-to-end.

### 🔍 Cenário testado
- Login com sucesso na aplicação SauceDemo

### ⚙️ Tecnologias utilizadas
- Playwright
- JavaScript

### ▶️ Como executar

```bash
npx playwright test
## 🔌 Testes de API

Testes realizados utilizando Postman com validações de:

- Status code (200, 201)
- Estrutura da resposta
- Validação de dados retornados (id)

Collection disponível na pasta `postman/`

## ⚙️ CI/CD

Pipeline configurado com GitHub Actions para execução automática dos testes Cypress a cada push na branch main.

### 📸 Evidências
- Capturas de tela dos testes executados
- Comprovação dos resultados obtidos

## 📁 Estrutura do projeto

- `test-cases/` → Casos de teste manuais  
- `evidencias/` → Prints das execuções  
- `cypress/` → Testes automatizados
- `postman/` →  Testes de API

---
## 🐞 Bugs encontrados

- Imagens incorretas ao utilizar o usuário problem_user

## 🚀 Como executar os testes automatizados

```bash
npm install
npx cypress open
