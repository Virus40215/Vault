const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export const deleteItem = async (id) => {
  try {
    const response = await fetch(`${API_URL}/delete-item/${id}/`, {
      method: "DELETE",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`Deletion went wrong: ${response.status}`);
    }
    console.log(`Item with the id: ${id} deleted.`);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
