import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      <h2 className="mt-20 text-4xl font-primary text-center">Dashboardsdfsdf</h2>

      <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleLogout}>Cerrar sesión</button>
    </div>
  )
}

export default Dashboard;