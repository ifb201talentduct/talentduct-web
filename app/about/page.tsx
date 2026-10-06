import type { Metadata } from 'next';
import { PageHeader } from '@/components/SiteChrome';
import { COMPANY_STATS, OFFICES } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'About Us | TalentDuct Recruitment',
  description: 'Who TalentDuct is, how we work, and where we are.',
};

const PRINCIPLES = [
  {
    title: 'Publish the misses',
    detail:
      'Our SLA page shows commitments we are currently failing, not just the ones we are meeting. A service level nobody can audit is marketing.',
  },
  {
    title: 'Never send a resume blind',
    detail:
      'Candidates see the summary we write about them and know which client it is going to, before it goes.',
  },
  {
    title: 'Feedback to everyone who interviews',
    detail:
      'Every candidate who reaches interview hears the outcome within 48 hours, successful or not. This is the SLA we most often miss and the one we work hardest on.',
  },
  {
    title: 'Salary discussed first',
    detail:
      'We ask about money in the screening call. Leaving it to offer stage wastes the candidate time more than ours.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="About Us"
        intro="TalentDuct places specialists into technology, security and corporate roles across Australia. We were founded in 2016 by two consultants who were tired of recruitment processes that could not be measured."
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <section className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink">
              How we work
            </h2>
            <p className="leading-relaxed text-body">
              Most recruitment agencies compete on relationships and speed. We compete on being
              measurable. Every requisition we take on carries an agreed time to fill, and every
              stage of the process has a service level attached to it that the client can see.
            </p>
            <p className="leading-relaxed text-body">
              That means we publish our failures. The SLA page on this site shows two commitments
              we are currently missing. We would rather have that conversation up front than
              explain it in a quarterly review.
            </p>
            <p className="leading-relaxed text-body">
              We work across three offices with a team of eighteen, deliberately small enough that
              the consultant who takes your brief is the one who calls the candidates.
            </p>
          </div>

          <dl className="tabular grid grid-cols-2 gap-6 self-start rounded-lg border border-line bg-wash p-6">
            {COMPANY_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink">
                  {stat.figure}
                </dt>
                <dd className="mt-1 text-xs leading-relaxed text-body">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink">
            What we commit to
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {PRINCIPLES.map((principle) => (
              <div key={principle.title} className="bg-card p-7">
                <h3 className="text-base font-medium text-ink">{principle.title}</h3>
                <p className="mt-2 leading-relaxed text-body">{principle.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink">
            Where we are
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
            {OFFICES.map((office) => (
              <div key={office.city} className="bg-card p-7">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-ink">
                  {office.city}
                </h3>
                <address className="mt-2 not-italic leading-relaxed text-body">
                  {office.address}
                </address>
                <a
                  href={`tel:${office.phone.replace(/\s/g, '')}`}
                  className="mt-2 inline-block font-[family-name:var(--font-geist-mono)] text-sm text-ink no-underline hover:underline"
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
