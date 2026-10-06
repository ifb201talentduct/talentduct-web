# TalentDuct Recruitment — starter application

A Next.js 16 application for a fictional Australian recruitment firm, with a
floating assistant backed by the Salesforce Agentforce Agent API.

## Quick start

```bash
npm install
cp .env.example .env.local     # then fill in your Salesforce values
npm run check                  # verifies the connection before you start
npm run dev
```

See **TalentDuct-Installation-and-Deployment** for the full walkthrough,
including Salesforce setup and Vercel deployment.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Development server on http://localhost:3000 |
| `npm run check` | Validate `.env.local` and test the Salesforce connection |
| `npm run build` | Production build |
| `npm run lint` | ESLint |

## Where things live

- `lib/site-data.ts` — all page content
- `lib/sf-auth.ts` — OAuth and the Agent API client (server only)
- `app/api/agent/*` — the routes the browser calls
- `components/ChatWidget.tsx` — the floating panel shell
- `app/globals.css` — design tokens

## Note

TalentDuct Recruitment is fictional. Every requisition, recruiter, client and
figure in `lib/site-data.ts` is invented for teaching purposes.
