import React from 'react';
import './App.css';
import SearchPage from './pages/SearchPage'
import { Switch, Route, Redirect } from 'react-router-dom'
import SearchResultPage from './pages/SearchResultPage';
import ShowPage from './pages/ShowPage';


class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/show/:id" component={ShowPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/:search" component={SearchResultPage} />
        <Redirect push to="/batman" />
      </Switch>
    );
  }
}

export default App;
