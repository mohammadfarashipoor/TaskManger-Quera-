import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./lib/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
