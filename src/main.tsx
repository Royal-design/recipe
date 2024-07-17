import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ContextProvider } from "./context/ContextProvider.tsx";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>
);
