import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUpItem from '../pages/SignUpItem';
import Dashboard from '../pages/Dashboard';
import RemakePassword from '../pages/RemakePassword';
import SelectType from '../pages/SelectType';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
      <Route path="/select-type" component={SelectType} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signup-item" component={SignUpItem} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/remake-password" component={RemakePassword} />
    </BrowserRouter>
  );
}

export default Routes;
