// `image` is optional — cards fall back to a generated monogram when it is absent.
// Prefer a real screenshot in /public/projects/ over a hotlinked stock image.
export const projects = [
  {
    title: 'Crypto Tracker',
    year: '2023',
    description:
      'Live dashboard for global cryptocurrency markets — real-time prices, historical charts and per-coin detail views across multiple currencies.',
    // TODO: confirm the exact libraries used — kept deliberately generic.
    tech: ['React', 'REST API'],
    demo: 'https://crypto-5wip9dsro-krishnas-projects.vercel.app',
    source: 'https://github.com/krishna-sasank9',
    featured: true,
  },
  {
    title: 'Airbnb Clone',
    year: '2023',
    description:
      'Full-stack accommodation booking platform. Users can list properties, upload photos, browse stays and manage bookings end to end.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    source: 'https://github.com/krishna-sasank9/Airbnb-Clone-MERN',
    featured: true,
  },
  {
    title: 'Helping Hands',
    year: '2023',
    description:
      'A platform connecting people who need assistance with volunteers able to provide it, with request matching and status tracking.',
    tech: ['React', 'Node.js', 'MongoDB'],
    source: 'https://github.com/krishna-sasank9/Helping_hands-Project',
  },
  {
    title: 'This Portfolio',
    year: '2026',
    description:
      'Built with React 19 and Vite. Dark-first design system, scroll-driven animations, and a Firestore-backed contact form.',
    tech: ['React 19', 'Vite', 'Framer Motion', 'Sass', 'Firebase'],
    source: 'https://github.com/krishna-sasank9/portfolio_react',
  },
]
