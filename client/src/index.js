import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthProvider from 'contexts/AuthContext';
import RoutingProvider from 'contexts/RoutingContext';
import ModalProvider from 'contexts/ModalContext';
import EventsProvider from "contexts/EventsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RoutingProvider>
      <AuthProvider>
        <ModalProvider>
          <EventsProvider>
            <App />
          </EventsProvider>
        </ModalProvider>
      </AuthProvider>
    </RoutingProvider>
  </React.StrictMode>
);
