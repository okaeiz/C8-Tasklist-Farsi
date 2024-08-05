import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Tasks from "./components/tasks";
import Processes from "./components/processes";
import Info from "./components/info";
import Login from "./components/login";
import Header from "./components/header";
import background from "./assets/asfalt-dark.png";
import i18n from "./i18n";
import Settings from "./components/settings";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"; // A 404 page component

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    console.log("Authentication state:", authenticated);
  }, [authenticated]);

  return (
    <div className="App">
      {/* Header component, always visible */}
      <Header />

      {/* Main content area */}
      <main
        style={{
          minHeight: "100vh", // Ensures footer stays at the bottom
          background: `url(${background}) no-repeat center center fixed`, // Adjust background styles as needed
          // backgroundSize: "",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              authenticated ? (
                <Navigate to="/tasks" replace />
              ) : (
                <Login setAuthenticated={setAuthenticated} />
              )
            }
          />
          <Route
            path="/tasks"
            element={
              authenticated ? <Tasks /> : <Navigate to="/login" replace />
            }
          />
          <Route path="/processes" element={<Processes />} />
          <Route path="/info" element={<Info />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Catch-all route for 404 */}
        </Routes>
      </main>

      {/* Footer component, always visible */}
      {/* <Footer /> */}
    </div>
  );
}
