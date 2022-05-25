import { NextPage } from 'next';
import React from 'react';
import { Layout } from '../components/layouts';
import { Navbar } from '../components/ui';
import { UserContext } from '../context/userContext';
import { getAuth } from 'firebase/auth';
import firebaseApp from '../lib/firebase/credentials';

const Home: NextPage = () => {
  const { userGlobal } = React.useContext(UserContext);
  const auth = getAuth(firebaseApp);

  return (
    <Layout>
      <Navbar />
    </Layout>
  );
};

export default Home;
