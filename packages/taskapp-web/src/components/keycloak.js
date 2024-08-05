import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http:192.168.0.11:18080/auth",
  realm: "camunda-platform",
  clientId: "admin-client",
});

export default keycloak;
