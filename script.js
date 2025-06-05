
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function switchLanguage(lang) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    const isMatch = el.getAttribute('data-lang') === lang;
    el.classList.toggle('d-none', !isMatch);
  });
  document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('preferredLang', lang);
}

// Load preferred language on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  switchLanguage(savedLang);
});

// Modal behavior
function openModal(serviceId) {
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Close modal if clicked outside
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    closeModal();
  }
};
