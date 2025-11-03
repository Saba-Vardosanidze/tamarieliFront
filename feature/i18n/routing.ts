import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'ka', 'fr'],
  defaultLocale: 'en',
});

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
