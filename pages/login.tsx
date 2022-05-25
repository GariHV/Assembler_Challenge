import { Button, Card } from '@nextui-org/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Login: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '60em',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        style={{
          width: '70%',
          height: '30em',
        }}
      >
        Test
        <Button>Test</Button>
      </Card>
    </div>
  );
};

export default Login;
