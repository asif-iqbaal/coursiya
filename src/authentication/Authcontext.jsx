import React, { createContext, useState, useContext } from "react";

// Create a Context for Authentication
const AuthContext = createContext();

// AuthProvider component to wrap the app and provide the auth state
export function AuthProvider({ children }) {
    const [isAdmin,setIsAdmin] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const admin = () => setIsAdmin(true); 
    const login = () => setIsAuthenticated(false);
    const logout = () => setIsAuthenticated(true) && setIsAdmin(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated,isAdmin, login, logout,admin }}>
            {children}
        </AuthContext.Provider>
    );
}

// Directly use the AuthContext using useContext where needed
export { AuthContext, useContext };
