const API_BASE_URL = "http://localhost:3005"; // Adjust this to your backend URL

export const zeebeService = {
  startProcess: async (key, variables = {}) => {
    console.log("The key is", key);
    const response = await fetch(`${API_BASE_URL}/start-process`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key,
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to start process instance");
    }

    return response.json();
  },

  getProcessDefinitions: async () => {
    const response = await fetch(`${API_BASE_URL}/process-definitions`);

    if (!response.ok) {
      throw new Error("Failed to fetch process definitions");
    }

    return response.json();
  },
};
