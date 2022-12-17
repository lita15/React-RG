import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// TODO: answer here

const AnswerHere = () => (
  <App /> // TODO: replace this
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <AnswerHere />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
