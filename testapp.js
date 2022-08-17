import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";

const app = await initializeApp(firebaseConfig);
const auth = await getAuth(app);
const db = await getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../login";
  }
});

export function hasResgate(objId, uid) { 
  const resgate = await getDocs(query(collection(db, "resgate"), where("objId", "==", objId), where("uid", "==", uid)));
  if (resgate.docs.length >= 1) {
    return true
  }
}

