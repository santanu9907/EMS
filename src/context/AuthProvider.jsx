import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employee, admin } = getLocalStorage();

    setUserData({ employee, admin });
  }, []);

  return (
    <AuthContext.Provider value={userdata}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
