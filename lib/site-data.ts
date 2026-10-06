// lib/site-data.ts
//
// All placeholder content for the demonstration site lives here, so pages stay
// presentational. Replacing this with real data — a CMS, or Salesforce records
// pulled through an API route — means changing this file, not six pages.

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/requisitions', label: 'Job Requisitions' },
  { href: '/slas', label: 'SLAs' },
  { href: '/knowledge', label: 'Knowledge Article' },
  { href: '/about', label: 'About Us' },
  { href: '/recruiters', label: 'Our Recruiters' },
];

export type SlaState = 'ontrack' | 'atrisk' | 'breached';

export type Requisition = {
  ref: string;
  title: string;
  client: string;
  location: string;
  employment: string;
  stage: string;
  daysOpen: number;
  slaTarget: number;
  slaState: SlaState;
  owner: string;
  salary: string;
  summary: string;
  skills: string[];
};

export const REQUISITIONS: Requisition[] = [
  {
    ref: 'REQ-2041',
    title: 'Senior Data Engineer',
    client: 'ASX-listed energy retailer',
    location: 'Brisbane, hybrid',
    employment: 'Permanent, full time',
    stage: 'Shortlist with client',
    daysOpen: 11,
    slaTarget: 21,
    slaState: 'ontrack',
    owner: 'Nadia Farrow',
    salary: '$165,000 – $185,000 + super',
    summary:
      'Building the ingestion layer for a new customer analytics platform. Reports to the Head of Data.',
    skills: ['Python', 'dbt', 'Snowflake', 'Airflow'],
  },
  {
    ref: 'REQ-2038',
    title: 'Cyber Security Analyst',
    client: 'State government department',
    location: 'Brisbane CBD, on site',
    employment: 'Contract, 12 months',
    stage: 'Interviewing',
    daysOpen: 18,
    slaTarget: 21,
    slaState: 'atrisk',
    owner: 'Tomas Beckett',
    salary: '$95 – $110 per hour + super',
    summary:
      'SOC uplift programme. Baseline security clearance required, NV1 desirable.',
    skills: ['SIEM', 'Splunk', 'Incident response', 'Essential Eight'],
  },
  {
    ref: 'REQ-2035',
    title: 'Salesforce Solution Architect',
    client: 'National not-for-profit',
    location: 'Remote, AEST hours',
    employment: 'Permanent, full time',
    stage: 'Offer negotiation',
    daysOpen: 24,
    slaTarget: 21,
    slaState: 'breached',
    owner: 'Nadia Farrow',
    salary: '$190,000 – $210,000 package',
    summary:
      'Consolidating four legacy CRMs onto a single Service Cloud instance. Candidate withdrew at offer stage, pipeline reopened.',
    skills: ['Service Cloud', 'Integration', 'Data migration', 'Agentforce'],
  },
  {
    ref: 'REQ-2044',
    title: 'Frontend Developer',
    client: 'Series B fintech',
    location: 'Sydney, hybrid',
    employment: 'Permanent, full time',
    stage: 'Sourcing',
    daysOpen: 4,
    slaTarget: 21,
    slaState: 'ontrack',
    owner: 'Priya Anand',
    salary: '$130,000 – $150,000 + equity',
    summary:
      'Rebuilding the customer onboarding journey. Small team, high autonomy.',
    skills: ['React', 'TypeScript', 'Next.js', 'Accessibility'],
  },
  {
    ref: 'REQ-2029',
    title: 'Change Manager',
    client: 'Tier 1 construction group',
    location: 'Melbourne, on site',
    employment: 'Contract, 6 months',
    stage: 'Shortlist with client',
    daysOpen: 16,
    slaTarget: 21,
    slaState: 'atrisk',
    owner: 'Tomas Beckett',
    salary: '$800 – $900 per day',
    summary:
      'ERP rollout across 2,400 staff. Prosci certification preferred.',
    skills: ['Prosci', 'Stakeholder engagement', 'ERP rollout'],
  },
  {
    ref: 'REQ-2046',
    title: 'Payroll Officer',
    client: 'Regional health service',
    location: 'Toowoomba, on site',
    employment: 'Permanent, part time',
    stage: 'Sourcing',
    daysOpen: 2,
    slaTarget: 21,
    slaState: 'ontrack',
    owner: 'Priya Anand',
    salary: '$85,000 pro rata + super',
    summary:
      'Three days per week. Award interpretation experience essential.',
    skills: ['Chris21', 'Award interpretation', 'End-to-end payroll'],
  },
];

export type Sla = {
  code: string;
  name: string;
  commitment: string;
  target: string;
  actual: string;
  state: SlaState;
  measured: string;
  detail: string;
};

