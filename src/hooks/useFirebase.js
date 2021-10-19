import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
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
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        console.log(user);
      })
      .catch((error) => console.log(error.message));
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
      const loginUser = result.user;
      setUser(loginUser);
    });
  };

  const handleEmailPasswordRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const RegisterUser = result.user;
      console.log(RegisterUser);
    });
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
        console.log(user);
      }
    });
  }, []);

  return {
    user,
    handleGoogleSignIn,
    logOut,
    handleGithubSignIn,
  };
};

export default useFirebase;
