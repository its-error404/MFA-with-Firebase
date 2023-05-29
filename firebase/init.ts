import {FirebaseApp, getApp, getApps, initializeApp} from "@firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAKNcIhsDbU9X5cpUIZKIhtBQzmvjn0_mw",
    authDomain: "mfaproject-56795.firebaseapp.com",
    projectId: "mfaproject-56795",
    storageBucket: "mfaproject-56795.appspot.com",
    messagingSenderId: "988143829007",
    appId: "1:988143829007:web:c2aa17f7343270ee49e37a",
    measurementId: "G-7R3RZNZ5B5"
  };
let app: FirebaseApp;

if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
}else {
    app = getApp();
}

export { app }