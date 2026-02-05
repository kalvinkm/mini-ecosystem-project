# 🛒 Mini Ecosystem Project

Mini plataforma experimental para construção de lojas e páginas dinâmicas utilizando React, TypeScript e configuração via JSON.

Este projeto implementa uma **engine de renderização baseada em blocos**, inspirada em plataformas como VTEX IO, permitindo estruturar layouts sem alterar código.

---

## 🚀 Objetivo

Criar um ecossistema modular onde a interface da loja é definida por arquivos de configuração, promovendo:

- Separação entre layout e código
- Escalabilidade
- Reuso de componentes
- Evolução incremental da plataforma

---

## 🧩 Arquitetura

O projeto segue uma abordagem **config-driven**:


## pages.json → parser → engine → renderer → UI


### Componentes principais:

- **Config (JSON)**: Define a estrutura das páginas
- **Parser**: Valida e normaliza os dados
- **Registry**: Mapeia tipos para componentes
- **Renderer**: Renderiza dinamicamente os blocos

---

## 📦 Blocos disponíveis

Atualmente suportados:

- Header
- Banner
- Footer

Novos blocos podem ser adicionados via registry.

---

## ⚙️ Tecnologias

- React
- TypeScript
- Vite
- ESLint
- Prettier

---

## ▶️ Como executar

### Pré-requisitos

- Node.js >= 18
- npm

### Instalação

```bash
npm install
````

### Rodar em desenvolvimento

````
npm run dev
````

### Acesse:

````
http://localhost:5173
````

## 🛠️ Estrutura do projeto

src/
  components/   # Blocos visuais
  engine/       # Núcleo da plataforma
  config/       # Configurações JSON


## 📈 Versionamento

O projeto segue uma versão simplificada de Semantic Versioning.

Detalhes em:

CHANGELOG.md

## 🌱 Roadmap (Próximos passos)

- Suporte a múltiplas páginas

- Sistema de temas

- Validação com schema

- Editor visual

- CMS integrado

## 👨‍💻 Autor

Kalvin Melo

Projeto desenvolvido para estudo avançado de arquitetura frontend e engenharia de software.


