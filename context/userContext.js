import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useState } from 'react';
import firebaseApp from '../lib/firebase/credentials';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userGlobal, setUser] = useState(null);
  const auth = getAuth(firebaseApp);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <UserContext.Provider value={{ userGlobal }}>
      {children}
    </UserContext.Provider>
  );
};
