import { Card, Spacer } from '@nextui-org/react';
import { NextPage } from 'next';
import React, { useEffect } from 'react';
import Image from 'next/image';
import notfound from '../components/assets/notfound.gif';
import { useRouter } from 'next/router';

const NotFound: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 6000);
  }, []);

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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image src={notfound} width={200} height={200} />
        <Spacer y={2} />
        <h1>404 </h1>
        <p> Page not found</p>
      </div>
    </>
  );
};

export default NotFound;
