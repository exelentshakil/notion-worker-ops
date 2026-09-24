/**
 * Million-Dollar Demo Cockpit Configuration Hub
 * Central Schema & Data Provider for Light-Speed Customization.
 *
 * TO CUSTOMIZE FOR ANY BID IN 30 SECONDS:
 * Simply update this single file with the client's domain, metrics,
 * sample workflow scenario, and entity table rows.
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: 'active' | 'verified' | 'queued' | 'flagged';
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: 'notion-worker-ops',
  name: 'SyncState',
  badge: 'v1.0 Production Cockpit',
  tagline: 'Production Sync & Micro-Observability for Notion Workers',
  description: 'High-performance execution cockpit for custom client integrations. Monitors distributed webhooks, schedules data pipelines via Supabase Postgres, and traces Notion API sync cycles with sub-15ms telemetry.',
  archetype: 'notion',
  primaryNav: [
    { id: 'cockpit', label: 'Operations Cockpit' },
    { id: 'pipeline', label: 'Live Webhook Test' },
    { id: 'records', label: 'Sync Action Ledger' },
  ],
  metrics: [
    {
      id: 'throughput',
      title: 'Notion API Sync Rate',
      value: '148,200 synced/hr',
      change: '+18.4% vs avg',
      trend: 'up',
      subtext: 'P99 API Latency: 12.4ms',
      badge: '99.98% Rate Limit Safe',
    },
    {
      id: 'scheduler',
      title: 'Distributed Cron Jobs',
      value: '12 Active Workers',
      change: '100% execution pass',
      trend: 'up',
      subtext: 'Supabase pg_cron & Inngest Bus',
      badge: '0 Missed Webhooks',
    },
    {
      id: 'database',
      title: 'Supabase Postgres Pool',
      value: '4.1ms Query Speed',
      change: 'Active Pool: 18/50',
      trend: 'neutral',
      subtext: 'Optimized via pg_stat_statements',
      badge: 'Zero Connection Starve',
    },
  ],
  workflow: {
    badge: 'Interactive Sandbox',
    title: 'Live Notion Worker Test & Webhook Event Simulator',
    description: 'Trigger a simulated client webhook event. Run the Notion Worker engine to validate schemas, sync database rows to Notion block elements, and output detailed telemetry.',
    inputLabel: 'JSON Webhook Payload (e.g. Stripe Payment, Typeform Submission)',
    inputPlaceholder: 'Paste webhook payload to simulate Notion Worker ingestion...',
    defaultInput: `{\n  "event": "charge.succeeded",\n  "company": "Polymarket",\n  "amount": 2500000,\n  "currency": "usd",\n  "customer_metadata": {\n    "notion_workspace_id": "ws_pm_0918",\n    "billing_anchor_id": "notion-block-8812"\n  }\n}`,
    buttonLabel: 'Simulate Notion Worker Run',
    sampleResponse: {
      status: 'SYNC_SUCCESS',
      worker_telemetry: {
        worker_id: 'wk-notion-stripe-sync',
        notion_api_version: '2022-08-16',
        execution_ms: 118,
        notion_request_id: 'req-9912a',
        api_calls_made: 3,
        postgres_write_ms: 4.1,
      },
      sync_payload: {
        notion_page_id: 'pg-stripe-pm-8812',
        database_id: 'db-billing-history-004',
        properties_updated: ['Amount', 'Status', 'Stripe Charge ID', 'Last Synced At'],
        schema_valid: true,
      },
      observability: {
        cache_hit: false,
        rate_limit_reset_seconds: 3592,
        remaining_requests: 29997,
        assigned_queue: 'Inngest High Priority Queue',
      },
    },
  },
  table: {
    badge: 'Sync Ledger',
    title: 'Notion API Operations & Active Sync Ledger',
    description: 'Scannable operational ledger mapping third-party webhooks to live Notion database updates with deep metadata inspection.',
    columns: [
      { key: 'id', label: 'Sync ID' },
      { key: 'entityName', label: 'Client / Source' },
      { key: 'category', label: 'Worker Integration' },
      { key: 'status', label: 'Execution Status' },
      { key: 'latency', label: 'Notion API Latency' },
      { key: 'action', label: 'Detail Inspection' },
    ],
    rows: [
      {
        id: 'SYNC-801',
        entityName: 'Polymarket Inc.',
        category: 'Stripe Billing Sync',
        status: 'verified',
        latency: '124ms',
        provider: 'Notion API v2022-08-16',
        updatedAt: '2 mins ago',
        payload: {
          client_id: 'client-polymarket',
          worker_id: 'wk-notion-stripe-sync',
          notion_db_id: 'db-pm-billing-091',
          supabase_sync_status: 'SUCCESS',
          notion_api_calls: 3,
          payload_size: '1.8 KiB',
          auto_recovered: false,
        },
      },
      {
        id: 'SYNC-802',
        entityName: 'Typeform SL',
        category: 'Partner Onboarding Sync',
        status: 'active',
        latency: '98ms',
        provider: 'Notion Worker Runtime',
        updatedAt: '5 mins ago',
        payload: {
          client_id: 'client-typeform',
          worker_id: 'wk-typeform-onboarding',
          notion_page_id: 'pg-tf-onboarding-441',
          webhook_received_at: '2026-09-25T17:34:10Z',
          notion_api_calls: 2,
          status_applied: 'Onboarded',
          properties_mapped: 8,
        },
      },
      {
        id: 'SYNC-803',
        entityName: 'HoneyBook Inc.',
        category: 'CRM Pipeline Webhook',
        status: 'verified',
        latency: '142ms',
        provider: 'Notion API v2022-08-16',
        updatedAt: '12 mins ago',
        payload: {
          client_id: 'client-honeybook',
          worker_id: 'wk-notion-crm-sync',
          notion_db_id: 'db-hb-pipeline-110',
          records_reconciled: 45,
          postgres_transaction_id: 'tx-hb-8820',
          inngest_step_id: 'step-reconcile-crm-data',
        },
      },
      {
        id: 'SYNC-804',
        entityName: 'Articulate Global',
        category: 'Course Completion Ingestion',
        status: 'queued',
        latency: '12ms',
        provider: 'Notion Worker Runtime',
        updatedAt: '18 mins ago',
        payload: {
          client_id: 'client-articulate',
          worker_id: 'wk-course-completion',
          payload_type: 'scorm.event',
          queued_in_supabase: true,
          retry_count: 0,
          concurrency_slot: 'slot-04',
        },
      },
      {
        id: 'SYNC-805',
        entityName: 'Polymarket API Outbound',
        category: 'Rate Limit Recoverer',
        status: 'flagged',
        latency: '450ms',
        provider: 'Notion Rate Limit Handler',
        updatedAt: '25 mins ago',
        payload: {
          incident_id: 'inc-ratelimit-429',
          api_path: 'databases/db-pm-billing-091/query',
          http_status_returned: 429,
          retry_after_seconds: 15,
          recovery_strategy: 'Exponential backoff queued via Inngest',
          current_backoff_tier: 1,
        },
      },
    ],
  },
};
