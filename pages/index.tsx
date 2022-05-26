import { NextPage } from 'next';
import React, { useContext } from 'react';
import { Layout } from '../components/layouts';
import { Navbar } from '../components/ui';
import { getGifs } from '../api';
import { useEffect } from 'react';
import { Container } from '@nextui-org/react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { UserContext } from '../context/userContext';
import { useRouter } from 'next/router';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import firebaseApp from '../lib/firebase/credentials';

const firestore = getFirestore(firebaseApp);

const Home: NextPage = () => {
  const { search, handleChangeSearch, gifsState, setGifsState } =
    useContext(UserContext);
  const [googleGifs, setGoogleGifs] = React.useState([]);
  const router = useRouter();
  console.log(googleGifs);

  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleSearch = async () => {
    setGifsState(
      await getGifs(search).then((res) => {
        return res.data;
      })
    );
  };

  const handleTakeIt = (e: any) => {
    router.push(e);
  };

  const handleTry = (e: any) => {
    handleChangeSearch(e.target.innerHTML);
  };

  return (
    <Layout>
      <Navbar search={search} />
      <Container>
        <Typography variant="h3" style={{ margin: '10px 0px' }}>
          Community Gifs
        </Typography>
        <Grid container spacing={3}>
          {gifsState.map((gif: any) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={gif.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={gif.images.original.url}
                  alt={gif.title}
                  onClick={(e: any) =>
                    handleTakeIt(e.target.currentSrc)
                  }
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {gif.title}
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h3" style={{ margin: '10px 0px' }}>
          Pool of Gifs for: {search}
        </Typography>
        <Grid container spacing={3}>
          {gifsState.map((gif: any) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={gif.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={gif.images.original.url}
                  alt={gif.title}
                  onClick={(e: any) =>
                    handleTakeIt(e.target.currentSrc)
                  }
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {gif.title}
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
