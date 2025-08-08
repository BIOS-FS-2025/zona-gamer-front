import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem("authToken");
      const infoUser = localStorage.getItem("user");

      if (token && infoUser) {
        setUser(JSON.parse(infoUser));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = (userData) => {
    try {
      const { user, token } = userData;
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    login,
    logout,
    isAuthenticated: !!user, // if (user) return true/false
    setIsLoading,
    isLoading,
    user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