export const SLAS: Sla[] = [
  {
    code: 'SLA-01',
    name: 'Acknowledge new requisition',
    commitment: 'We confirm receipt and assign a recruiter',
    target: '4 business hours',
    actual: '1.8 hours',
    state: 'ontrack',
    measured: 'From requisition submitted to owner assigned',
    detail:
      'Requisitions received after 4:00pm AEST are acknowledged the following business morning.',
  },
  {
    code: 'SLA-02',
    name: 'First shortlist delivered',
    commitment: 'At least three screened candidates presented',
    target: '5 business days',
    actual: '4.6 days',
    state: 'ontrack',
    measured: 'From requisition acknowledged to shortlist sent',
    detail:
      'Where a role requires a security clearance, the target extends to 10 business days.',
  },
  {
    code: 'SLA-03',
    name: 'Candidate feedback returned',
    commitment: 'Interview outcome communicated to every candidate',
    target: '48 hours',
    actual: '61 hours',
    state: 'atrisk',
    measured: 'From interview completed to candidate contacted',
    detail:
      'Applies to all candidates who reach interview, whether successful or not.',
  },
  {
    code: 'SLA-04',
    name: 'Offer documentation issued',
    commitment: 'Contract and onboarding pack sent to the candidate',
    target: '24 hours',
    actual: '19 hours',
    state: 'ontrack',
    measured: 'From verbal offer accepted to documents issued',
    detail: 'Includes right-to-work verification and reference check summary.',
  },
  {
    code: 'SLA-05',
    name: 'Time to fill',
    commitment: 'Requisition closed with a placed candidate',
    target: '21 calendar days',
    actual: '25 days',
    state: 'breached',
    measured: 'From requisition opened to offer accepted',
    detail:
      'Currently breached across two open requisitions. Recovery plan reviewed weekly with affected clients.',
  },
  {
    code: 'SLA-06',
    name: 'Enquiry response',
    commitment: 'Any enquiry lodged through this site receives a reply',
    target: '1 business day',
    actual: '5.2 hours',
    state: 'ontrack',
    measured: 'From case created to first human response',
    detail:
      'Enquiries lodged through the assistant create a case immediately and are triaged by the duty recruiter.',
  },
];

export type Article = {
  slug: string;
  category: string;
  title: string;
  updated: string;
  readTime: string;
  summary: string;
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: 'what-happens-after-you-apply',
    category: 'For candidates',
    title: 'What happens after you apply',
    updated: '12 August 2026',
    readTime: '3 min',
    summary:
      'The stages your application moves through, who sees it, and when you should expect to hear from us.',
    body: [
      'Every application is read by a person. We do not screen out applications automatically, though we do use software to organise them by requisition and to flag missing right-to-work documentation.',
      'Within two business days you will receive either an invitation to a screening call or a note that we are not progressing your application. If a role is heavily subscribed this can stretch to five days, and we will tell you if that is the case.',
      'Screening calls run for about twenty minutes and cover your work history, what you are looking for, your notice period and your salary expectations. We ask about salary early because it is the most common reason a process ends late, and ending it late wastes your time more than ours.',
      'If we shortlist you, your details go to the client with a written summary we have prepared. You will see that summary before it is sent. We do not send your résumé to any client without telling you which client it is going to.',
    ],
  },
  {
    slug: 'right-to-work-evidence',
    category: 'For candidates',
    title: 'Right to work evidence we need',
    updated: '3 July 2026',
    readTime: '2 min',
    summary:
      'Which documents establish your right to work in Australia, and what we do with them.',
    body: [
      'Before you start any placement we are required to verify your right to work. For Australian citizens this is a passport, or a birth certificate together with photo identification.',
      'For permanent residents and visa holders we use the Department of Home Affairs VEVO service, which requires your passport number and date of birth. We do not retain your visa grant notice.',
      'Documents are held for the duration of your placement plus seven years, as required for employment records. You can ask us at any time what we hold about you.',
    ],
  },
  {
    slug: 'how-we-price-a-requisition',
    category: 'For clients',
    title: 'How we price a requisition',
    updated: '28 August 2026',
    readTime: '4 min',
    summary:
      'What sits behind a placement fee, and where the variation between roles comes from.',
    body: [
      'Permanent placements are charged as a percentage of the first year total package, invoiced on the candidate start date. The percentage varies by role scarcity rather than by seniority alone.',
      'Contract placements are charged as a margin on the hourly or daily rate. The margin covers payroll, insurance, superannuation administration and our recruitment effort. We show the margin separately on every timesheet.',
      'Where a requisition requires a security clearance, specialist assessment, or search outside our existing network, we agree the additional scope in writing before starting work.',
      'Our replacement guarantee runs for twelve weeks on permanent placements. If a candidate leaves within that period for a reason other than redundancy or a change to the role, we replace them at no further fee.',
    ],
  },
  {
    slug: 'raising-an-sla-concern',
    category: 'For clients',
    title: 'Raising a concern about an SLA',
    updated: '19 August 2026',
    readTime: '2 min',
    summary:
      'What to do when a commitment on the SLAs page has not been met.',
    body: [
      'Raise it through the assistant on this site, or with your account manager directly. Lodging it through the assistant creates a case, which means it is tracked and reportable rather than sitting in an inbox.',
      'Tell us the requisition reference and which SLA you believe has been missed. The reference is enough for us to pull the timeline.',
      'We respond within one business day with the measured timeline, whether we agree the SLA was missed, and what we are doing about it. Where we have missed a commitment we say so plainly.',
    ],
  },
];

