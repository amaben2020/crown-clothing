import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
const config = {
	apiKey: "AIzaSyAwTAZo7qgkNNHaBM1hniNDTfyy1TP5u7g",
	authDomain: "crown-80185.firebaseapp.com",
	projectId: "crown-80185",
	storageBucket: "crown-80185.appspot.com",
	messagingSenderId: "519345761723",
	appId: "1:519345761723:web:74f6eccf7e62ddc8c0e89e",
	measurementId: "G-FC9JYERCL1",
};

//Write a function that stores users in your database
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	//userRef is the document with the user; its uid
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	console.log(snapShot);
	//check if snapshot exists and create a user using the documentRef CRUD
	if (!snapShot.exists) {
		//if user doesnt exist
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			//set is a firebase property used to create a new user
			await userRef.set({ displayName, email, createdAt, ...additionalData });
		} catch (error) {
			console.log("There was an error creating user", error);
		}
	}
	return userRef;
};

//passing the configuration of your project to firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

//enables Gmail google prompt to select account
provider.setCustomParameters({ prompt: "select_account" });

//using the signin popup to signin with google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
