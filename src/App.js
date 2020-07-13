import React from 'react';
import './antd.styles.css';
import 'antd/dist/antd.css';
import './App.css';
import { Menu } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Triplist } from './views/triplist';
import {TripForm} from './views/trip-form';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Menu mode=
            'horizontal'>
            <Menu.Item><Link to="/">Spis wycieczek</Link></Menu.Item>
            <Menu.Item><Link to="/hotel">Hotel</Link></Menu.Item>
            <Menu.Item><Link to="/tourleader">Pilot</Link></Menu.Item>
            <Menu.Item><Link to="/guide">Przewodnik</Link></Menu.Item>
            <Menu.Item><Link to="/restaurant">Restauracja</Link></Menu.Item>
            <Menu.Item><Link to="/transport">Transport</Link></Menu.Item>
            <Menu.Item><Link to="/others">Inne</Link></Menu.Item>
            <Menu.Item><Link to="/calendar">Kalendarz</Link></Menu.Item>
            <Menu.Item><Link to="/tasks">Zadania</Link></Menu.Item>
            <Menu.Item><Link to="/reminder">Przypomnienia</Link></Menu.Item>
          </Menu>


          <Switch>
          <Route exact={true} path="/">
              <Triplist/>
           </Route>
           <Route exact={true} path="/trip-form">
              <TripForm/>
           </Route>
            <Route path="/hotel">
              hotel
           </Route>
           <Route path="/tourleader">
              Pilot
           </Route>
           <Route path="/guide">
              Przewodnik
           </Route>
           <Route path="/restaurant">
              Restauracja
           </Route>
           <Route path="/transport">
              Transport
           </Route>
           <Route path="/others">
              Inne
           </Route>
           <Route path="/calendar">
              Kalendarz
           </Route>
           <Route path="/tasks">
              Zadania
           </Route>
           <Route path="/reminder">
              Przypomnienia
           </Route>



          </Switch>
        </header>
      </Router>

    </div>
  );
}

export default App;
