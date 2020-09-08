import React from 'react';

import { useAuth } from '../../hooks/auth';

const Dashboard = () => {
  const { signOut } = useAuth();

  return (
    <>
      <h1>Dashboard</h1>
      <button type="button" onClick={signOut}>
        Sair
      </button>
    </>
  );
};

export default Dashboard;
