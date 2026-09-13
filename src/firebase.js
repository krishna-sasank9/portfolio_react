import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Firebase web config is not secret (it ships in the bundle either way), but
// keeping it in env vars means the repo stays portable and the values can be
// rotated per environment. Security is enforced by Firestore rules — see README.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

export const app = initializeApp(firebaseConfig)
// Pass the app explicitly rather than relying on the default instance.
export const db = getFirestore(app)
