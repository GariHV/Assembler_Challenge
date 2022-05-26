import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { getGifs } from '../api';
import firebaseApp from '../lib/firebase/credentials';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userGlobal, setUser] = useState(null);
  const [search, setSearch] = useState('friendship');
  const [gifsState, setGifsState] = useState([]);
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleSearch = async () => {
    setGifsState(
      await getGifs(search).then((res) => {
        return res.data;
      })
    );
  };

  const handleChangeSearch = (e) => {
    setSearch(e);
  };

  return (
    <UserContext.Provider
      value={{
        userGlobal,
        search,
        handleChangeSearch,
        gifsState,
        setGifsState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
