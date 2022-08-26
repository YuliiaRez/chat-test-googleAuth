import React, { useContext, createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { auth, firestore } from "./firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

export const Context = createContext(null);
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Context.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </Context.Provider>
  );
};
export const UserAuth = () => {
  return useContext(Context);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider
      value={{
        auth,
        firestore,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
