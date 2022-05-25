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

export default function LabelBottomNavigation() {
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
        width: 800,
        backgroundColor: theme?.colors.gray900.value,
        color: 'white',
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        classes={classes}
        label="Friendship"
        value="friendship"
        icon={<PeopleOutlineIcon />}
      />
      <BottomNavigationAction
        classes={classes}
        label="Love"
        value="love"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        classes={classes}
        label="Sad"
        value="sad"
        icon={<SentimentVeryDissatisfiedIcon />}
      />
      <BottomNavigationAction
        classes={classes}
        label="Glamour"
        value="glamour"
        icon={<AppShortcutIcon />}
      />
    </BottomNavigation>
  );
}
