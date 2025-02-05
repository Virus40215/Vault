//TODO: Refactor !!!
import { useState } from "react";

const CreateSnippetForm = ({ onClickClose }) => {
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

  const [formData, setFormData] = useState({
    title: "",
    language: "",
    description: "",
    code: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/create-snippet/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setMessage("Snippet wurde erfolgreich gespeichert!");
        setFormData({ title: "", language: "", description: "", code: "" });
      } else {
        setMessage("Fehler: " + JSON.stringify(data.errors));
      }
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Neues Snippet erstellen</h2>

      {message && <p className="mb-4 text-center">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Titel:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Sprache:</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            Beschreibung:
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Code:</label>
          <textarea
            name="code"
            value={formData.code}
            onChange={handleChange}
            className="w-full border p-2 rounded font-mono"
            required
          />
        </div>
        <div className="flex">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Speichern
        </button>
        <button
          onClick={onClickClose}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Schließen
        </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSnippetForm;
