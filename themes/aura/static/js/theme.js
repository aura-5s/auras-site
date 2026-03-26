// Tema: persiste en localStorage
(function () {
  const STORAGE_KEY = 'aura-theme';
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Aplicar tema guardado o default oscuro
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    applyTheme(saved);
  } else {
    applyTheme('dark');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      const current = root.getAttribute('data-theme');
      applyTheme(current === 'light' ? 'dark' : 'light');
    });

    toggle.setAttribute(
      'aria-label',
      root.getAttribute('data-theme') === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'
    );
  });
})();
