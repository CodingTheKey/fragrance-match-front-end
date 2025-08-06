# FragranceMatch

## 📝 Visão Geral do Projeto

FragranceMatch é uma aplicação web moderna desenvolvida em React para ajudar usuários a descobrir e explorar fragrâncias com base em suas preferências pessoais. A aplicação oferece uma interface intuitiva e elegante para seleção de fragrâncias e recomendações personalizadas baseadas em algoritmos de similaridade.

## 🛠️ Stack Tecnológico

- **Frontend**: React 19.1.0 com TypeScript
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **UI Components**: shadcn/ui com Radix UI primitives
- **Linting**: ESLint 9.30.1
- **Type Safety**: TypeScript ~5.8.3
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 🎨 Funcionalidades Principais

### Interface do Usuário
- **Design Responsivo**: Interface adaptável para desktop e mobile
- **Gradientes Modernos**: Design com gradientes roxo e rosa
- **Animações Suaves**: Transições e hover effects para melhor UX
- **Modos de Visualização**: Alterna entre visualização em grade e lista

### Sistema de Seleção
- **Seleção Múltipla**: Usuários podem selecionar até 3 fragrâncias
- **Contador Visual**: Indicadores visuais mostrando o progresso da seleção
- **Validação**: Prevenção de seleção além do limite estabelecido

### Filtragem Avançada
- **Busca por Texto**: Filtro por nome de fragrância ou marca
- **Filtro por Gênero**: Opções para Masculino, Feminino, Unissex ou Todos
- **Filtro por Acordes**: Seleção baseada em acordes aromáticos
- **Filtro por Preço**: Range de preços ajustável ($0-$200)

### Sistema de Recomendações
- **Algoritmo de Similaridade**: Baseado nas fragrâncias selecionadas
- **Recomendações Personalizadas**: Sugere produtos similares
- **Links de Compra**: Integração com URLs de compra

## 🏗️ Arquitetura do Projeto

```
src/
├── @types/
│   └── fragrance.ts          # Definições de tipos TypeScript
├── components/
│   └── ui/                   # Componentes UI reutilizáveis (shadcn/ui)
│       ├── badge.tsx         # Componente de badge
│       ├── button.tsx        # Componente de botão
│       ├── card.tsx          # Componente de cartão
│       ├── input.tsx         # Componente de input
│       ├── scroll-area.tsx   # Componente de área de scroll
│       ├── select.tsx        # Componente de seleção
│       ├── separator.tsx     # Componente de separador
│       ├── slider.tsx        # Componente de slider
│       └── toggle.tsx        # Componente de toggle
├── lib/
│   └── utils.ts              # Utilitários (cn function)
├── mock/
│   └── fragance.ts           # Dados mockados de fragrâncias
├── App.tsx                   # Componente principal da aplicação
├── main.tsx                  # Ponto de entrada da aplicação
├── index.css                 # Estilos globais e variáveis CSS
└── vite-env.d.ts            # Tipos do Vite
```

## 🎯 Características da Interface

### Header Aprimorado
- Logo com gradiente roxo-rosa e ícone Sparkles
- Sistema de progresso visual (3 indicadores circulares)
- Contador de seleções com animações
- Toggle para alternar entre visualização grade/lista
- Header sticky com backdrop blur

### Área de Filtros Avançada
- Card com design glassmorphism (backdrop blur)
- Layout responsivo em grid (1-2 colunas)
- Filtros em tempo real:
  - Busca por texto (nome/marca)
  - Filtro por gênero (Masculino/Feminino/Unissex)
  - Filtro por acordes aromáticos
  - Slider de faixa de preço ($0-$200)
- Sistema de badges para filtros ativos
- Botão "Limpar Filtros" para reset rápido

### Barra de Seleções
- Aparece dinamicamente quando há seleções
- Design em gradiente com mini-cards das fragrâncias
- Indicador "Seleção Completa" quando atinge 3 itens
- Botões de remoção individual

### Área Principal de Produtos
- Duas visualizações: Grid e Lista
- Cards com hover effects e animações
- Indicadores visuais de seleção
- Estados de disable quando limite atingido
- Fallback de imagens com placeholders
- Badges coloridos por gênero
- Shine effect nas imagens durante hover

