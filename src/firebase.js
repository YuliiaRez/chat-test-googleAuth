import { initializeApp } from "firebase/app";
import "./firebase-messaging-sw";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyDjjkh_lMD636n2sXnaOQcvyKtWPdEHwAo",
  authDomain: "chat-test-cdf26.firebaseapp.com",
  databaseURL:
    "https://chat-test-cdf26-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-test-cdf26",
  storageBucket: "chat-test-cdf26.appspot.com",
  messagingSenderId: "788245263002",
  appId: "1:788245263002:web:d9b778adfb43556a1f2523",
  measurementId: "G-038VSVRC90",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// const messaging = getMessaging();
// export const requestForToken = () => {
//   return getToken(messaging, {
//     vapidKey:
//       "BG7h-F1EIV1d65mqRNtgryOEsyOzzC3bXMekxX3crcCquMCzlJRO63m9LzCuh3_PDSpAUwiGUHr2ydo3eIMfuV4",
//   })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log("current token for client: ", currentToken);
//       } else {
//         console.log(
//           "No registration token available. Request permission to generate one."
//         );
//       }
//     })
//     .catch((err) => {
//       console.log("An error occurred while retrieving token. ", err);
//     });
// };
// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       console.log("payload", payload);
//       resolve(payload);
//     });
//   });
