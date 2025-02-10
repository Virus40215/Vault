const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export const getCSRFToken = async () => {
  const response = await fetch(`${API_URL}/csrf-token/`, {
    credentials: "include",
  });
  const data = await response.json();
  return data.csrfToken;
};