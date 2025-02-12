/**
 * ! fetchWithauth is a generic API for any API that requires tokens.
 * ! IMPORTANT!
 * ! An API that requires a token must always be called via fetchWithAuth
 * 
 * example of an api with token:
 * const createPost = async (title, content) => {
  try {
    const response = await fetchWithAuth("http://example.com/api/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (!response.ok) throw new Error("Fehler beim Erstellen des Posts");

    const data = await response.json();
    console.log("Post erstellt:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
 */

export const fetchWithAuth = async (url, options = {}) => {
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
  let accessToken = sessionStorage.getItem("access");

  let response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    const refreshToken = sessionStorage.getItem("refresh");

    const refreshResponse = await fetch(`${API_URL}/api/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (refreshResponse.ok) {
      const refreshData = await refreshResponse.json();
      sessionStorage.setItem("access", refreshData.access);
      return fetchWithAuth(url, options);
    } else {
      sessionStorage.removeItem("access");
      sessionStorage.removeItem("refresh");
      window.location.href = "/";
    }
  }
  return response;
};
