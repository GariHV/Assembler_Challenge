import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import logo from '../components/assets/logo.png';
import { Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import firebaseApp from '../lib/firebase/credentials';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="localhost:3000">
        PYF
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const auth = getAuth(firebaseApp);

export default function Login() {
  const [newUser, setNewUser] = React.useState(true);
  const router = useRouter();
  const handleClick = () => {
    setNewUser(!newUser);
  };
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();
    if (email && password) {
      try {
        if (newUser) {
          const user = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          router.push('/');
        } else {
          const user = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          router.push('/');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image src={logo} width={200} height={200} />
        <Typography component="h1" variant="h5">
          {newUser ? 'Sign up' : 'Sign in'}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            style={{ color: 'white', backgroundColor: 'black' }}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {newUser ? 'Sign up' : 'Sign in'}
          </Button>
        </Box>
        <Button
          style={{ color: 'white', backgroundColor: 'black' }}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Google
        </Button>
        <Grid container>
          <Grid item>
            <Text
              onClick={handleClick}
              style={{ color: 'gray', cursor: 'pointer' }}
            >
              {"Don't have an account? Sign In"}
            </Text>
          </Grid>
        </Grid>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
