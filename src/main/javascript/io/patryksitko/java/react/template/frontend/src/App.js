import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import "./p0lyfills";
import Paths from "./paths";
import store from "./store";
import { browserHistory } from "./store/configuration";
import { PyScriptProvider } from "pyscript-react";

function App() {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <PyScriptProvider>
          <Paths />
        </PyScriptProvider>
      </Router>
    </Provider>
  );
}

export default App;
