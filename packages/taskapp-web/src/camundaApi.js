import axios from "axios";

const OPERATE_API_BASE_URL = "http://localhost:3002"; // Your main proxy server URL
const TASKS_API_BASE_URL = "http://localhost:3003"; // Your tasks proxy server URL

const camundaApi = axios.create({
  baseURL: OPERATE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

const tasksApi = axios.create({
  baseURL: TASKS_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// Add a request interceptor to include the auth token
camundaApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

tasksApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const fetchProcessDefinitions = async () => {
  try {
    const processDefinitions = [];

    // Try POST first
    try {
      const response = await camundaApi.post("/process-definitions/search", {
        filter: {},
        size: 50, // Add this line to limit the number of results
      });
      if (response.data && Array.isArray(response.data.items)) {
        processDefinitions.push(...response.data.items);
      }
    } catch (postError) {
      if (postError.response && postError.response.status === 405) {
        // If POST fails with 405, try GET
        const response = await camundaApi.get("/process-definitions", {
          params: { size: 50 }, // Add size parameter for GET request
        });
        if (response.data && Array.isArray(response.data)) {
          processDefinitions.push(...response.data);
        }
      } else {
        throw postError;
      }
    }

    if (processDefinitions.length === 0) {
      console.error("Unexpected response structure");
      return [];
    }

    // get the latest versions
    const latestVersions = processDefinitions.reduce((acc, pd) => {
      const { bpmnProcessId, version } = pd;
      if (!acc[bpmnProcessId] || acc[bpmnProcessId].version < version) {
        acc[bpmnProcessId] = pd;
      }
      return acc;
    }, {});

    return Object.values(latestVersions);
  } catch (error) {
    console.error("Error fetching process definitions:", error);
    if (error.response) {
      console.error("Error response:", error.response.data);
    }
    throw error;
  }
};

export const fetchTasks = async () => {
  try {
    const response = await tasksApi.post("/tasks/search", {
      assignee: "karbalaei",
    });
    console.log("Response data:", response.data);

    if (response.data && Array.isArray(response.data)) {
      return response.data; // Return the array directly
    } else {
      console.error("Unexpected response structure");
      return [];
    }
  } catch (error) {
    console.error("Error fetching process tasks:", error);
    if (error.response) {
      console.error("Error response:", error.response.data);
    }
    throw error;
  }
};
