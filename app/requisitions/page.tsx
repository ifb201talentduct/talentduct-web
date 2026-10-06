import type { Metadata } from 'next';
import { PageHeader, SlaBadge } from '@/components/SiteChrome';
import { REQUISITIONS } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Job Requisitions | TalentDuct Recruitment',
  description: 'Open roles across technology, security and corporate services.',
};

export default function RequisitionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Open roles"
        title="Job Requisitions"
        intro="Every open requisition, with how long it has been running and whether it is inside the agreed time to fill. Roles are shown with the client anonymised until shortlist stage."
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="tabular grid gap-px overflow-hidden rounded-lg border border-line bg-line">
          {REQUISITIONS.map((req) => (
            <article key={req.ref} className="bg-card p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs text-muted">
                    {req.ref}
                  </p>
                  <h2 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink">
                    {req.title}
                  </h2>
                  <p className="mt-1 text-sm text-body">
                    {req.client} · {req.location}
                  </p>
                </div>

                <div className="text-right">
                  <SlaBadge state={req.slaState} />
                  <p className="mt-1 font-[family-name:var(--font-geist-mono)] text-xs text-muted">
                    day {req.daysOpen} of {req.slaTarget}
                  </p>
                </div>
              </div>

              <p className="mt-4 max-w-2xl leading-relaxed text-body">{req.summary}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {req.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-wash px-2.5 py-1 text-xs text-ink">
                    {skill}
                  </span>
                ))}
              </div>

              <dl className="mt-6 grid gap-x-8 gap-y-3 border-t border-line pt-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { term: 'Employment', detail: req.employment },
                  { term: 'Package', detail: req.salary },
                  { term: 'Stage', detail: req.stage },
                  { term: 'Consultant', detail: req.owner },
                ].map((row) => (
                  <div key={row.term}>
                    <dt className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.14em] text-muted">
                      {row.term}
                    </dt>
                    <dd className="mt-1 text-sm text-ink">{row.detail}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          Cannot see a role that fits? Ask the assistant in the corner of this page and we will
          log an enquiry against your details.
        </p>
      </div>
    </>
  );
}
