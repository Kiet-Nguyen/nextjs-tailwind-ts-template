import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fi'],

  // Used when no locale matches
  defaultLocale: 'fi',

  // Prefix for the locale in the URL
  localePrefix: 'as-needed',

  // Disable locale detection
  localeDetection: false,
});
