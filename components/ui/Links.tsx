import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@nextui-org/react';

const useStyles = makeStyles(() => ({
  root: {
    color: 'white',
    '&$selected': {
      color: 'white',
    },
  },
  selected: {},
}));

export default function Links() {
  const { theme } = useTheme();
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        marginLeft: '1em',
        width: '30%',
        backgroundColor: theme?.colors.gray900.value,
        color: 'white',
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        classes={classes}
        style={{ color: 'white' }}
        label="Friendship"
        value="friendship"
        icon={<PeopleOutlineIcon />}
      />
      <BottomNavigationAction
        classes={classes}
        style={{ color: 'white' }}
        label="Love"
        value="love"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        classes={classes}
        style={{ color: 'white' }}
        label="Sad"
        value="sad"
        icon={<SentimentVeryDissatisfiedIcon />}
      />
      <BottomNavigationAction
        classes={classes}
        style={{ color: 'white' }}
        label="Glamour"
        value="glamour"
        icon={<AppShortcutIcon />}
      />
    </BottomNavigation>
  );
}
