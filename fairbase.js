import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkwQvjVjrEQqpEIIgWKshbz538lGm7DL8",
  authDomain: "td-esp.firebaseapp.com",
  projectId: "td-esp",
  storageBucket: "td-esp.firebasestorage.app",
  messagingSenderId: "1074367636296",
  appId: "1:1074367636296:web:65189df5578a98cbaa097d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);