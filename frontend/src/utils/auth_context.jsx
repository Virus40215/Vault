import React, { createContext, useState, useEffect } from "react";
import { fetchWithAuth } from "../apis/fetch_with_auth"
const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetchWithAuth(`${API_URL}/api/user/`);
        if (response.ok) {
          const data = await response.json();
          setUser(data); 
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
