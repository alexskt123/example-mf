import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => <App />,
  errorBoundary(err, info, props) {
    return (
      <h1>
        An error has occurred: {err} {info} {props}
      </h1>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