### Sidebar de Recomendações
- Design sticky com posicionamento fixo
- Sistema de ranking (#1, #2, etc)
- Cards com gradientes e hover effects
- Botões de compra integrados
- Estado vazio com animações pulsantes

## 🔧 Configuração de Desenvolvimento

### Scripts Disponíveis
```bash
yarn dev        # Servidor de desenvolvimento (Vite)
yarn build      # Build de produção (TypeScript + Vite)
yarn lint       # Linting do código (ESLint)
yarn preview    # Preview do build local
```

### Dependências Principais
- **React 19.1.0** + **React DOM 19.1.0**: Framework principal
- **Radix UI**: Primitives para componentes acessíveis
- **Lucide React**: Biblioteca de ícones
- **Tailwind CSS 4.1.11**: Framework CSS utility-first
- **Class Variance Authority**: Para variantes de componentes
- **clsx + tailwind-merge**: Utilitários para classes condicionais

### Dependências de Desenvolvimento
- **Vite 7.0.4**: Build tool e dev server
- **TypeScript 5.8.3**: Type safety
- **ESLint 9.30.1**: Linting e qualidade de código
- **Tailwind CSS PostCSS**: Processamento de CSS
- **@types/***: Definições de tipos para TypeScript

## 💡 Funcionalidades Avançadas

### Sistema de Recomendações
- **Algoritmo de Similaridade**: Baseado nos IDs de produtos similares
- **Ranking Inteligente**: Conta ocorrências e ordena por relevância
- **Limite de Recomendações**: Máximo de 6 produtos sugeridos
- **Exclusão de Selecionados**: Remove produtos já selecionados das sugestões

### Estados da Aplicação
- **Estados Visuais Dinâmicos**: Hover, seleção, desabilitado
- **Tratamento de Erros**: Fallback de imagens com placeholders personalizados
- **Validação de Limites**: Máximo de 3 seleções com feedback visual
- **Loading States**: Animações durante transições

### UX/UI Enhancements
- **Interface Traduzida**: Completamente em português brasileiro
- **Design System Consistente**: Gradientes roxo-rosa em toda aplicação
- **Micro-interações**: Animações de escala, pulse, shine effects
- **Responsividade Total**: Breakpoints para mobile, tablet e desktop
- **Glassmorphism**: Efeitos de backdrop-blur em cards e header

## 🎨 Design System

### Paleta de Cores
- **Gradiente Principal**: `from-purple-600 to-pink-600`
- **Gradiente Secundário**: `from-purple-500 to-pink-500`  
- **Background**: `from-purple-50 via-white to-pink-50`
- **Gênero Masculino**: Azul (`border-blue-200 text-blue-700 bg-blue-50`)
- **Gênero Feminino**: Rosa (`border-pink-200 text-pink-700 bg-pink-50`)
- **Gênero Unissex**: Roxo (`border-purple-200 text-purple-700 bg-purple-50`)
- **Estados**: Escala de cinzas do Tailwind CSS

### Tipografia
- **Font Family**: Sistema padrão (font-sans do Tailwind)
- **Títulos**: font-bold com gradiente text-transparent
- **Subtítulos**: font-semibold 
- **Corpo**: font-medium para labels, normal para texto
- **Tamanhos**: text-xs a text-3xl com hierarquia clara

### Componentes UI
- **shadcn/ui**: Sistema baseado em Radix UI primitives
- **Variantes**: Configuradas com class-variance-authority
- **Tokens CSS**: Variáveis personalizadas no index.css
- **Estados**: hover, focus, disabled, selected com transições
- **Shadows**: Múltiplos níveis (shadow-sm a shadow-xl)

## 🚀 Performance & Otimizações

### Otimizações de Renderização
- **useMemo**: Caching de filtros e cálculos de similares
- **Componentes Funcionais**: Hooks otimizados para re-renders
- **Bundle Splitting**: Build otimizado com Vite e Tree Shaking
- **Lazy Loading**: Imagens com fallbacks inteligentes

### Gestão de Estado
- **Estado Local**: useState para seleções e filtros
- **Computed Values**: useMemo para dados derivados (acordes únicos, filtrados)
- **Immutable Updates**: Spread operators para atualizações de estado
- **Conditional Rendering**: Renderização condicional para melhor performance

## 📱 Responsividade & Acessibilidade

### Breakpoints Responsivos
- **Mobile**: `sm:` (640px+) - Layout de 1 coluna
- **Tablet**: `lg:` (1024px+) - Layout de 2 colunas nos filtros
- **Desktop**: `xl:` (1280px+) - Layout de 4 colunas na grid principal
- **Grids Adaptativos**: 1-4 colunas conforme viewport

### Acessibilidade (a11y)
- **Radix UI Primitives**: Componentes acessíveis por padrão
- **Keyboard Navigation**: Navegação completa por teclado
- **Screen Reader**: Labels e alt texts apropriados
- **Focus Management**: Estados de foco visíveis e lógicos
- **ARIA**: Atributos adequados nos componentes interativos

## 🔧 Configuração de Ambiente

### Vite Configuration
- **Path Aliases**: `@/` para `./src/`
- **PostCSS**: Integração com Tailwind CSS
- **TypeScript**: Compilação otimizada
- **React Plugin**: Hot Module Replacement (HMR)

### TypeScript Setup
- **Strict Mode**: Configuração rigorosa de tipos
- **Path Mapping**: Aliases configurados no tsconfig
- **Type Definitions**: Interfaces completas para Fragrance
- **Module Resolution**: ES modules com Vite

Este projeto demonstra uma aplicação React moderna e robusta, utilizando as melhores práticas de desenvolvimento, design system consistente e foco na experiência do usuário e performance.