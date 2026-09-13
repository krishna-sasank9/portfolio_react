// Source of truth: resume (Krishna Sasank Tatavarty S S).
// Newest first. `end: 'Present'` renders as a live role.
export const experience = [
  {
    role: 'Software Development Engineer (SDE-I)',
    company: 'Inncircles',
    location: 'Hyderabad, India',
    start: 'May 2025',
    end: 'Present',
    description:
      'Building the distributed backend behind a multi-tenant construction-management platform — microservices, messaging, auth and the infrastructure that holds it together.',
    highlights: [
      'Architected a gRPC-only microservice mesh across 8+ NestJS services with per-tenant MongoDB isolation via AsyncLocalStorage context, cutting Nx build times by 20% through computation caching.',
      'Engineered a custom Sliding Window Counter rate limiter as a global NestJS guard — weighting prior-window counts to smooth spikes and computing exact Retry-After via decay math, for 10x smoother throughput using only 2 Redis ops.',
      'Designed a Redis-backed distributed semaphore guard for collaborative-edit protection with dual-threshold auto-expiration, generalised into one gRPC service reused across 15+ features at sub-1ms lock acquisition.',
      'Implemented a custom JetStream Transport wrapping NATS JetStream across 412 event handlers, backed by a MongoDB idempotency-claim system that dedupes in-flight events and reclaims stale claims after a 90s crash-safe window.',
      'Architected a tenant-aware BullMQ system spanning 58 queues and 130+ job types with retry/exponential backoff and 6 cron schedules, monitored live via BullBoard.',
      'Owned platform authentication end-to-end: JWT dual-token sessions with mutex-protected refresh (50% fewer Redis writes, 5-device cap), Google/Microsoft OAuth 2.0, MFA, and WebAuthn/FIDO2 passkeys with replay prevention.',
      'Built a full-lifecycle AWS S3 multipart upload pipeline (pre-signed URLs, resumable chunks) as a containerised NestJS microservice on ECR, streaming 100MB+ files browser-to-S3 with zero backend bandwidth.',
      'Launched a serverless HTML-to-PDF engine on AWS Lambda (Puppeteer + Chromium layers) across 4 regional environments, eliminating backend CPU overhead for document generation.',
      'Delivered a schema-driven Dynamic Forms engine adopted across 74 modules via a live form builder over gRPC/RxJS.',
      'Contributed to a 97-component design system imported across 863 files in 3 Angular 19 apps, plus a naming framework that swaps tenant-specific terminology without per-tenant forks.',
    ],
    tech: [
      'NestJS',
      'MongoDB',
      'Redis',
      'NATS JetStream',
      'BullMQ',
      'gRPC',
      'AWS',
      'Fastify',
      'Angular 19',
      'Docker',
      'Nx',
      'TypeScript',
    ],
  },
  {
    role: 'Software Development Engineer Intern',
    company: 'Inncircles',
    location: 'Hyderabad, India',
    start: 'Aug 2024',
    end: 'May 2025',
    description:
      'Joined as an intern on the product team, working across the frontend and backend of a live platform.',
    highlights: [
      'Identified, diagnosed and resolved 100+ critical production bugs across frontend and backend systems, directly improving platform stability and reducing customer-impacting incidents.',
      'Took ownership of shared UI component libraries (Pagination, File Upload), reducing feature development time for multiple sub-teams and enabling continuous delivery in an Agile environment.',
      'Managed complex asynchronous data flows using RxJS and NgRx, eliminating memory leaks and unhandled stream errors in high-traffic frontend modules.',
      'Collaborated on MongoDB query optimisation for data-heavy dashboards, measurably reducing API response times under peak load.',
    ],
    tech: ['Angular', 'MongoDB', 'Node.js', 'Express', 'TypeScript', 'React Native'],
  },
]

export const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    school: "Vignan's Institute of Information Technology",
    start: '2021',
    end: '2025',
    detail: 'CGPA: 8.91 / 10',
  },
]
