import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
