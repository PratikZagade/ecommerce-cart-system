import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom"; // 👈 changed
import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter> {/* 👈 changed */}
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </StrictMode>
);