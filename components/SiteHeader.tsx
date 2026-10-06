'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV } from '@/lib/site-data';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <Link href="/" className="flex items-baseline gap-2 no-underline">
          <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
            TalentDuct
          </span>
          <span className="hidden font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.18em] text-muted sm:inline">
            Recruitment
          </span>
        </Link>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-6">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={
                    'relative py-1 text-sm no-underline transition-colors ' +
                    (isActive(item.href)
                      ? 'text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-brand'
                      : 'text-muted hover:text-ink')
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-4 lg:ml-0">
          <a
            href="tel:+61735550100"
            className="hidden font-[family-name:var(--font-geist-mono)] text-sm text-ink no-underline sm:inline"
          >
            07 3555 0100
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-md p-2 text-ink hover:bg-wash lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line lg:hidden">
          <ul className="mx-auto max-w-6xl px-6 py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={
                    'block border-b border-line py-3 text-sm no-underline last:border-0 ' +
                    (isActive(item.href) ? 'text-brand' : 'text-ink')
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
