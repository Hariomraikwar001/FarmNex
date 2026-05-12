import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyAZWHwvMfyPtK-Mqw7Ykpsj-EbagXqXthg",

  authDomain: "farmnex-956e6.firebaseapp.com",

  projectId: "farmnex-956e6",

  storageBucket: "farmnex-956e6.firebasestorage.app",

  messagingSenderId: "169885902828",

  appId: "1:169885902828:web:b4591d2b8b0caac6b182c9"
};

const app =
initializeApp(firebaseConfig);

const db =
getFirestore(app);

const auth =
getAuth(app);

export { db, auth };