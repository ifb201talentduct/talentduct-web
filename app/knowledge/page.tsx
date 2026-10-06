import type { Metadata } from 'next';
import { PageHeader } from '@/components/SiteChrome';
import { ARTICLES } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Knowledge Article | TalentDuct Recruitment',
  description: 'Guidance for candidates and clients on how our recruitment process works.',
};

export default function KnowledgePage() {
  const forCandidates = ARTICLES.filter((a) => a.category === 'For candidates');
  const forClients = ARTICLES.filter((a) => a.category === 'For clients');

  return (
    <>
      <PageHeader
        eyebrow="Guidance"
        title="Knowledge Article"
        intro="Answers to the questions we are asked most often. If what you need is not here, the assistant on this page can help, and will lodge a case if it cannot."
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        {[
          { heading: 'For candidates', items: forCandidates },
          { heading: 'For clients', items: forClients },
        ].map((group) => (
          <section key={group.heading} className="mb-16 last:mb-0">
            <h2 className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.18em] text-muted">
              {group.heading}
            </h2>

            <div className="mt-5 space-y-px overflow-hidden rounded-lg border border-line bg-line">
              {group.items.map((article) => (
                <article key={article.slug} className="bg-card p-8">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink">
                      {article.title}
                    </h3>
                    <span className="font-[family-name:var(--font-geist-mono)] text-xs text-muted">
                      {article.readTime} read
                    </span>
                  </div>

                  <p className="mt-3 max-w-2xl leading-relaxed text-body">{article.summary}</p>

                  <div className="mt-6 max-w-2xl space-y-4 border-t border-line pt-6">
                    {article.body.map((para, i) => (
                      <p key={i} className="leading-relaxed text-body">
                        {para}
                      </p>
                    ))}
                  </div>

                  <p className="mt-6 font-[family-name:var(--font-geist-mono)] text-xs text-muted">
                    Last updated {article.updated}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
