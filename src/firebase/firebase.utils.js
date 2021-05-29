import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA8rZe8Ilb6xEpyDHciEHlKilRtCsd5lss",
  authDomain: "crwn-db-7aaf3.firebaseapp.com",
  projectId: "crwn-db-7aaf3",
  storageBucket: "crwn-db-7aaf3.appspot.com",
  messagingSenderId: "1043462795895",
  appId: "1:1043462795895:web:68a91f805c6c8e0403cc72",
  measurementId: "G-SL72V9LLEC",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
