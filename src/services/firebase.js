import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

// Конфигурация Firebase (из старого сайта)
const firebaseConfig = {
  apiKey: "AIzaSyBugYw3fPo4r7Q0e4jDjBUd-JBbCspghE8",
  authDomain: "mysterygdps-30547.firebaseapp.com",
  databaseURL: "https://mysterygdps-30547-default-rtdb.firebaseio.com",
  projectId: "mysterygdps-30547",
  storageBucket: "mysterygdps-30547.firebasestorage.app",
  messagingSenderId: "12553952733",
  appId: "1:12553952733:web:fa603d37c8c08dddefaa34",
  measurementId: "G-WVMTYWT40L"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспорт сервисов
export const db = getDatabase(app);
export const auth = getAuth(app);

export default app;
