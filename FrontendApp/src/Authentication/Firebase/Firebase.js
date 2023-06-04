import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification 
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  getDoc,
  doc,
  collection,
  where,
  addDoc,

} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfBryk5AhGT2tvhgVbuq7gSp4OYqq5XSU",
    authDomain: "e-algoviz.firebaseapp.com",
    projectId: "e-algoviz",
    storageBucket: "e-algoviz.appspot.com",
    messagingSenderId: "246986092028",
    appId: "1:246986092028:web:7e5a0c115d522d4a311679",
    measurementId: "G-LNWMEQS5W9"
  };

const app = initializeApp(firebaseConfig);
const AUTH = getAuth(app);
const db = getFirestore(app);

// Get a Firestore instance
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(AUTH, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    return(err);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    // Check if user already exists
    const userExists = await getDoc(doc(db, "users", email));
    if (userExists.exists()) {
      return "User already exists";
    }
    const res = await createUserWithEmailAndPassword(AUTH, email, password);
    const user = res.user;
    await updateProfile(res.user, {
      displayName: name
    });
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    await sendEmailVerification(user);

  } catch (err) {
    return(err.message);
  }
};


const logout = () => {
  signOut(AUTH);
};

export {
  AUTH as auth,
  db,
  signInWithGoogle,
  registerWithEmailAndPassword,
  logout,
};