"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  // SIGN UP
  const signup = (name, email, password) => {
    const newUser = { name, email, password };

    localStorage.setItem("user", JSON.stringify(newUser));

    setUser(newUser);
  };

  // SIGN IN
  const login = (email, password) => {
    const saved = localStorage.getItem("user");

    if (!saved) {
      return "User does not exist!";
    }

    const savedUser = JSON.parse(saved);

    if (email === savedUser.email && password === savedUser.password) {
      setUser(savedUser);
      return true;
    }

    return "Invalid email or password!";
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// custom hook
export function useAuth() {
  return useContext(AuthContext);
}
