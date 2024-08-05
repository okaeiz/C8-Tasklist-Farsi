import React, { useState, useEffect } from "react";
import { fetchProcessDefinitions } from "../camundaApi";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  // Card,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { zeebeService } from "../zeebeService";

const ProcessList = () => {
  const [processes, setProcesses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProcessDefinitions();
  }, []);

  const loadProcessDefinitions = async () => {
    try {
      const definitions = await fetchProcessDefinitions();
      console.log("Process definitions:", definitions); // Log the response
      setProcesses(Array.isArray(definitions) ? definitions : []);
    } catch (err) {
      console.error("Error loading process definitions:", err);
      setError("Failed to load process definitions");
    }
  };

  async function handleStartProcess(bpmnProcessId) {
    try {
      const result = await zeebeService.startProcess(bpmnProcessId);
      console.log("Process instance started:", result);
      // Handle the result (e.g., show a success message)
      alert(`Process instance started with ID: ${result.processInstanceKey}`);
    } catch (error) {
      setError("Failed to start process instance");
      console.error("Error starting process instance:", error);
    } finally {
    }
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <body>
      {/* <Typography variant="h4">Process Definitions</Typography> */}
      {Array.isArray(processes) && processes.length > 0 ? (
        <StyledList>
          {processes.map((process) => (
            // <StyledCard>
            <StyledListItem key={process.id}>
              <ListItemText primary={process.name} secondary={process.key} />
              <Button
                variant="contained"
                onClick={() => handleStartProcess(process.bpmnProcessId)}
                style={{ margin: 20 }}
              >
                Start Process
              </Button>
            </StyledListItem>
            // </StyledCard>
          ))}
        </StyledList>
      ) : (
        <Typography>No process definitions available.</Typography>
      )}
    </body>
  );
};

export default ProcessList;

const StyledList = styled(List)({
  display: "flex",
  flexDirection: "column",
});

const StyledListItem = styled(ListItem)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

// const StyledCard = styled(Card)({
//   margin: "5px, 20px, 5px, 20px",
//   boxSizing: "border-box",
//   width: "50%",
//   alignSelf: "flex-end",
// });
