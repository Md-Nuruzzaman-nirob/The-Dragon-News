import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../config/firebase";

// context api
export const AuthContextAPI = createContext(null);

// --->auth provider<---
// google
const googleProvider = new GoogleAuthProvider();

// github
const githubProvider = new GithubAuthProvider();

const AuthContext = ({ children }) => {
  // use state
  const [user, setUser] = useState(null);

  // google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // github
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //   create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout
  const logout = () => {
    return signOut(auth);
  };

  // delete user
  const deleteTheUser = () => {
    return deleteUser(auth.currentUser);
  };

  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe;
    };
  }, []);

  // authentication object
  const authentication = {
    googleLogin,
    githubLogin,
    createUser,
    loginUser,
    logout,
    deleteTheUser,
    user,
  };
  console.log(user);

  return (
    <AuthContextAPI.Provider value={authentication}>
      {children}
    </AuthContextAPI.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
