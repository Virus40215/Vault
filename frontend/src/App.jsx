import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Vault_Snippets from "./pages/vault/Vault_Snippets";
import Vault_Data from "./pages/vault/Vault_Data";
import Vault_Media from "./pages/vault/Vault_Media";
import Login from "./pages/vault/Login";
import Navbar from "./components/navbar";
import ProtectedRoute from "./utils/protected_route";
import { AuthProvider } from "./utils/auth_provider";
import { FaFileCirclePlus } from "react-icons/fa6";
import { RiScreenshot2Fill } from "react-icons/ri";
import { PiCodeBold } from "react-icons/pi";

const linkIcons = [
  <PiCodeBold size={24} />,
  <RiScreenshot2Fill size={24} />,
  <FaFileCirclePlus size={24} />,
];

const navLinks = [
  { name: "Code Snippets", path: "/Vault_Snippets" },
  { name: "Datensammlung", path: "/Vault_Data" },
  { name: "Meidasammlung", path: "/Vault_Media" },
];

const AppLayout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <div className="flex h-screen">
      {!hideNavbar && (
        <div className="w-64">
          <Navbar
            username="Lino De Marco"
            navLinks={navLinks}
            linkIcons={linkIcons}
          />
        </div>
      )}
      <div className="flex-1 p-4 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/Vault_Snippets"
            element={
              <ProtectedRoute>
                <Vault_Snippets />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Vault_Data"
            element={
              <ProtectedRoute>
                <Vault_Data />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Vault_Media"
            element={
              <ProtectedRoute>
                <Vault_Media />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </Router>
  );
};

export default App;
