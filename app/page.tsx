import Link from 'next/link';
import { SlaBadge } from '@/components/SiteChrome';
import { COMPANY_STATS, REQUISITIONS, SLAS } from '@/lib/site-data';

export default function Home() {
  const open = REQUISITIONS.length;
  const breached = REQUISITIONS.filter((r) => r.slaState === 'breached').length;

  return (
    <>
      {/* Hero. The thesis of a recruitment firm is not "we care about people",
          it is "how long will this take and are you on track". */}
      <section className="border-b border-line bg-wash">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.18em] text-muted">
            Technology · Security · Corporate services
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Every requisition, measured against the clock.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">
            We publish our service levels and our performance against them, including
            the ones we are missing. {open} requisitions are open right now and{' '}
            {breached === 0 ? 'none are' : `${breached} ${breached === 1 ? 'is' : 'are'}`}{' '}
            past the agreed time to fill.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/requisitions"
              className="rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white no-underline hover:opacity-90"
            >
              Browse open roles
            </Link>
            <Link
              href="/slas"
              className="rounded-lg border border-line bg-card px-5 py-3 text-sm font-medium text-ink no-underline hover:bg-wash"
            >
              See our service levels
            </Link>
          </div>
        </div>
      </section>

      {/* Signature element: live SLA position, including the failures. */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink">
            Where we stand today
          </h2>
          <Link href="/slas" className="text-sm text-brand no-underline hover:underline">
            All service levels →
          </Link>
        </div>

        <div className="tabular mt-8 divide-y divide-line overflow-hidden rounded-lg border border-line bg-card">
          {SLAS.map((sla) => (
            <div
              key={sla.code}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4"
            >
              <span className="font-[family-name:var(--font-geist-mono)] text-xs text-muted">
                {sla.code}
              </span>
              <span className="min-w-[14rem] flex-1 text-sm text-ink">{sla.name}</span>
              <span className="font-[family-name:var(--font-geist-mono)] text-xs text-muted">
                target {sla.target}
              </span>
              <span className="font-[family-name:var(--font-geist-mono)] text-xs text-ink">
                actual {sla.actual}
              </span>
              <SlaBadge state={sla.state} />
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line bg-wash">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <dl className="tabular grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {COMPANY_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink">
                  {stat.figure}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-body">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Recently opened */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink">
            Recently opened
          </h2>
          <Link href="/requisitions" className="text-sm text-brand no-underline hover:underline">
            All requisitions →
          </Link>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
          {[...REQUISITIONS]
            .sort((a, b) => a.daysOpen - b.daysOpen)
            .slice(0, 3)
            .map((req) => (
              <Link
                key={req.ref}
                href="/requisitions"
                className="bg-card p-6 no-underline transition-colors hover:bg-wash"
              >
                <p className="font-[family-name:var(--font-geist-mono)] text-xs text-muted">
                  {req.ref}
                </p>
                <h3 className="mt-2 text-base font-medium text-ink">{req.title}</h3>
                <p className="mt-1 text-sm text-body">{req.location}</p>
                <p className="mt-4 font-[family-name:var(--font-geist-mono)] text-xs text-muted">
                  Open {req.daysOpen} days
                </p>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
