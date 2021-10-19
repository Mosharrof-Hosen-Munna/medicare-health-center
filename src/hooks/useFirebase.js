import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleGithubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const handleEmailPasswordRegister = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleEmailPasswordLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const setUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  return {
    user,
    handleGoogleSignIn,
    logOut,
    handleGithubSignIn,
    handleEmailPasswordRegister,
    setUserName,
    handleEmailPasswordLogin,
  };
};

export default useFirebase;
