import { useContext } from "react"
import { AuthContext } from "../../../context/AuthContext"
import { Link } from "react-router-dom"

const DashboardNav = () => {
  const { user, logout } = useContext(AuthContext)
  const userName = user ? user.name : 'Gamer'
  
  return (
    <nav className="bg-bg-secondary shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/dashboard" className="text-2xl font-bold text-white hover:text-primary transition-colors duration-300">
          Dashboard
        </Link>
        <div className="flex items-center space-x-4">
          <span className="text-white">Welcome, {userName}</span>
          <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105">Cerrar sesión</button>
        </div>
      </div>
    </nav>
  )
}

export default DashboardNav