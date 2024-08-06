import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { Grid, Card, Box, TextField, Typography, Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { styled } from "@mui/material/styles";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import logo from "../assets/c8tf-logo.png";
import { motion } from "framer-motion";

const Login = ({ t, setAuthenticated }) => {
  // const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const data = qs.stringify({
      grant_type: process.env.REACT_APP_GRANT_TYPE,
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
      username: username,
      password: password,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3001/auth/realms/camunda-platform/protocol/openid-connect/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      console.log("Response received:", response.data);

      if (response.data.access_token) {
        setAuthenticated(true);
        console.log("Authentication successful");
        localStorage.setItem("token", response.data.access_token);
        navigate("/");
      } else {
        console.error("No access token found in response");
        setError("Login failed. No access token received.");
      }
    } catch (error) {
      console.error("Login failed", error);
      setError(
        `Login failed. ${error.response ? error.response.data : error.message}`
      );
    }
  };

  const handleForget = () => {
    navigate("/recovery");
  };

  return (
    <Grid container justifyContent="center">
      <motion.Box
        style={{ marginTop: 64, width: "100%" }}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={logo} alt="Logo" style={{ mt: 8, width: "80px" }} />
      </motion.Box>
      <motion.Box
        style={{ marginTop: 64, width: "100%" }}
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Card
          sx={{
            padding: 4,
            width: { xs: "100%", sm: "60%", md: "30%" },
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "max-content",
            opacity: "75%",
          }}
        >
          <StyledTypography variant="h6" gutterBottom>
            {t("login.title")}
          </StyledTypography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: 2,
            }}
          >
            <AccountCircle sx={{ color: "action.active", ml: 2 }} />
            <TextField
              id="username"
              label={t("login.username")}
              variant="standard"
              InputProps={{
                style: {
                  fontFamily: "Vazirmatn",
                  direction: "ltr",
                },
              }}
              InputLabelProps={{
                style: {
                  fontFamily: "Vazirmatn",
                  direction: "rtl",
                  textAlign: "right",
                },
              }}
              sx={{ flex: 1 }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              padding: 2,
            }}
          >
            <LockIcon sx={{ color: "action.active", ml: 2 }} />
            <TextField
              id="password"
              label={t("login.password")}
              type="password"
              variant="standard"
              InputProps={{
                style: {
                  fontFamily: "Vazirmatn",
                  direction: "ltr",
                },
              }}
              InputLabelProps={{
                style: {
                  fontFamily: "Vazirmatn",
                  direction: "rtl",
                  textAlign: "right",
                },
              }}
              sx={{ flex: 1 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: 2,
            }}
          >
            <Button
              variant="text"
              sx={{ fontFamily: "Vazirmatn" }}
              onClick={handleForget}
            >
              {t("login.forgot")}
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontFamily: "Vazirmatn" }}
              onClick={handleLogin}
            >
              {t("login.submit")}
            </Button>
          </Box>
          {error && <Typography color="error">{error}</Typography>}
        </Card>
      </motion.Box>
    </Grid>
  );
};

export default withTranslation()(Login);

const StyledTypography = styled(Typography)({
  fontFamily: "Vazirmatn",
  direction: "rtl",
});
