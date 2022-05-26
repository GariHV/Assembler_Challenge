import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  Container,
  CssBaseline,
  Input,
  TextField,
} from '@mui/material';
import { UserContext } from '../../context/userContext';
import firebaseApp from '../../lib/firebase/credentials';
import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from 'firebase/storage';

export default function ModalUpload({ open, setOpen }) {
  const storage = getStorage(firebaseApp);
  const { setGoogleGifs } = React.useContext(UserContext);
  const handleClose = () => setOpen(false);
  const gifsList = ref(storage, 'documentos/');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAdd = async (e, urlDownload) => {
    const file = e.target.files[0];
    const archivoRef = ref(storage, `documentos/${file.name}`);
    uploadBytes(archivoRef, file).then(() => {
      urlDownload = getDownloadURL(archivoRef);
      listAll(gifsList)
        .then((gifs) => {
          gifs.items.forEach((gif) => {
            console.log(gif);
            getDownloadURL(gif).then((url) => {
              setGoogleGifs((prev) => [...prev, { url }]);
            });
          });
          handleClose();
        })
        .catch((error) => {});
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            width: '50%',
            left: '25%',
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            style={{ marginTop: '50px' }}
          >
            Upload
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
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
            />
            <label htmlFor="contained-button-file">
              <Input
                onChange={handleAdd}
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                style={{ display: 'none' }}
              />
              <Button
                variant="contained"
                component="span"
                style={{ marginBottom: '50px' }}
              >
                Upload
              </Button>
            </label>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}
