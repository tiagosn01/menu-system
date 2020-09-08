import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const token = localStorage.getItem('@NextSis:token');
      const user = localStorage.getItem('@NextSis:user');

      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ token, user: JSON.parse(user) });
      }
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ cpf_cnpj, password }) => {
    const response = await api.post('login', {
      cpf_cnpj,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@NextSis:token', token);
    localStorage.setItem('@NextSis:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem('@NextSis:token');
    localStorage.removeItem('@NextSis:user');

    setData({});
  }, []);

  const updateUser = useCallback(
    async user => {
      await localStorage.setItem('@NextSis:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, loading, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
