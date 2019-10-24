import React, { Component } from "react";
import Home from "./Components/Home";
import { Provider } from "react-redux";

// Store
import store from "./redux";

class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
