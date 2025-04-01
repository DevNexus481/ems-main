import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

// AuthContext create kar rahe hain taaki authentication data ko share kar sakein
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage ko clear karne ka option hai, par ise enable mat karo warna data reset ho jayega
  // localStorage.clear()

  // userData ko store karne ke liye state banaya gaya hai
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage(); // localStorage me predefined data set kar rahe hain
    const { employees } = getLocalStorage(); // localStorage se employees ka data fetch kar rahe hain
    setUserData(employees); // fetched data ko state me store kar rahe hain
  }, []); // empty dependency array ka matlab ye effect sirf component mount hone par chalega

  return (
    <div>
      {/* AuthContext.Provider ka use karke context ka data share kar rahe hain */}
      <AuthContext.Provider value={[userData, setUserData]}>
        {children} {/* children components ko AuthContext ka access milega */}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
