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
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import firebaseApp from '../lib/firebase/credentials';
import { UserContext } from '../context/userContext';

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

export default function SignIn() {
  const { login } = React.useContext(UserContext);
  const router = useRouter();
  const handleClick = () => {
    router.push('/login');
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
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        login(user);
        console.log(user);
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
          Sign in
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
            Sign In
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
            <Text onClick={handleClick} style={{ color: 'gray' }}>
              {"Don't have an account? Sign Up"}
            </Text>
          </Grid>
        </Grid>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
