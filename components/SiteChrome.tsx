import Link from 'next/link';
import { NAV, OFFICES, type SlaState } from '@/lib/site-data';

const SLA_TONE: Record<SlaState, { dot: string; text: string; label: string }> = {
  ontrack:  { dot: 'bg-ontrack',  text: 'text-ontrack',  label: 'On track' },
  atrisk:   { dot: 'bg-atrisk',   text: 'text-atrisk',   label: 'At risk' },
  breached: { dot: 'bg-breached', text: 'text-breached', label: 'Breached' },
};

/**
 * SLA status. The dot never carries meaning alone — the label always states
 * the status in words, so the badge works without colour vision.
 */
export function SlaBadge({ state, children }: { state: SlaState; children?: React.ReactNode }) {
  const tone = SLA_TONE[state];
  return (
    <span className="inline-flex items-center gap-2 text-xs">
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${tone.dot}`} aria-hidden="true" />
      <span className={tone.text}>{children ?? tone.label}</span>
    </span>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="border-b border-line bg-wash">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.18em] text-muted">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-body">{intro}</p>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-wash">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg font-bold text-ink">
              TalentDuct
            </p>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Specialist recruitment across technology, security and corporate services.
            </p>
          </div>

          <div>
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.18em] text-muted">
              Pages
            </p>
            <ul className="mt-3 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-body no-underline hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2">
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.18em] text-muted">
              Offices
            </p>
            <ul className="mt-3 grid gap-3 sm:grid-cols-3">
              {OFFICES.map((office) => (
                <li key={office.city} className="text-sm">
                  <span className="block text-ink">{office.city}</span>
                  <span className="block text-body">{office.address}</span>
                  <span className="block font-[family-name:var(--font-geist-mono)] text-body">
                    {office.phone}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6">
          <p className="text-xs text-muted">
            Demonstration site built for teaching purposes. TalentDuct Recruitment is not a real
            company, and every requisition, recruiter and figure shown here is fictional.
          </p>
        </div>
      </div>
    </footer>
  );
}
