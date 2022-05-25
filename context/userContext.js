import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userGlobal, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ userGlobal, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
