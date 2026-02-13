import { getApp, getApps, initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  doc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Object.values(firebaseConfig).every(Boolean);

const calendarCollection =
  import.meta.env.VITE_FIREBASE_CALENDAR_COLLECTION || "availability";
const calendarDocument =
  import.meta.env.VITE_FIREBASE_CALENDAR_DOCUMENT || "calendar";

let app = null;
let auth = null;
let db = null;
let googleProvider = null;

if (isFirebaseConfigured) {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  googleProvider = new GoogleAuthProvider();
}

const getCalendarDocRef = () => {
  if (!db) {
    return null;
  }

  return doc(db, calendarCollection, calendarDocument);
};

export const watchAuthState = (callback) => {
  if (!auth) {
    callback(null);
    return () => {};
  }

  return onAuthStateChanged(auth, callback);
};

export const signInWithGoogle = async () => {
  if (!auth || !googleProvider) {
    throw new Error("Firebase is not configured.");
  }

  return signInWithPopup(auth, googleProvider);
};

export const signOutUser = async () => {
  if (!auth) {
    return;
  }

  await signOut(auth);
};

export const watchCalendarAvailability = (onData, onError) => {
  const calendarRef = getCalendarDocRef();

  if (!calendarRef) {
    onData(null);
    return () => {};
  }

  return onSnapshot(
    calendarRef,
    (snapshot) => {
      if (!snapshot.exists()) {
        onData(null);
        return;
      }

      onData(snapshot.data());
    },
    onError
  );
};

export const saveCalendarAvailability = async ({ disabledDates, updatedBy }) => {
  const calendarRef = getCalendarDocRef();

  if (!calendarRef) {
    throw new Error("Firebase is not configured.");
  }

  await setDoc(
    calendarRef,
    {
      disabledDates,
      updatedBy: updatedBy || null,
      lastUpdated: serverTimestamp(),
    },
    { merge: true }
  );
};
