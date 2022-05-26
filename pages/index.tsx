import { NextPage } from 'next';
import React, { useContext } from 'react';
import { Layout } from '../components/layouts';
import { Navbar } from '../components/ui';
import { getGifs } from '../api';
import { useEffect } from 'react';
import { Container } from '@nextui-org/react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { UserContext } from '../context/userContext';
import { useRouter } from 'next/router';

import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
} from 'firebase/storage';
import firebaseApp from '../lib/firebase/credentials';

const storage = getStorage(firebaseApp);

const Home: NextPage = () => {
  const {
    search,

    gifsState,
    setGifsState,

    googleGifs,
    setGoogleGifs,
  } = useContext(UserContext);
  const router = useRouter();
  const gifsList = ref(storage, 'documentos/');

  useEffect(() => {
    listAll(gifsList).then((gifs: any) => {
      gifs.items.forEach((gif: any) => {
        console.log(gif);
        getDownloadURL(gif).then((url: any) => {
          setGoogleGifs((prev: any) => [...prev, { url }]);
        });
      });
    });
  }, []);

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

  return (
    <Layout>
      <Navbar search={search} />
      <Container>
        <Typography variant="h3" style={{ margin: '10px 0px' }}>
          Pool of Gifs for: {search}
        </Typography>
        <hr style={{ margin: '0px 0px 20px 0px' }} />
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
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="h3"
          style={{ margin: '60px 0px 20px 0px' }}
        >
          Community Gifs
        </Typography>
        <hr style={{ margin: '0px 0px 20px 0px' }} />
        <Grid container spacing={3}>
          {googleGifs !== [] &&
            googleGifs.map((gif: any) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={gif.url}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={gif.url}
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
