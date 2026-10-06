'use client';

import { usePathname } from 'next/navigation';
import ChatWidget from './ChatWidget';
import AgentChat from './AgentChat';

/**
 * Mounted once in app/layout.tsx so the widget follows the visitor across every
 * page. Add paths here to suppress it on specific routes — usePathname rather
 * than window.location, so it reacts to client-side navigation.
 */
const HIDDEN_ON: string[] = [];

export default function SiteChat() {
  const pathname = usePathname();

  if (HIDDEN_ON.some((p) => pathname?.startsWith(p))) return null;

  return (
    <ChatWidget
      title="Recruitment enquiries"
      subtitle="Ask about a role, an SLA, or lodge a case"
      launcherLabel="Ask a question"
    >
      <AgentChat />
    </ChatWidget>
  );
}
