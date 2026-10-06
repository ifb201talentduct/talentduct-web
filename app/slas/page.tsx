import type { Metadata } from 'next';
import { PageHeader, SlaBadge } from '@/components/SiteChrome';
import { SLAS } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'SLAs | TalentDuct Recruitment',
  description: 'The service levels we commit to, how they are measured, and current performance.',
};

export default function SlasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service commitments"
        title="SLAs"
        intro="These are the commitments in every client agreement, with how each is measured and where we currently stand. We publish the ones we are missing as well as the ones we are meeting."
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="tabular grid gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-2">
          {SLAS.map((sla) => (
            <article key={sla.code} className="bg-card p-7">
              <div className="flex items-start justify-between gap-4">
                <p className="font-[family-name:var(--font-geist-mono)] text-xs text-muted">
                  {sla.code}
                </p>
                <SlaBadge state={sla.state} />
              </div>

              <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
                {sla.name}
              </h2>
              <p className="mt-2 leading-relaxed text-body">{sla.commitment}</p>

              <div className="mt-5 flex gap-8 border-y border-line py-4">
                <div>
                  <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.14em] text-muted">
                    Target
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-geist-mono)] text-lg text-ink">
                    {sla.target}
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.14em] text-muted">
                    Rolling 90 days
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-geist-mono)] text-lg text-ink">
                    {sla.actual}
                  </p>
                </div>
              </div>

              <dl className="mt-4 space-y-2">
                <div>
                  <dt className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.14em] text-muted">
                    Measured
                  </dt>
                  <dd className="mt-1 text-sm text-body">{sla.measured}</dd>
                </div>
                <div>
                  <dt className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.14em] text-muted">
                    Exceptions
                  </dt>
                  <dd className="mt-1 text-sm text-body">{sla.detail}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-line bg-wash p-6">
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-ink">
            If we miss a commitment
          </h2>
          <p className="mt-2 max-w-2xl leading-relaxed text-body">
            Raise it through the assistant on this page. Lodging it there creates a case against
            your account, which means it is tracked and reportable rather than sitting in someone
            inbox. We respond within one business day with the measured timeline and what we are
            doing about it.
          </p>
        </div>
      </div>
    </>
  );
}
