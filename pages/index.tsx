import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import React from 'react';
import { Layout } from '../components/layouts';
import { Navbar } from '../components/ui';
import { UserContext } from '../context/userContext';
import { getAuth } from 'firebase/auth';
import firebaseApp from '../lib/firebase/credentials';
import { giphyApi } from '../api';

const Home: NextPage = (props) => {
  const { userGlobal } = React.useContext(UserContext);
  const auth = getAuth(firebaseApp);
  console.log(props);

  return (
    <Layout>
      <Navbar />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await giphyApi.get(
    '/search?api_key=GLym9agNBp8lNCQWODUF6gIUWUDJHLmk&q=happy&limit=25&offset=0&rating=g&lang=en'
  );
  console.log(data);

  return {
    props: {
      gifs: data.data,
    },
  };
};

export default Home;
