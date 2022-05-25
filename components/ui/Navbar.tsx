import { Avatar, useTheme } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { UserContext } from '../../context/userContext';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LabelBottomNavigation from './Links';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const Navbar = () => {
  const { theme } = useTheme();
  const { userGlobal } = React.useContext(UserContext);

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
      <LabelBottomNavigation />
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
      <Search
        style={{
          position: 'absolute',
          color: 'white',
          right: '200px',
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      {userGlobal ? (
        <Avatar
          style={{
            position: 'absolute',
            color: 'white',
            right: '100px',
          }}
        />
      ) : (
        <Button
          style={{
            position: 'absolute',
            color: 'white',
            cursor: 'pointer',
            right: '20px',
          }}
        >
          Login
        </Button>
      )}
      {userGlobal ? (
        <MeetingRoomIcon
          fontSize="large"
          style={{
            position: 'absolute',
            color: 'white',
            cursor: 'pointer',
            right: '20px',
          }}
        />
      ) : null}
    </div>
  );
};
