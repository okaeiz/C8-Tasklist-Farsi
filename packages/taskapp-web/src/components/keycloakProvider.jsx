// KeycloakProvider.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import keycloak from "./keycloak";

// Create a context for Keycloak
const KeycloakContext = createContext();

export const useKeycloak = () => useContext(KeycloakContext);

const KeycloakProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    keycloak.init({ onLoad: "check-sso" }).then(authenticated => {
      setAuthenticated(authenticated);
      setInitialized(true);
      if (authenticated) {
        console.log("Authenticated", keycloak.token);
      }
    }).catch(error => {
      console.error("Keycloak initialization error", error);
      setInitialized(true);
    });
  }, []);

  if (!initialized) {
    return <div>Loading...</div>;
  }

  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated }}>
      {children}
    </KeycloakContext.Provider>
  );
};

export default KeycloakProvider;
