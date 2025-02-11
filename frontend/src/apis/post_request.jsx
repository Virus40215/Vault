const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export const postRequest = async (bodyData, url) => {
  try {


    const response = await fetch(`${API_URL}/${url}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(bodyData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error:", data);
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};
