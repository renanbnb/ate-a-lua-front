# Até a Lua: front-end (design)

Protótipo navegável das telas do app mobile **Até a Lua** (controle de parcelas, assinaturas, pessoas e métodos de pagamento).
HTML + Tailwind + JavaScript puro, sem build. É a referência visual para a implementação.

## Como abrir

Abra `index.html` no navegador (de preferência com o DevTools em modo celular, ~390px de largura).
Se quiser servir por HTTP: `npx serve .` ou `python3 -m http.server`.

## Estrutura

```
index.html          Início (saldo do mês, atalhos, contadores)
parcelas.html       Parcelamentos (lista com filtros + bottom sheet "Novo parcelamento")
dashboard.html      Dashboard (visão geral com filtros; abre ao tocar no card de saldo)
assinaturas.html    Assinaturas (lista + bottom sheet de criar/editar)
metodos.html        Métodos de pagamento (lista + bottom sheet "Novo método")
pessoas.html        Pessoas e vínculos (lista + bottom sheet "Nova pessoa")
assets/
  tailwind.config.js  Design system: tokens (cores, tipografia, espaçamentos) + componentes
  app.js              Comportamento compartilhado: barra inferior, voltar, sheets, seletores, aviso
  app.css             Estilos base (fonte, fundo, safe-area)
docs/
  DESIGN.md           Design system "Obsidian Orbit": paleta, tipografia, componentes
  telas/*.png         Capturas originais do Stitch, para referência
```

## Design system

- Fonte: **Inter**. Ícones: **Material Symbols Outlined** (Google Fonts)
- Tema escuro único. Cores principais: fundo `#131316`, primária `#d0bcff`, positivo `#4ae176`, erro `#ffb4ab`
- Todos os tokens estão em `assets/tailwind.config.js`, com os nomes usados nas classes (`bg-surface-container`, `text-on-surface-variant`, `font-headline-sm`…)
- Detalhes de uso: `docs/DESIGN.md`

## Componentes

Todas as telas usam os mesmos componentes, definidos uma vez em `assets/tailwind.config.js`.
Para mudar o visual de um componente em todas as telas, edite só ali. Todas as telas seguem a mesma ordem:
**cabeçalho → resumo (quando tem) → botão principal → título da seção + contagem → lista → estado vazio → bottom sheet**.

| Classe | Uso |
|---|---|
| `page` | container de toda tela (largura, margens, safe area, espaço da barra inferior) |
| `page-header`, `page-title`, `page-subtitle` | cabeçalho: voltar + título + ações, e descrição abaixo |
| `section-header`, `section-title` | título de seção com contagem ou ação ao lado |
| `card`, `card-icon`, `card-title`, `card-subtitle`, `avatar`, `amount` | itens das listas |
| `stat-card`, `stat-label`, `stat-icon` | cards de resumo (totais do mês) |
| `badge` (+ `badge-primary` / `-success` / `-danger`), `tag`, `chip`, `dot` | selos, etiquetas, filtros |
| `btn` + `btn-primary` / `btn-secondary` / `btn-success` | botões de ação |
| `icon-btn` (redondo, cabeçalho), `icon-btn-sm` (+ `icon-btn-danger`) | botões só com ícone |
| `field`, `label`, `input`, `select`, `field-error`, `hint` (+ `hint-danger`) | formulários |
| `segmented` | abas, filtros e seletor de tipo (ativa = `aria-pressed="true"`) |
| `switch` + `switch-track` | interruptor liga/desliga |
| `sheet-backdrop`, `sheet`, `sheet-handle`, `sheet-header`, `sheet-title`, `sheet-actions` | bottom sheet (formulários) |
| `empty-state`, `empty-state-icon` | lista vazia |
| `progress`, `progress-bar` | barra de progresso |

Cores com significado: **verde** (`tertiary`) = entrada/recebimento, **vermelho** (`error`) = saída/despesa, **lilás** (`primary`) = ação e destaque.

`assets/app.js` cuida do que se repete, sem precisar de JS em cada tela:

```html
<button data-back>…</button>                        <!-- voltar -->
<button data-open-sheet="sheet-method">…</button>   <!-- abre o sheet com esse id -->
<button data-close-sheet>…</button>                 <!-- fecha o sheet em que está -->
<nav id="bottom-nav" data-active="metodos"></nav>   <!-- barra inferior com a aba ativa -->
<script> showToast('Salvo!') </script>              <!-- aviso rápido -->
```

## O que é conteúdo de exemplo

Todo texto com nome, valor, data ou contagem é **fixo no HTML** e deve vir da API. Por tela:

| Tela | Dados exibidos |
|---|---|
| Início | nome do usuário, mês selecionado, saldo previsto, variação %, total a receber / a pagar (+ quantidades), nº de parcelamentos, assinaturas e recebimentos ativos |
| Dashboard | totais a pagar / a receber / saldo previsto, nº de lançamentos, gastos por método (nome, %, valor), recebimentos por pessoa (nome, descrição, valor, %) |
| Parcelas | totais a pagar / a receber no mês; lista: descrição, tipo (formal = cartão/conta, informal = pessoa), despesa ou recebimento, método ou pessoa, valor da parcela, parcela atual / total, valor pago / total, próxima data, status |
| Assinaturas | totais de saídas e entradas fixas por mês; lista: nome, tipo (despesa/recebimento), valor, periodicidade, método, próxima data, dia do ciclo |
| Métodos | lista: nome, final do cartão, tipo (crédito / débito+PIX / dinheiro), descrição, vínculos (nº de assinaturas/parcelas), dia de vencimento |
| Pessoas | lista: nome, iniciais, relação (amigo/família/colega), descrição, parcelas/assinaturas vinculadas, valor a receber, dia de acerto, status |

## O que o JavaScript atual faz (e não faz)

Os scripts no fim de cada página são **só interação visual**: abrir/fechar sheets, alternar despesa/recebimento, ocultar valores (ícone de olho), remover chips de filtro, formatar o campo de valor, filtrar parcelas (todos/formais/informais).

**Cálculo de parcelas** (`parcelas.html`): dos 3 campos (valor total, quantidade, valor da parcela), os 2 últimos editados definem o 3º, que fica bloqueado com o selo "Calculado". Tocar no campo bloqueado libera ele. Vale repetir essa regra na validação do back-end.

Salvar, editar e excluir **não persistem nada**: são os pontos onde entram as chamadas à API.

Cada lista também tem um **estado vazio** já desenhado (`.empty-state`, com id `*-empty`), escondido com `hidden`. Quando a API devolver lista vazia, mostre ele e esconda a lista.

## Observações para produção

- O Tailwind está via CDN (`cdn.tailwindcss.com`), bom para protótipo. Em produção, gerar o CSS com o Tailwind CLI usando o mesmo `tailwind.config.js`.
- As telas foram feitas para ~390px de largura (conteúdo limitado a `max-w-md`) e já respeitam as safe areas do iOS (`env(safe-area-inset-*)`).
