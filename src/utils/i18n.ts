import zh from '@/i18n/zh';
import en from '@/i18n/en';

export type Locale = 'zh' | 'en';

const locales: Record<Locale, typeof zh> = { zh, en };

export function getLocale(lang?: string): Locale {
  if (lang === 'en') return 'en';
  return 'zh';
}

export function t(locale: Locale) {
  return locales[locale];
}

export function detectLocale(): Locale {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('locale');
    if (stored === 'en' || stored === 'zh') return stored;
    const browserLang = navigator.language;
    if (browserLang.startsWith('en')) return 'en';
  }
  return 'zh';
}
