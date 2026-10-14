
/* Internet Serbia — единый блок соцсетей */
(() => {
  function addSocials() {
    if (document.querySelector('.is-social-section')) return;
    const footer = document.querySelector('footer');
    if (!footer) return;

    const icons = {
      instagram: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.6" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="2"/><circle cx="17.7" cy="6.4" r="1.2" fill="currentColor"/></svg>',
      facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14.4 22v-9h3l.5-3.5h-3.5V7.3c0-1.1.4-1.8 1.9-1.8H18V2.2C17.3 2.1 16.3 2 15 2c-3.2 0-5.3 1.9-5.3 5.5v2H7V13h2.7v9h4.7Z"/></svg>',
      threads: '@',
      youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="white"/><path d="m10 8 6 4-6 4Z" fill="#e11b22"/></svg>',
      tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M15.4 2c.3 3 2.1 4.8 5 5v4c-1.9 0-3.6-.5-5-1.5v6.3a6.2 6.2 0 1 1-6.2-6.2v4a2.2 2.2 0 1 0 2.2 2.2V2h4Z"/></svg>',
      telegram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.5 3.3 2.9 10.5c-1.3.5-1.3 1.2-.2 1.6l4.8 1.5 1.8 5.7c.3.8.8 1 1.4.5l2.5-2.4 4.8 3.6c.9.5 1.6.2 1.8-.8l3-14.1c.3-1.4-.5-1.9-1.3-1.5ZM8.2 13l10.9-6.8c.6-.4 1-.2.6.2l-9 8.1-.3 3.7Z"/></svg>'
    };

    const networks = [
      ['Instagram', 'https://www.instagram.com/internetserdia/', 'instagram'],
      ['Facebook', 'https://www.facebook.com/profile.php?id=61595148909238', 'facebook'],
      ['Threads', 'https://www.threads.com/@internetserdia', 'threads'],
      ['YouTube', 'https://www.youtube.com/@internetserbia', 'youtube'],
      ['TikTok', 'https://www.tiktok.com/@internetserbia', 'tiktok'],
      ['Telegram', 'https://t.me/internetserbia', 'telegram']
    ];

    const section = document.createElement('section');
    section.className = 'is-social-section';
    section.setAttribute('aria-label', 'Internet Serbia в социальных сетях');

    section.innerHTML = `
      <h2 class="is-social-heading">Internet Serbia в социальных сетях</h2>
      <p class="is-social-caption">Полезные советы, новости и видео о домашнем интернете в Сербии</p>
      <div class="is-social-grid">
        ${networks.map(([name, url, kind]) => `
          <a class="is-social-link" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Internet Serbia — ${name}">
            <span class="is-social-icon is-social-${kind}" aria-hidden="true">${icons[kind]}</span>
            <span>${name}</span>
          </a>
        `).join('')}
      </div>
    `;

    footer.before(section);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addSocials, { once: true });
  } else {
    addSocials();
  }
})();

