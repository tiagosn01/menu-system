import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import User from '../api/user.json';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const user = localStorage.getItem('@MenuSystem:user');

      setData({ user: JSON.parse(user) });

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ name, email }) => {
    // const response = await api.post('login', {
    //   name,
    //   email,
    // });

    if (name === User.user.name && email === User.user.email) {
      const user = { ...User.user };
      localStorage.setItem('@MenuSystem:user', JSON.stringify(user));
      setData({ user });
    }

    // const { user } = response.data;

    // api.defaults.headers.authorization = `Bearer ${token}`;
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem('@MenuSystem:token');
    localStorage.removeItem('@MenuSystem:user');

    setData({});
  }, []);

  const updateUser = useCallback(
    async user => {
      await localStorage.setItem('@MenuSystem:user', JSON.stringify(user));

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
