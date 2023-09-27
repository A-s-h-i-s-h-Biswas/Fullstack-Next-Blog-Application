// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain:process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: "testing-79259.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};
console.log(firebaseConfig.apiKey);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
