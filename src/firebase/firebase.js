import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAgOgYVuww-KqbLSWV4eswJ6lnVbyizQww",
  authDomain: "join-code.firebaseapp.com",
  databaseURL: "https://join-code.firebaseio.com",
  projectId: "join-code",
  storageBucket: "join-code.appspot.com",
  messagingSenderId: "1034767608032",
  appId: "1:1034767608032:web:3383a77081f9d3d09b4885",
  measurementId: "G-JQHRL2BKQE"
};

firebase.initializeApp(config);

export const createUserProfile = async (userAuth, addDate) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addDate
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth)
    })
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
