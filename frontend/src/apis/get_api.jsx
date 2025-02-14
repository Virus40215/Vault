/**
 * Simple get request as an generic fetch
 */

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
export const getData = async (url, user_id = "") => {
  try {
    const response = await fetch(`${API_URL}/${url}/${user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("example error");

    const data = await response.json();
    console.log("example message:", data);

    return data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};