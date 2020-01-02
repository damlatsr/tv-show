import React from "react";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import { Switch, Route, Redirect } from "react-router-dom";
import SearchResultPage from "./pages/SearchResultPage";
import ShowPage from "./pages/ShowPage";

class App extends React.Component {
  render() {
    return React.createElement(
      Switch,
      null,
      React.createElement(Route, {
        path: "/show/:id",
        component: ShowPage
      }),
      React.createElement(Route, {
        path: "/search",
        component: SearchPage
      }),
      React.createElement(Route, {
        path: "/:search",
        component: SearchResultPage
      }),
      React.createElement(Redirect, {
        push: true,
        to: "/batman"
      })
    );
  }
}

export default App;