export type Recruiter = {
  slug: string;
  name: string;
  role: string;
  desk: string;
  office: string;
  specialisms: string[];
  languages: string[];
  placements: string;
  tenure: string;
  bio: string;
};

export const RECRUITERS: Recruiter[] = [
  {
    slug: 'nadia-farrow',
    name: 'Nadia Farrow',
    role: 'Principal Consultant',
    desk: 'Data & Platform Engineering',
    office: 'Brisbane',
    specialisms: ['Data engineering', 'Cloud platform', 'Salesforce'],
    languages: ['English'],
    placements: '48 placements',
    tenure: 'With TalentDuct since 2019',
    bio: 'Nadia ran a data team before moving into recruitment, which is why her briefing notes tend to be longer than everyone else\u2019s.',
  },
  {
    slug: 'tomas-beckett',
    name: 'Tomas Beckett',
    role: 'Senior Consultant',
    desk: 'Security & Infrastructure',
    office: 'Brisbane',
    specialisms: ['Cyber security', 'Government contracts', 'Cleared candidates'],
    languages: ['English', 'Czech'],
    placements: '35 placements',
    tenure: 'With TalentDuct since 2021',
    bio: 'Tomas handles most of our state and federal government work and knows the clearance timelines better than the paperwork does.',
  },
  {
    slug: 'priya-anand',
    name: 'Priya Anand',
    role: 'Consultant',
    desk: 'Software Engineering',
    office: 'Sydney',
    specialisms: ['Frontend', 'Mobile', 'Early-stage companies'],
    languages: ['English', 'Hindi', 'Telugu'],
    placements: '22 placements',
    tenure: 'With TalentDuct since 2023',
    bio: 'Priya covers the Sydney startup market and runs our returner programme for people coming back after a career break.',
  },
  {
    slug: 'grace-oyelaran',
    name: 'Grace Oyelaran',
    role: 'Account Director',
    desk: 'Client partnerships',
    office: 'Brisbane',
    specialisms: ['Enterprise accounts', 'SLA governance', 'Panel arrangements'],
    languages: ['English', 'Yoruba'],
    placements: 'Manages 14 accounts',
    tenure: 'With TalentDuct since 2018',
    bio: 'Grace owns our largest client relationships and chairs the monthly SLA review with panel clients.',
  },
  {
    slug: 'daniel-kwon',
    name: 'Daniel Kwon',
    role: 'Consultant',
    desk: 'Corporate & Transformation',
    office: 'Melbourne',
    specialisms: ['Change management', 'Project services', 'Business analysis'],
    languages: ['English', 'Korean'],
    placements: '19 placements',
    tenure: 'With TalentDuct since 2024',
    bio: 'Daniel places change and project people into large transformation programmes, mostly on contract.',
  },
  {
    slug: 'meredith-hale',
    name: 'Meredith Hale',
    role: 'Candidate Care Lead',
    desk: 'Candidate experience',
    office: 'Brisbane',
    specialisms: ['Onboarding', 'Right to work', 'Feedback quality'],
    languages: ['English', 'Auslan'],
    placements: 'Supports all desks',
    tenure: 'With TalentDuct since 2020',
    bio: 'Meredith owns the candidate feedback SLA and is the person to contact if you have applied and heard nothing.',
  },
];

export const OFFICES = [
  { city: 'Brisbane', address: 'Level 8, 133 Mary Street, Brisbane QLD 4000', phone: '07 3555 0100' },
  { city: 'Sydney', address: 'Suite 22, 45 Clarence Street, Sydney NSW 2000', phone: '02 8555 0140' },
  { city: 'Melbourne', address: 'Level 3, 520 Bourke Street, Melbourne VIC 3000', phone: '03 9555 0180' },
];

export const COMPANY_STATS = [
  { figure: '312', label: 'Placements in the last 12 months' },
  { figure: '18.4', label: 'Median days to fill' },
  { figure: '91%', label: 'SLA commitments met' },
  { figure: '87%', label: 'Candidates still placed at 12 months' },
];
