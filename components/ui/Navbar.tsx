import { Avatar, useTheme } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { UserContext } from '../../context/userContext';
import { Button, Input } from '@mui/material';
import Links from './Links';
import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from '../../lib/firebase/credentials';
import { useRouter } from 'next/router';

const auth = getAuth(firebaseApp);

export const Navbar = ({ children, search }: any) => {
  const router = useRouter();
  const { theme } = useTheme();
  const { userGlobal, handleChangeSearch } =
    React.useContext(UserContext);

  const handleSignOut = () => {
    signOut(auth);
  };
  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '5em',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image src={logo} width={100} height={100} />
      <Links />
      {userGlobal ? (
        <Button
          style={{
            position: 'absolute',
            color: 'white',
            right: '500px',
            border: '1px solid white',
          }}
        >
          Upload
        </Button>
      ) : null}

      <form
        style={{
          position: 'absolute',
          color: 'white',
          right: '200px',
        }}
        onSubmit={(e: any) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const content = data.get('content')?.toString();
          handleChangeSearch(content);
        }}
      >
        <Input
          name="content"
          style={{
            backgroundColor: 'white',
            color: 'black',
          }}
        ></Input>
        <Button
          type="submit"
          style={{
            backgroundColor: 'white',
            color: 'black',
          }}
        >
          Search
        </Button>
      </form>
      {userGlobal ? (
        <Avatar
          size={'xl'}
          src={userGlobal.photoURL}
          style={{
            position: 'absolute',
            color: 'white',
            right: '100px',
          }}
        />
      ) : (
        <Button
          onClick={handleLogin}
          style={{
            position: 'absolute',
            color: 'white',
            cursor: 'pointer',
            right: '20px',
            border: '1px solid white',
          }}
        >
          Login
        </Button>
      )}
      {userGlobal ? (
        <MeetingRoomIcon
          onClick={handleSignOut}
          fontSize="large"
          style={{
            position: 'absolute',
            color: 'white',
            cursor: 'pointer',
            right: '20px',
          }}
        />
      ) : null}
      {children}
    </div>
  );
};
