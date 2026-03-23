export const PORTFOLIO_EGG_LOGO_EVENT = 'portfolio-egg-logo';

export function dispatchLogoEggTap() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(PORTFOLIO_EGG_LOGO_EVENT));
}
