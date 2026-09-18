document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.concept-toggle');

  toggles.forEach((toggle) => {
    const content = toggle.parentElement.querySelector('.concept-content');

    if (!content) return;

    toggle.addEventListener('click', () => {
      const isOpen = content.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  });
});