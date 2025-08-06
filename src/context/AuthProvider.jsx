import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem("authToken");
      const infoUser = localStorage.getItem("user");

      if (token && infoUser) {
        setUser(JSON.parse(infoUser));
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const login = (userData) => {
    try {
      const { user, token } = userData;
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));
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
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
