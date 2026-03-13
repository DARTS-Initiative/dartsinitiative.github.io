import { config } from './config.js';

const STORAGE_KEY = 'darts_newsletter';
const DISMISS_DAYS = 7;
const SUBSCRIBED_DAYS = 30;

function getState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function setState(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function shouldShow() {
  const state = getState();
  if (state.subscribedAt) {
    const elapsed = Date.now() - state.subscribedAt;
    if (elapsed < SUBSCRIBED_DAYS * 24 * 60 * 60 * 1000) return false;
  }
  if (state.dismissedAt) {
    const elapsed = Date.now() - state.dismissedAt;
    if (elapsed < DISMISS_DAYS * 24 * 60 * 60 * 1000) return false;
  }
  return true;
}

function removeBanner(banner) {
  banner.classList.remove('newsletter-visible');
  banner.addEventListener('transitionend', () => banner.remove(), { once: true });
}

function createBanner() {
  const banner = document.createElement('div');
  banner.className = 'newsletter-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Newsletter subscription');
  banner.innerHTML = `
    <button class="newsletter-close" aria-label="Close">&times;</button>
    <div class="newsletter-body">
      <div class="newsletter-text">
        <strong>Be part of DARTS</strong>
        <span><b>We are just getting started.</b> Don't miss our new projects, and <em class="newsletter-highlight">get exclusive updates!</em></span>
        <button class="newsletter-already">I'm already subscribed</button>
      </div>
      <form
        action="${config.newsletterUrl}"
        method="post"
        class="newsletter-form"
        target="_blank"
      >
        <label for="newsletter-email" class="sr-only">Email address</label>
        <input
          type="email"
          name="email"
          id="newsletter-email"
          placeholder="your@email.com"
          required
          autocomplete="email"
          class="newsletter-input"
        />
        <button type="submit" class="newsletter-submit">>-/-></button>
      </form>
    </div>
  `;
  document.body.appendChild(banner);

  // Trigger reflow then animate in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      banner.classList.add('newsletter-visible');
    });
  });

  // X button: not subscribed, dismiss for 7 days
  const close = () => {
    setState({ dismissedAt: Date.now() });
    removeBanner(banner);
    document.removeEventListener('keydown', onKeydown);
  };
  banner.querySelector('.newsletter-close').addEventListener('click', close);

  // Subscribe: don't show for 6 months
  banner.querySelector('.newsletter-form').addEventListener('submit', () => {
    setState({ subscribedAt: Date.now() });
    document.removeEventListener('keydown', onKeydown);
    setTimeout(() => removeBanner(banner), 300);
  });

  // Already subscribed: same as subscribe
  banner.querySelector('.newsletter-already').addEventListener('click', () => {
    setState({ subscribedAt: Date.now() });
    document.removeEventListener('keydown', onKeydown);
    removeBanner(banner);
  });

  // Escape key
  const onKeydown = (e) => {
    if (e.key === 'Escape') close();
  };
  document.addEventListener('keydown', onKeydown);
}

export function markSubscribed() {
  setState({ subscribedAt: Date.now() });
}

export function showNewsletter() {
  if (!document.querySelector('.newsletter-banner')) {
    createBanner();
  }
}

export function initNewsletter() {
  if (!shouldShow()) return;

  setTimeout(createBanner, 5000);
}
