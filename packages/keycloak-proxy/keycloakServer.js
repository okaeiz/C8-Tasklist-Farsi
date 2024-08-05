const express = require("express");
const request = require("request");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const keycloak_url = process.env.KEYCLOAK_ADDRESS;

app.use(cors());

app.use("/auth", (req, res) => {
  const url = keycloak_url + req.url;
  console.log(`Forwarding request to: ${url}`);

  req
    .pipe(request({ url, qs: req.query }))
    .on("error", (err) => {
      console.error("Request error:", err);
      res.status(500).send("Proxy error");
    })
    .pipe(res);
});

app.listen(port, () => {
  console.log(`Keycloak proxy server running at http://localhost:${port}`);
});
