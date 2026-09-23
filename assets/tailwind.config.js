// Design system do Até a Lua: tokens (cores, tipografia, espaçamentos) + componentes.
// Mudou aqui, muda em todas as telas. Referência visual: docs/DESIGN.md.

// Atalho: '@apply' de classes Tailwind dentro de um componente
const apply = (classes, extra = {}) => ({ ['@apply ' + classes]: {}, ...extra });

const components = {
  // ── Layout ─────────────────────────────────────────────────────────────
  '.page': apply('max-w-md mx-auto px-margin pt-[calc(env(safe-area-inset-top)+1rem)] pb-28 flex flex-col gap-space-lg'),
  '.page-header': apply('flex flex-col gap-space-xs'),
  '.page-title': apply('font-headline-md text-headline-md text-on-surface tracking-tight'),
  '.page-subtitle': apply('font-body-sm text-body-sm text-on-surface-variant'),
  '.section-header': apply('flex items-center justify-between gap-space-sm'),
  '.section-title': apply('font-headline-sm text-headline-sm text-on-surface'),

  // ── Cards ──────────────────────────────────────────────────────────────
  '.card': apply('rounded-xl bg-surface-container-low p-space-md'),
  '.card-icon': apply('w-11 h-11 shrink-0 rounded-xl bg-surface-container-high flex items-center justify-center text-primary'),
  '.card-icon .material-symbols-outlined': { fontSize: '22px' },
  '.card-title': apply('font-label-lg text-label-lg text-on-surface font-semibold truncate'),
  '.card-subtitle': apply('font-body-sm text-body-sm text-on-surface-variant'),
  '.avatar': apply('w-11 h-11 shrink-0 rounded-full flex items-center justify-center font-label-lg text-label-lg font-semibold'),
  '.amount': apply('font-headline-sm text-headline-sm font-semibold tracking-tight whitespace-nowrap tabular-nums'),

  // Cards de resumo (totais do mês)
  '.stat-card': apply('rounded-xl bg-surface-container-low p-space-md flex flex-col gap-2 relative overflow-hidden'),
  '.stat-label': apply('font-label-sm text-label-sm text-on-surface-variant font-medium'),
  '.stat-icon': apply('w-7 h-7 shrink-0 rounded-lg flex items-center justify-center'),
  '.stat-icon .material-symbols-outlined': { fontSize: '16px' },

  '.progress': apply('w-full h-2 rounded-full bg-surface-container-highest overflow-hidden'),
  '.progress-bar': apply('h-full rounded-full'),

  // ── Selos ──────────────────────────────────────────────────────────────
  // .badge = pílula (status, contagem) · .tag = etiqueta retangular (categoria, vínculo)
  '.badge': apply('inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-label-sm text-label-sm font-medium whitespace-nowrap bg-surface-container-highest text-on-surface-variant'),
  '.tag': apply('inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-label-sm font-medium whitespace-nowrap bg-surface-container-highest text-on-surface-variant'),
  '.badge-primary': apply('bg-secondary-container/40 text-primary'),
  '.badge-success': apply('bg-tertiary/15 text-tertiary'),
  '.badge-danger': apply('bg-error-container/30 text-error'),
  ':is(.badge, .tag) .material-symbols-outlined': { fontSize: '14px' },
  // Filtro ativo removível (mês, método, pessoa)
  '.chip': apply('shrink-0 inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-surface-container text-on-surface font-label-md text-label-md font-medium whitespace-nowrap'),
  '.chip .material-symbols-outlined': { fontSize: '16px' },
  '.dot': apply('w-1.5 h-1.5 shrink-0 rounded-full bg-current'),

  // ── Botões ─────────────────────────────────────────────────────────────
  '.btn': apply('h-12 px-space-md rounded-xl inline-flex items-center justify-center gap-2 font-label-lg text-label-lg font-semibold transition-all active:scale-[0.98]'),
  '.btn .material-symbols-outlined': { fontSize: '20px' },
  '.btn-primary': apply('bg-primary-container text-on-primary hover:bg-primary shadow-[0_8px_24px_-4px_rgba(160,120,255,0.35)]'),
  '.btn-secondary': apply('bg-surface-container-highest text-on-surface hover:bg-surface-bright'),
  '.btn-success': apply('bg-tertiary-container text-on-tertiary-container hover:bg-tertiary shadow-[0_8px_24px_-4px_rgba(74,225,118,0.35)]'),
  // Botão redondo do cabeçalho (voltar, ajuda, fechar)
  '.icon-btn': apply('w-10 h-10 shrink-0 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-all active:scale-95'),
  '.icon-btn .material-symbols-outlined': { fontSize: '20px' },
  // Botão quadrado dos cards (editar, excluir)
  '.icon-btn-sm': apply('w-9 h-9 shrink-0 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors active:scale-95'),
  '.icon-btn-sm .material-symbols-outlined': { fontSize: '18px' },
  '.icon-btn-danger': apply('hover:text-error hover:bg-error-container/30'),

  // ── Formulários ────────────────────────────────────────────────────────
  '.field': apply('flex flex-col gap-1.5'),
  '.label': apply('font-label-md text-label-md text-on-surface-variant font-medium'),
  '.input': apply('w-full h-12 px-space-md rounded-xl bg-surface-container text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary'),
  'select.input': apply('appearance-none pr-10'),
  // <div class="select"><select class="input">…</select></div> desenha a setinha
  '.select': apply('relative'),
  '.select::after': apply('absolute right-3 top-3.5 pointer-events-none text-on-surface-variant', { content: '"expand_more"', fontFamily: "'Material Symbols Outlined'", fontSize: '20px', lineHeight: '1' }),
  '.field-error': apply('font-label-sm text-label-sm text-error'),
  '.hint': apply('flex items-start gap-2 p-2.5 rounded-lg bg-surface-container text-on-surface-variant font-body-sm text-body-sm'),
  '.hint .material-symbols-outlined': apply('shrink-0 text-primary', { fontSize: '18px' }),
  '.hint-danger': apply('bg-error/15 text-error'),
  '.hint-danger .material-symbols-outlined': apply('text-error'),

  // Seletor de opções (abas, filtros, tipo). Opção ativa: aria-pressed="true"
  '.segmented': apply('grid grid-flow-col auto-cols-fr gap-1 p-1 rounded-xl bg-surface-container-lowest'),
  '.segmented > button': apply('min-h-9 px-2 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface flex items-center justify-center gap-1.5 transition-all'),
  '.segmented > button[aria-pressed="true"]': apply('bg-surface-container-high text-primary font-semibold'),
  '.segmented .material-symbols-outlined': { fontSize: '18px' },

  // Interruptor liga/desliga: <label class="switch"><input type="checkbox" class="peer sr-only"><span class="switch-track"></span></label>
  '.switch': apply('relative inline-flex shrink-0 cursor-pointer'),
  '.switch-track': apply("w-11 h-6 rounded-full bg-surface-container-highest transition-colors peer-checked:bg-tertiary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:w-5 after:h-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5"),

  // ── Bottom sheet (modal que sobe de baixo) ─────────────────────────────
  '.sheet-backdrop': apply('fixed inset-0 z-[60] flex items-end justify-center bg-black/70 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300'),
  '.sheet-backdrop.is-open': apply('opacity-100 pointer-events-auto'),
  '.sheet': apply('w-full max-w-md max-h-[90vh] overflow-y-auto bg-surface-container-low rounded-t-[28px] px-space-lg pt-space-md pb-[calc(env(safe-area-inset-bottom)+1.5rem)] shadow-2xl flex flex-col gap-space-md translate-y-full transition-transform duration-300'),
  '.sheet-backdrop.is-open .sheet': apply('translate-y-0'),
  '.sheet-handle': apply('w-12 h-1.5 shrink-0 rounded-full bg-on-surface/20 mx-auto'),
  '.sheet-header': apply('flex items-start justify-between gap-space-sm'),
  '.sheet-title': apply('font-headline-sm text-headline-sm text-on-surface'),
  '.sheet-actions': apply('grid grid-cols-2 gap-space-sm pt-space-xs'),

  // ── Estado vazio ───────────────────────────────────────────────────────
  '.empty-state': apply('flex flex-col items-center gap-1 text-center p-space-xl rounded-xl bg-surface-container-low'),
  '.empty-state-icon': apply('w-16 h-16 mb-space-sm rounded-full bg-surface-container flex items-center justify-center text-primary'),
  '.empty-state-icon .material-symbols-outlined': { fontSize: '32px' },

  // ── Aviso rápido (criado pelo showToast do app.js) ─────────────────────
  '.toast': apply('fixed left-1/2 -translate-x-1/2 bottom-[calc(env(safe-area-inset-bottom)+5.5rem)] z-[70] px-4 py-2.5 rounded-xl bg-surface-container-highest text-on-surface shadow-2xl flex items-center gap-2 font-body-sm text-body-sm font-medium whitespace-nowrap transition-opacity duration-300'),
  '.toast .material-symbols-outlined': apply('text-tertiary', { fontSize: '18px' }),
};

