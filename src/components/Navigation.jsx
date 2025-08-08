import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  if (location.pathname === '/dashboard') {
    return null
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 border-b-2 border-orange-500 z-50 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-6 h-[70px] flex items-center justify-between">
        <div className="flex items-center gap-4 font-black text-2xl text-white">
          <span className="text-3xl animate-[float_3s_ease-in-out_infinite]" >🎮</span>
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Zona Gamer</span>
        </div>

        <ul className={`flex items-center gap-8 list-none m-0 md:static md:flex-row md:w-auto md:h-auto md:bg-transparent md:translate-x-0 ${
          isMenuOpen ? 'fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-black/95 flex-col justify-center' : 'hidden md:flex'
        }`}>
          <li>
            <Link to="/" className="text-white no-underline px-4 py-2 rounded-md transition-all duration-300 relative font-medium hover:bg-primary-hover hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-[-5px]">Inicio</Link>
          </li>
          <li>
            <Link to="/login" className="text-white no-underline px-4 py-2 rounded-md transition-all duration-300 relative font-medium hover:bg-primary-hover hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-[-5px]">Login</Link>
          </li>
        </ul>

        <button onClick={toggleMenu} className="md:hidden flex flex-col gap-1 cursor-pointer">
          <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>
      </div>
    </nav>
  )
}

export default Navigation;