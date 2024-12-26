import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // User register
  const userRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User Signin
  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Profile update
  const profileUpdate = (updatedUser) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedUser);
  };

  //   Signout user
  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Observer function

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currUser) => {
      if (currUser?.email) {
        setUser(currUser);
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
            email: currUser?.email,
          },
          { withCredentials: true }
        );
        console.log(data);
      } else {
        setUser(currUser);
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/logout`,
          { withCredentials: true }
        );
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    userRegister,
    userSignIn,
    profileUpdate,
    userSignOut,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
