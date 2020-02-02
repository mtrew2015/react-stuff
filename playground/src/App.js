import React from 'react';
import {Route} from 'react-router-dom';
import {Routes} from './Constants/routes';
import Landing from './Components/Landing';
import SignUp from './Components/SignUp';
import Login from './Components/Login'

import './App.scss';

function App() {
  const COMPONENT_MAP = {
    'Login': Login,
    'SignUp': SignUp, 
    'Landing': Landing 
  }
  return (
    <div className="App">
      <h1>React Playground</h1>
      {Routes.map(r => {
        return <Route component={COMPONENT_MAP[r.component]} path={r.path} exact={r.exact}/>
      })}
      {}
    </div>
  );
}

export default App;
