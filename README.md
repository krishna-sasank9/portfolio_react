# Portfolio — Krishna Sasank Tatavarty

Personal portfolio built with **React 19**, **Vite** and **Sass**.

🔗 **Live:** https://portfolio-react-ten-gules.vercel.app/

## Stack

| Concern    | Choice                                  |
| ---------- | --------------------------------------- |
| Build tool | Vite 8 (Rolldown)                       |
| UI         | React 19                                |
| Styling    | Sass + CSS custom properties            |
| Animation  | Framer Motion                           |
| Backend    | Firebase Firestore (contact form only)  |
| Hosting    | Vercel                                  |

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your Firebase web config
npm run dev                  # http://localhost:3000
```

## Scripts

| Command           | Does                                  |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Dev server with HMR                   |
| `npm run build`   | Production build into `build/`        |
| `npm run preview` | Serve the production build locally    |

## Editing content

All content lives in `src/data/` — you should rarely need to touch a component.

| File            | Holds                                          |
| --------------- | ---------------------------------------------- |
| `profile.js`    | Name, roles, bio, resume link, socials, stats  |
| `experience.js` | Work history and education (timeline)          |
| `projects.js`   | Project cards                                  |
| `skills.js`     | Skill groups and core strengths                |

## Environment variables

Firebase's web config is not a secret — it ships in the client bundle by design.
Actual security comes from **Firestore rules**. The contact form should be
write-only for anonymous users:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{doc} {
      allow create: if request.resource.data.keys().hasOnly(
                      ['name', 'email', 'message', 'createdAt'])
                    && request.resource.data.name is string
                    && request.resource.data.name.size() < 100
                    && request.resource.data.message.size() < 2000;
      allow read, update, delete: if false;
    }
  }
}
```

Set the same `VITE_FIREBASE_*` variables in the Vercel project settings.
