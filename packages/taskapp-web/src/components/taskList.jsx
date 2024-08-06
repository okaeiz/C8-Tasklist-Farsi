import React, { useState, useEffect } from "react";
import { fetchTasks } from "../camundaApi";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  // Card,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const TaskList = () => {
  const [processes, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProcesstasks();
  }, []);

  const loadProcesstasks = async () => {
    try {
      const tasks = await fetchTasks();
      console.log("Process tasks:", tasks); // Log the response
      setTasks(Array.isArray(tasks) ? tasks : []);
    } catch (err) {
      console.error("Error loading process tasks:", err);
      setError("Failed to load process tasks");
    }
  };

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <body>
      {/* <Typography variant="h4">Process tasks</Typography> */}
      {Array.isArray(processes) && processes.length > 0 ? (
        <StyledList>
          {processes.map((task) => (
            // <StyledCard>
            <StyledListItem key={task.id}>
              <ListItemText primary={task.name} secondary={task.id} />
              <Button
                variant="contained"
                style={{ margin: 20 }}
                color="secondary"
              >
                Start Task
              </Button>
            </StyledListItem>
            // </StyledCard>
          ))}
        </StyledList>
      ) : (
        <Typography>No user tasks available.</Typography>
      )}
    </body>
  );
};

export default TaskList;

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
