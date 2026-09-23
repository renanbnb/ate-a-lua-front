// Comportamentos compartilhados por todas as telas. Carregar no fim do <body>.
//
//   <nav id="bottom-nav" data-active="inicio"></nav>  barra inferior (aba ativa em data-active)
//   <button data-back>                                voltar (ou Início, se abriu direto)
//   <button data-open-sheet="id-do-sheet">            abre um bottom sheet
//   <button data-close-sheet>                         fecha o sheet em que está
//   <div class="segmented"><button aria-pressed>      marca a opção clicada
//   showToast('Mensagem', 'ícone')                    aviso rápido no rodapé

// ── Barra inferior ──────────────────────────────────────────────────────
(function renderBottomNav() {
  const nav = document.getElementById('bottom-nav');
  if (!nav) return;
  const items = [
    // [id, link, ícone Material Symbols, rótulo]
    ['inicio', 'index.html', 'home', 'Início'],
    ['parcelas', 'parcelas.html', 'pie_chart', 'Parcelas'],
    ['assinaturas', 'assinaturas.html', 'sync', 'Assinaturas'],
    ['pessoas', 'pessoas.html', 'group', 'Pessoas'],
    ['metodos', 'metodos.html', 'credit_card', 'Métodos'],
  ];
  const active = nav.dataset.active;
  nav.className = 'fixed bottom-0 w-full z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-2px_16px_rgba(0,0,0,0.35)]';
  nav.innerHTML = '<div class="flex justify-around items-center h-16 px-space-xs max-w-md mx-auto">' +
    items.map(([id, href, icon, label]) => {
      const on = id === active;
      return `<a href="${href}" ${on ? 'aria-current="page"' : ''} class="flex-1 flex flex-col items-center justify-center min-w-[44px] min-h-[44px] py-1 transition-all ${on ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'}">` +
        `<div class="w-10 h-7 rounded-full flex items-center justify-center transition-colors ${on ? 'bg-secondary-container/40' : ''}">` +
        `<span class="material-symbols-outlined text-[22px]" style="font-variation-settings: 'FILL' ${on ? 1 : 0};">${icon}</span></div>` +
        `<span class="font-label-sm text-[11px] mt-0.5 tracking-tight">${label}</span></a>`;
    }).join('') + '</div>';
})();

// ── Bottom sheets ───────────────────────────────────────────────────────
function openSheet(id) {
  document.getElementById(id).classList.add('is-open');
}

function closeSheet(id) {
  document.getElementById(id).classList.remove('is-open');
}

// ── Aviso rápido ────────────────────────────────────────────────────────
let toastTimer;
function showToast(message, icon = 'check_circle') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast opacity-0 pointer-events-none';
    toast.setAttribute('role', 'status');
    toast.innerHTML = '<span class="material-symbols-outlined"></span><span></span>';
    document.body.append(toast);
  }
  toast.children[0].textContent = icon;
  toast.children[1].textContent = message;
  toast.classList.remove('opacity-0');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('opacity-0'), 2500);
}

// ── Cliques compartilhados ──────────────────────────────────────────────
document.addEventListener('click', (e) => {
  const el = e.target;

  if (el.closest('[data-back]')) {
    history.length > 1 ? history.back() : (location.href = 'index.html');
    return;
  }

  const opener = el.closest('[data-open-sheet]');
  if (opener) return openSheet(opener.dataset.openSheet);

  const closer = el.closest('[data-close-sheet]');
  if (closer) return closer.closest('.sheet-backdrop').classList.remove('is-open');

  // Toque fora do sheet fecha
  if (el.classList.contains('sheet-backdrop')) return el.classList.remove('is-open');

  const option = el.closest('.segmented > button');
  if (option) {
    for (const sibling of option.parentElement.children) sibling.setAttribute('aria-pressed', 'false');
    option.setAttribute('aria-pressed', 'true');
  }
});
