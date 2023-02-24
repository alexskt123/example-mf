import React from "react";
import { Provider } from "react-redux";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { processEnvConfig } from "./common/config/processEnv.config";
import store from "./store";

if (processEnvConfig.IS_DEV) {
  import("./mocks/browser")
    .then(async (browserMock) => {
      await browserMock.worker.start();
    })
    .catch((error) => console.error(error));
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Redirect to="/" />}
          />
          <Route
            path="/example"
            exact
            render={() => <Redirect to="/" />}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
