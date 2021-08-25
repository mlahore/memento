import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { HomeScreen } from '../components/HomeScreen';

export const AppRouter = () => {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={HomeScreen}/>
        </Switch>
      </div>
    </Router>
  )
}
