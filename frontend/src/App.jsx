import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vault_Snippets from "./pages/vault/Vault_Snippets";
import Vault_Data from "./pages/vault/Vault_Data";
import Vault_Media from "./pages/vault/Vault_Media";
import Navbar from "./components/navbar";
import { FaFileCirclePlus } from "react-icons/fa6";
import { RiScreenshot2Fill } from "react-icons/ri";
import { PiCodeBold } from "react-icons/pi";

const linkIcons = [
  <PiCodeBold size={24} />,
  <RiScreenshot2Fill size={24} />,
  <FaFileCirclePlus size={24} />,
];
const navLinks = [
  { name: "Code Snippets", path: "/" },
  { name: "Datensammlung", path: "/Vault_Data" },
  { name: "Meidasammlung", path: "/Vault_Media" },
];

const App = () => {
  /** 
   * 
   * 
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
  const [snippets, setSnippets] = useState([]);

  async function fetchSnippets() {

    try {
      const response = await fetch(`${API_URL}/get-all-snippets/`);
      if (response.ok) {
        const data = await response.json();
        setSnippets(data.snippets);
        setAllSnippets(data.snippets);
        setKeys(data.keys);
      }
    } catch (error) {
      console.error("fetch snippets went wrong", error);
    }
  }

  useEffect(() => {
    fetchSnippets();
  }, []);

  const refreshSnippets = () => {
    fetchSnippets();
  };
  */

  return (
    <div className="flex h-screen">
      <Router>
        <div className="w-64">
          <Navbar
            username="Lino De Marco"
            navLinks={navLinks}
            linkIcons={linkIcons}
          />
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Vault_Snippets />} />
            <Route path="/Vault_Data" element={<Vault_Data />} />
            <Route path="/Vault_Media" element={<Vault_Media />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
