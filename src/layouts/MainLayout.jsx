import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function MainLayout() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

// forma por children
// function MainLayout({ children }) {
//   return (
//     <div>
//       <Navigation />
//       <main>
//         {children}
//       </main>
//     </div>
//   )
// }

export default MainLayout;