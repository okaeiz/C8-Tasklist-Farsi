const express = require("express");
const cors = require("cors");
const { ZBClient } = require("zeebe-node");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Zeebe client
console.log("The address is:", process.env.ZEEBE_ADDRESS);
const zbc = new ZBClient({
  gatewayAddress: process.env.ZEEBE_ADDRESS,
  useTls: false,
});

// Start process instance endpoint
app.post("/start-process", async (req, res) => {
  const { key, variables } = req.body;

  console.log("Received key:", key, "Type:", typeof key);
  console.log("Creating process instance with key:", key);
  try {
    const result = await zbc.createProcessInstance({
      bpmnProcessId: key,
      variables: variables,
    });
    console.log("Process instance created:", result);
    res.json(result);
  } catch (error) {
    console.error("Error creating process instance:", error);
    console.error("Error details:", error.details);
    res.status(500).json({
      error: "Failed to start process instance",
      details: error.message,
      stack: error.stack,
    });
  }
});

// Get process definitions endpoint
app.get("/process-definitions", async (req, res) => {
  try {
    const topology = await zbc.topology();
    res.json(topology.processes);
  } catch (error) {
    console.error("Error fetching process definitions:", error);
    res.status(500).json({ error: "Failed to fetch process definitions" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
