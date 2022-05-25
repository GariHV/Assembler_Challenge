import { Button, Card, Input, Spacer, Text } from '@nextui-org/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../components/assets/logo.png';
import firebaseApp from '../lib/firebase/credentials';
import { getAuth } from 'firebase/auth';

const Login: NextPage = () => {
  const auth = getAuth(firebaseApp);
  const router = useRouter();
  const handleClick = () => {
    router.push('/signin');
  };

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
          display: 'flex',
          width: '50%',
          height: '40em',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image src={logo} width={200} height={200} />
        <form
          style={{
            display: 'flex',
            width: '50%',
            height: '15em',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Input
            clearable
            bordered
            labelPlaceholder="E-Mail"
            initialValue=""
          />
          <Spacer y={1.5} />
          <Input.Password
            clearable
            bordered
            labelPlaceholder="Password"
            initialValue=""
          />
          <Spacer y={1.5} />
          <Button>Sign up</Button>
        </form>
        <Spacer y={1} />
        <Button>Google</Button>
        <Spacer y={1.5} />
        <Text style={{}}>Already have an account?</Text>
        <Text
          onClick={() => handleClick()}
          style={{ color: 'green' }}
        >
          Sign in
        </Text>
      </Card>
    </div>
  );
};

export default Login;
