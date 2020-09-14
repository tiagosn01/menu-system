import React from 'react';
import { Route as RoutesDOM, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <RoutesDOM
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
