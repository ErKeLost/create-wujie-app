import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
<% if (mainRouter === 'hash') { -%>
import { HashRouter as Router } from "react-router-dom";
<% } -%>
<% if (mainRouter === 'history') { -%>
import { BrowserRouter as Router } from "react-router-dom";
<% } -%>
import "./styles.css";

const basename = process.env.NODE_ENV === "production" ? "/demo-react16/" : "";

if (window.__POWERED_BY_WUJIE__) {
  // eslint-disable-next-line no-undef
  window.__WUJIE_MOUNT = () => {
    ReactDOM.render(
      <Router basename={basename}>
        <App />
      </Router>,
      document.getElementById("root")
    );
  };
  window.__WUJIE_UNMOUNT = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };
} else {
  ReactDOM.render(
    <Router basename={basename}>
      <App />
    </Router>,
    document.getElementById("root")
  );
}
