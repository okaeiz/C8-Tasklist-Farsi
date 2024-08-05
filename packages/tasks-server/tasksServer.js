const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

const CAMUNDA_API_URL = process.env.CAMUNDA_TASKLIST_ADDRESS;

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

// Ensure this endpoint handles POST requests correctly
app.post("/tasks/search", async (req, res) => {
  console.log("Received request for tasks");
  console.log("Request method:", req.method);

  try {
    const response = await axios.post(
      `${CAMUNDA_API_URL}/tasks/search`,
      req.body,
      {
        headers: {
          Authorization: req.headers.authorization,
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    if (error.response) {
      console.error("Error response status:", error.response.status);
      console.error("Error response data:", error.response.data);
    }
    res
      .status(error.response?.status || 500)
      .json({ error: "Failed to fetch tasks" });
  }
});

app.listen(port, () => {
  console.log(`Tasks proxy server running at http://localhost:${port}`);
});
