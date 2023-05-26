import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import App from "./App";
import { counter } from "./reducer";

const store = createStore(counter);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App store={store} />
  </StrictMode>,
  rootElement
);
