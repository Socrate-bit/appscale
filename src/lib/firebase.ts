import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase web config. These identifiers are PUBLIC by design — the SDK
// ships them to every browser, and Google documents them as safe to expose.
// Access is controlled by Firestore security rules (see firestore.rules),
// not by hiding this config. Hardcoding avoids the build-time env-var pitfall
// where NEXT_PUBLIC_* vars are missing in production. An env var still wins if
// set (useful for pointing at a different project).
const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ??
    "AIzaSyBTmXV7TTk4yjKjQy6DqgCm1pBIFDXMTws",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ??
    "appscale-29f00.firebaseapp.com",
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "appscale-29f00",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ??
    "appscale-29f00.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "715045176645",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ??
    "1:715045176645:web:1d0877ba3c594499be6a2c",
};

// Reuse the existing app during hot-reload instead of re-initialising.
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
