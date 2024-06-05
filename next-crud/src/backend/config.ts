import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuração do app firebase web
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_ID_SENDER,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/*const firebaseConfig = {
  apiKey: "AIzaSyAA8JnWqUP12Y4iwTe-XuVcXL2Btbvzi0s",
  authDomain: "next-crud-95329.firebaseapp.com",
  projectId: "next-crud-95329",
  storageBucket: "next-crud-95329.appspot.com",
  messagingSenderId: "870751136273",
  appId: "1:870751136273:web:cf1d700cdfa6ef3dde1fb0"
};*/
 
// Inicializando firebase
const app = !getApps().length ? initializeApp( firebaseConfig ) : getApp()
const dataBase = getFirestore(app);
 
export { dataBase }