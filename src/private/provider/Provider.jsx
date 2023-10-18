import { createContext, useEffect, useState } from "react";
import app from "../../assets/Firebase_Sdk";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const Authcontext = createContext(null);

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setuserRole] = useState("");
  let [userRefetch, setUserRefetch] = useState(false);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  // ===== Sign In Methods =====
  const createEmailusers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInEmailusers = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (newUser) => {
      setUser(newUser);
      if (!newUser) {
        setLoading(false);
      }
      if (newUser?.email) {
        fetch("https://assignment-12-server-beta-tan.vercel.app/secreate", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: newUser.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("fluent-verse", data.token);
          });
      } else {
        localStorage.removeItem("fluent-verse");
      }
      return () => unSubscribe();
    });
  }, []);
  useEffect(() => {
    fetch(
      `https://assignment-12-server-beta-tan.vercel.app/user/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setuserRole(data);
        setLoading(false);

        console.log(data)
      })
      .catch((err) => console.log(err.message));
  }, [user, userRefetch]);
  let authData = {
    user,
    userRole,
    loading,
    setUser,
    setLoading,
    createEmailusers,
    signInEmailusers,
    googleSignIn,
    updateUser,
    signout,
    userRefetch,
    setUserRefetch,
  };
  return (
    <Authcontext.Provider value={authData}>{children}</Authcontext.Provider>
  );
};

export default Provider;
