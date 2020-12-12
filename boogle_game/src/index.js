import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Play from './play_game';
import Home from './Home.js';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

  </React.StrictMode>,
  document.getElementById('root')
);

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component = {Home}>
          <Redirect from='/Home' to="/play/" />
          <Route path="/play" component= {Play} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
