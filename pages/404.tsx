import { Card } from '@nextui-org/react';
import { NextPage } from 'next';
import React from 'react';

const NotFound: NextPage = () => {
  return (
    <>
      <div>
        <img />
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100vh',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>404 </h1>

        <p> Page not found</p>
      </div>
    </>
  );
};

export default NotFound;
