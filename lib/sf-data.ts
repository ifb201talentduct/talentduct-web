// lib/sf-data.ts
//
// Reads live requisition and SLA records from Salesforce using the same
// client-credentials token the chat widget uses. It runs only on the server.
// If Salesforce cannot be reached, or the connected app is not allowed to read
// records, every function returns null and the pages fall back to the sample
// data in site-data.ts, labelled as sample data.

import { config } from './agent-config';
import { getAccessToken, invalidateToken } from './sf-auth';
import type { Requisition, SlaState } from './site-data';

const API_VERSION = 'v62.0';

async function soql<T>(query: string): Promise<T[] | null> {
  try {
    const url = `${config.myDomainUrl}/services/data/${API_VERSION}/query?q=${encodeURIComponent(query)}`;
    const call = async (token: string) =>
      fetch(url, { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store' });

    let res = await call(await getAccessToken());
    if (res.status === 401) {
      invalidateToken();
      res = await call(await getAccessToken());
    }
    if (!res.ok) return null;
    const json = (await res.json()) as { records?: T[] };
    return json.records ?? null;
  } catch {
    return null;
  }
}

type ReqRow = {
  Id: string;
  Requisition_Number__c: string;
  Job_Title__c: string | null;
  Location__c: string | null;
  Employment_Type__c: string | null;
  Status__c: string | null;
  Salary_Range__c: string | null;
  Description__c: string | null;
  Role_Category__c: string | null;
  Priority__c: string | null;
  Recruiter__r: { Name: string } | null;
};

type SlaRow = {
  SLA_ID__c: string;
  SLA_Status__c: string | null;
  SLA_Counter_Minutes__c: number | null;
  Shortlist_Delivery_Target_Minutes__c: number | null;
  Time_to_Fill_Target_Minutes__c: number | null;
  Job_Requisition__c: string;
  Job_Requisition__r: { Requisition_Number__c: string } | null;
};

export type LiveSla = {
  code: string;
  requisition: string;
  state: SlaState;
  statusLabel: string;
  daysElapsed: number;
  fillTargetDays: number;
};

function toState(status: string | null): SlaState {
  if (status === 'Breached') return 'breached';
  if (status === 'At Risk') return 'atrisk';
  return 'ontrack';
}

const DAY = 24 * 60;

export async function getLiveSlas(): Promise<LiveSla[] | null> {
  const rows = await soql<SlaRow>(
    'SELECT SLA_ID__c, SLA_Status__c, SLA_Counter_Minutes__c, Shortlist_Delivery_Target_Minutes__c, ' +
      'Time_to_Fill_Target_Minutes__c, Job_Requisition__c, Job_Requisition__r.Requisition_Number__c ' +
      'FROM SLA__c ORDER BY Job_Requisition__r.Requisition_Number__c LIMIT 200'
  );
  if (!rows) return null;
  return rows.map((r) => ({
    code: r.SLA_ID__c,
    requisition: r.Job_Requisition__r?.Requisition_Number__c ?? '—',
    state: toState(r.SLA_Status__c),
    statusLabel: r.SLA_Status__c ?? 'On Track',
    daysElapsed: Math.floor((r.SLA_Counter_Minutes__c ?? 0) / DAY),
    fillTargetDays: Math.round((r.Time_to_Fill_Target_Minutes__c ?? 0) / DAY),
  }));
}

export async function getLiveRequisitions(): Promise<Requisition[] | null> {
  const [reqs, slas] = await Promise.all([
    soql<ReqRow>(
      'SELECT Id, Requisition_Number__c, Job_Title__c, Location__c, Employment_Type__c, Status__c, ' +
        'Salary_Range__c, Description__c, Role_Category__c, Priority__c, Recruiter__r.Name ' +
        "FROM Job_Requisition__c WHERE Status__c NOT IN ('Filled','Cancelled','Closed') " +
        'ORDER BY Requisition_Number__c LIMIT 50'
    ),
    getLiveSlas(),
  ]);
  if (!reqs) return null;

  const slaByReq = new Map<string, LiveSla>();
  (slas ?? []).forEach((s) => slaByReq.set(s.requisition, s));

  return reqs.map((r) => {
    const sla = slaByReq.get(r.Requisition_Number__c);
    return {
      ref: r.Requisition_Number__c,
      title: r.Job_Title__c ?? 'Open role',
      client: r.Role_Category__c ? `${r.Role_Category__c} client` : 'Confidential client',
      location: r.Location__c ?? 'Location to be confirmed',
      employment: r.Employment_Type__c ?? '—',
      stage: r.Status__c ?? '—',
      daysOpen: sla?.daysElapsed ?? 0,
      slaTarget: sla?.fillTargetDays ?? 0,
      slaState: sla?.state ?? 'ontrack',
      owner: r.Recruiter__r?.Name ?? 'Unassigned',
      salary: r.Salary_Range__c ?? 'Competitive',
      summary: r.Description__c ?? 'Details available on request through the assistant.',
      skills: [r.Role_Category__c, r.Priority__c ? `${r.Priority__c} priority` : null].filter(
        (s): s is string => Boolean(s)
      ),
    };
  });
}
