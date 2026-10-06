import type { Metadata } from 'next';
import { PageHeader } from '@/components/SiteChrome';
import { RECRUITERS } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Our Recruiters | TalentDuct Recruitment',
  description: 'The consultants who take your brief and call the candidates.',
};

export default function RecruitersPage() {
  return (
    <>
      <PageHeader
        eyebrow="The team"
        title="Our Recruiters"
        intro="Each consultant runs a single desk rather than covering everything, so the person who takes your brief is the person who understands the market for it. Languages are listed where they change who we can reach."
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
          {RECRUITERS.map((person) => (
            <article key={person.slug} className="flex flex-col bg-card p-7">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
                {person.name}
              </h2>
              <p className="mt-1 text-sm text-brand">{person.role}</p>
              <p className="mt-0.5 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.14em] text-muted">
                {person.desk}
              </p>

              <p className="mt-4 flex-1 leading-relaxed text-body">{person.bio}</p>

              <dl className="mt-6 space-y-3 border-t border-line pt-4">
                <div>
                  <dt className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.14em] text-muted">
                    Specialisms
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
                    {person.specialisms.map((s) => (
                      <span key={s} className="rounded-full bg-wash px-2.5 py-1 text-xs text-ink">
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>

                {[
                  { term: 'Office', detail: person.office },
                  { term: 'Languages', detail: person.languages.join(', ') },
                  { term: 'Track record', detail: person.placements },
                  { term: 'Tenure', detail: person.tenure },
                ].map((row) => (
                  <div key={row.term} className="flex flex-wrap items-baseline gap-x-3">
                    <dt className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.14em] text-muted">
                      {row.term}
                    </dt>
                    <dd className="text-xs text-body">{row.detail}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
