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
  measurementId: "G-JQHRL2BKQE",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const getUserProfile = (userId) => {
  firestore
    .collection("users")
    .doc(userId)
    .get()
    .then((snapShot) => ({ userId, ...snapShot.data() }));
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const createServiceDocument = async (newService, userId) => {
  const userRef = firestore.doc("users/" + userId);
  const serviceRef = firestore.collection("services").doc();
  const createdAt = new Date();
  const { category, description, image, price, title } = newService;
  try {
    await serviceRef.set({
      category,
      description,
      image,
      price,
      title,
      createdAt,
      user: userRef,
    });
  } catch (error) {
    console.log("error creating service", error.message);
  }
  return serviceRef;
};

export const servicesSnapshotToMap = (services) => {
  const transformedService = services.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return transformedService;
};

export const getService = async (ref) => {
  const getCurrentService = await ref.get();
  const currentService = await getCurrentService.data();
  currentService.id = getCurrentService.id;
  const user = await currentService.user.get();
  currentService.user = user.data();
  currentService.user.id = user.id;
  return currentService;
};

export const createRef = (collection, docId) =>
  firestore.doc(`${collection}/` + docId);

export const createOfferDocument = async (offer) => {
  const offerRef = firestore.collection("offers").doc();
  try {
    await offerRef.set({ ...offer });
  } catch (error) {
    console.log("error creating service", error.message);
  }
  return offerRef;
};

export const fetchSendOffers = (userId) => {
  const userRef = createRef("users", userId);
  return firestore
    .collection("offers")
    .where("fromUser", "==", userRef)
    .get()
    .then((snapShot) =>
      snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
};

export const fetchReceivedOffers = (userId) => {
  const userRef = createRef("users", userId);
  return firestore
    .collection("offers")
    .where("toUser", "==", userRef)
    .get()
    .then((snapShot) =>
      snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
};

export const auth = firebase.auth();
export const authSession = firebase
  .auth()
  .setPersistence(firebase.auth.Auth.Persistence.SESSION);
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
