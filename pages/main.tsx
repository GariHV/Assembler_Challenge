import { NextPage } from 'next';
import React from 'react';
import { Layout } from '../components/layouts';
import { Navbar } from '../components/ui';
const Main: NextPage = () => {
  return (
    <Layout>
      <Navbar />
    </Layout>
  );
};

export default Main;
