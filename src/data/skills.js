import {
  SiTypescript, SiJavascript, SiCplusplus, SiOpenjdk, SiPython,
  SiNodedotjs, SiNestjs, SiFastify, SiExpress,
  SiAngular, SiReact, SiReactivex, SiNgrx, SiTailwindcss,
  SiHtml5, SiCss, SiSass, SiJquery, SiRedux,
  SiMongodb, SiMongoose, SiRedis, SiNatsdotio, SiPostgresql, SiFirebase,
  SiDocker, SiNx, SiJsonwebtokens, SiPassport, SiWebauthn,
  SiGit, SiGithub, SiLinux, SiPnpm, SiJest, SiEslint, SiPrettier,
  SiVercel, SiPostman,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

// `Icon` is optional — items without one render as a plain pill.
export const skillGroups = [
  {
    title: 'Languages',
    blurb: 'What I write day to day.',
    items: [
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'C++', Icon: SiCplusplus },
      { name: 'Java', Icon: SiOpenjdk },
      { name: 'Python', Icon: SiPython },
    ],
  },
  {
    title: 'Backend',
    blurb: 'Services, APIs and the runtime underneath.',
    items: [
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'NestJS', Icon: SiNestjs },
      { name: 'Fastify', Icon: SiFastify },
      { name: 'Express', Icon: SiExpress },
      { name: 'gRPC' },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'Frontend',
    blurb: 'Interfaces that stay fast as they grow.',
    items: [
      { name: 'Angular', Icon: SiAngular },
      { name: 'React', Icon: SiReact },
      { name: 'RxJS', Icon: SiReactivex },
      { name: 'NgRx', Icon: SiNgrx },
      { name: 'Redux', Icon: SiRedux },
      { name: 'HTML5', Icon: SiHtml5 },
      { name: 'CSS3', Icon: SiCss },
      { name: 'Sass', Icon: SiSass },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
      { name: 'jQuery', Icon: SiJquery },
    ],
  },
  {
    title: 'Data & Messaging',
    blurb: 'Persistence, caching and event flow.',
    items: [
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'Mongoose', Icon: SiMongoose },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'Redis', Icon: SiRedis },
      { name: 'NATS JetStream', Icon: SiNatsdotio },
      { name: 'BullMQ' },
      { name: 'Firebase', Icon: SiFirebase },
    ],
  },
  {
    title: 'Security & Auth',
    blurb: 'Sessions, identity and access control.',
    items: [
      { name: 'JWT', Icon: SiJsonwebtokens },
      { name: 'OAuth 2.0' },
      { name: 'WebAuthn / FIDO2', Icon: SiWebauthn },
      { name: 'MFA' },
      { name: 'Passport', Icon: SiPassport },
      { name: 'bcrypt' },
    ],
  },
  {
    title: 'Cloud & Tooling',
    blurb: 'How the work actually ships.',
    items: [
      { name: 'AWS', Icon: FaAws },
      { name: 'Docker', Icon: SiDocker },
      { name: 'Nx Monorepo', Icon: SiNx },
      { name: 'Vercel', Icon: SiVercel },
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
      { name: 'Linux', Icon: SiLinux },
      { name: 'pnpm', Icon: SiPnpm },
      { name: 'Jest', Icon: SiJest },
      { name: 'Postman', Icon: SiPostman },
      { name: 'ESLint', Icon: SiEslint },
      { name: 'Prettier', Icon: SiPrettier },
    ],
  },
]

// Rendered as plain pills in the About section — concepts rather than logos.
export const coreStrengths = [
  'Microservices',
  'Event-Driven Architecture',
  'Multi-Tenant Architecture',
  'Distributed Locking',
  'Data Structures & Algorithms',
  'System Design',
  'Agile / Scrum',
]