const typography = (size, lineHeight, letterSpacing, fontWeight) => [size, { lineHeight, letterSpacing, fontWeight }];

tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background': '#131316',
        'surface': '#131316',
        'surface-dim': '#131316',
        'surface-bright': '#39393c',
        'surface-container-lowest': '#0e0e11',
        'surface-container-low': '#1b1b1e',
        'surface-container': '#1f1f22',
        'surface-container-high': '#2a2a2d',
        'surface-container-highest': '#353438',
        'surface-variant': '#353438',
        'surface-tint': '#d0bcff',
        'on-background': '#e5e1e6',
        'on-surface': '#e5e1e6',
        'on-surface-variant': '#cbc3d7',
        'inverse-surface': '#e5e1e6',
        'inverse-on-surface': '#303033',
        'outline': '#958ea0',
        'outline-variant': '#494454',

        // Primária (lilás/violeta)
        'primary': '#d0bcff',
        'on-primary': '#3c0091',
        'primary-container': '#a078ff',
        'on-primary-container': '#340080',
        'inverse-primary': '#6d3bd7',
        'primary-fixed': '#e9ddff',
        'primary-fixed-dim': '#d0bcff',
        'on-primary-fixed': '#23005c',
        'on-primary-fixed-variant': '#5516be',

        'secondary': '#c9bfff',
        'on-secondary': '#30236f',
        'secondary-container': '#473b87',
        'on-secondary-container': '#b7abff',
        'secondary-fixed': '#e5deff',
        'secondary-fixed-dim': '#c9bfff',
        'on-secondary-fixed': '#1a075a',
        'on-secondary-fixed-variant': '#473b87',

        // Terciária = verde (entradas, positivo)
        'tertiary': '#4ae176',
        'on-tertiary': '#003915',
        'tertiary-container': '#00a74b',
        'on-tertiary-container': '#003111',
        'tertiary-fixed': '#6bff8f',
        'tertiary-fixed-dim': '#4ae176',
        'on-tertiary-fixed': '#002109',
        'on-tertiary-fixed-variant': '#005321',

        // Erro = vermelho (saídas, negativo)
        'error': '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      spacing: {
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2rem',
        'gutter': '1rem',
        'gutter-desktop': '1.5rem',
        'margin': '1rem',
        'margin-tablet': '2rem',
        'margin-desktop': '3rem',
      },
      fontFamily: Object.fromEntries(
        ['display-lg', 'display-lg-mobile', 'headline-lg', 'headline-md', 'headline-sm', 'body-lg', 'body-md', 'body-sm', 'label-lg', 'label-md', 'label-sm']
          .map((name) => [name, ['Inter']])
      ),
      fontSize: {
        'display-lg': typography('40px', '48px', '-0.03em', '600'),
        'display-lg-mobile': typography('32px', '38px', '-0.025em', '600'),
        'headline-lg': typography('28px', '36px', '-0.02em', '600'),
        'headline-md': typography('22px', '30px', '-0.015em', '600'),
        'headline-sm': typography('18px', '26px', '-0.01em', '600'),
        'body-lg': typography('16px', '24px', '-0.005em', '400'),
        'body-md': typography('14px', '20px', '0em', '400'),
        'body-sm': typography('12px', '18px', '0.01em', '400'),
        'label-lg': typography('14px', '20px', '0em', '500'),
        'label-md': typography('12px', '16px', '0.02em', '500'),
        'label-sm': typography('10px', '14px', '0.04em', '600'),
      },
    },
  },
  plugins: [({ addComponents }) => addComponents(components)],
};
