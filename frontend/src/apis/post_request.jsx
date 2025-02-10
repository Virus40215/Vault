import { getCSRFToken } from "./get_csrf_token";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";


export const postRequest = async (bodyData, url) => {
  try {
    const csrfToken = await getCSRFToken();

    const response = await fetch(`${API_URL}/${url}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFToken": csrfToken,
      },
      credentials: "include",
      body: JSON.stringify(bodyData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Fehler bei der Anfrage:", data);
      throw new Error(data.message || "Fehler beim Senden der Anfrage");
    }

    return data;
  } catch (error) {
    console.error("Fehler:", error.message);
    throw error;
  }
};
