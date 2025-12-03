# Dashboard Fintech

Dashboard financeiro responsivo desenvolvido com HTML, CSS (Tailwind) e JavaScript, utilizando Chart.js para visualização de dados financeiros.

## 📋 Sobre o Projeto

Dashboard interativo para visualização de dados financeiros, incluindo:

- Relação de receitas e despesas
- Carteira de ativos (LCI, LCA, CDI)
- Relatórios detalhados em modal
- Interface responsiva (mobile e desktop)

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura da aplicação
- **Tailwind CSS** - Framework CSS via CDN
- **Chart.js** - Biblioteca de gráficos
- **Lucide Icons** - Ícones modernos
- **JavaScript (Vanilla)** - Lógica da aplicação

## 📁 Estrutura do Projeto

```
muito-estilo-sem-sofrimento/
├── index.html          # Página principal
├── js/
│   └── script.js       # Lógica JavaScript
├── public/
│   └── images/        # Imagens e assets
└── README.md          # Documentação
```

## ✨ Funcionalidades

### Dashboard

- Visualização de receitas e despesas em gráfico de pizza
- Visualização de carteira de ativos em gráfico de pizza
- Interface responsiva com sidebar no desktop e menu inferior no mobile

### Interatividade

- Clique nos gráficos para abrir relatórios detalhados
- Modal com informações completas sobre receitas/despesas e ativos
- Fechamento do modal via botão X, clique fora ou tecla ESC

### Design

- Gradiente de fundo azul/índigo
- Cards com sombras e bordas coloridas
- Animações e transições suaves
- Ícones interativos com hover

## 🎨 Características Visuais

- **Cores principais:**

  - Índigo para navegação e elementos principais
  - Verde para receitas
  - Vermelho para despesas
  - Roxo para ativos

- **Layout:**
  - Sidebar fixa no desktop (lateral esquerda)
  - Menu inferior fixo no mobile
  - Cards centralizados e responsivos

## 📱 Responsividade

- **Mobile:** Menu inferior, cards empilhados verticalmente
- **Desktop:** Sidebar lateral, cards lado a lado

## 🔧 Como Usar

1. Abra o arquivo `index.html` em um navegador moderno
2. Visualize os gráficos de receitas/despesas e carteira de ativos
3. Clique em qualquer gráfico para ver o relatório detalhado
4. Navegue pelos ícones da sidebar (desktop) ou menu inferior (mobile)

## 📊 Dados Exibidos

### Receitas e Despesas

- Receitas: R$ 10.000,00 (66.67%)
- Despesas: R$ 5.000,00 (33.33%)
- Saldo: R$ 5.000,00

### Carteira de Ativos

- LCI: R$ 100,00 (22.22%)
- LCA: R$ 150,00 (33.33%)
- CDI: R$ 200,00 (44.44%)
- Total: R$ 450,00

## 🛠️ Desenvolvimento

Projeto desenvolvido utilizando apenas CDNs, sem necessidade de build ou instalação de dependências.

### CDNs Utilizados

- Tailwind CSS: `https://cdn.tailwindcss.com`
- Lucide Icons: `https://unpkg.com/lucide@latest`
- Chart.js: `https://cdn.jsdelivr.net/npm/chart.js@latest`

## 📝 Licença

Este projeto é parte de um trabalho acadêmico.
