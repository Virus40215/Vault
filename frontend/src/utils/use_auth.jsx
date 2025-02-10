import { useContext } from "react";
import { AuthContext } from "./auth_provider"


export const useAuth = () => useContext(AuthContext);