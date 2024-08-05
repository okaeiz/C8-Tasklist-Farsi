const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

const CAMUNDA_API_URL = process.env.CAMUNDA_OPERATE_ADDRESS;

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.all("/process-definitions/search", async (req, res) => {
  console.log("Received request for process definitions");
  console.log("Request method:", req.method);

  try {
    let response;
    if (req.method === "POST") {
      response = await axios.post(
        `${CAMUNDA_API_URL}/v1/process-definitions/search`,
        req.body,
        {
          headers: {
            Authorization: req.headers.authorization,
            "Content-Type": "application/json",
            accept: "application/json",
          },
        }
      );
    } else if (req.method === "GET") {
      response = await axios.get(`${CAMUNDA_API_URL}/v1/process-definitions`, {
        headers: {
          Authorization: req.headers.authorization,
          accept: "application/json",
        },
      });
    } else {
      return res.status(405).json({ error: "Method not allowed" });
    }

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching process definitions:", error.message);
    if (error.response) {
      console.error("Error response status:", error.response.status);
      console.error("Error response data:", error.response.data);
    }
    res
      .status(error.response?.status || 500)
      .json({ error: "Failed to fetch process definitions" });
  }
});

app.listen(port, () => {
  console.log(
    `Process definitions proxy server running at http://localhost:${port}`
  );
});
