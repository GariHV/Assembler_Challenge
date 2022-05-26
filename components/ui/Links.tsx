import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CelebrationIcon from '@mui/icons-material/Celebration';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import GroupIcon from '@mui/icons-material/Group';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@nextui-org/react';
import { UserContext } from '../../context/userContext';

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
  const { handleChangeSearch } = React.useContext(UserContext);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setValue(newValue);
    handleChangeSearch(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        marginLeft: '1em',
        width: '50%',
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
      <BottomNavigationAction
        classes={classes}
        style={{ color: 'white' }}
        label="Party"
        value="party"
        icon={<CelebrationIcon />}
      />
      <BottomNavigationAction
        classes={classes}
        style={{ color: 'white' }}
        label="Happy"
        value="happy"
        icon={<InsertEmoticonIcon />}
      />
      <BottomNavigationAction
        classes={classes}
        style={{ color: 'white' }}
        label="Group"
        value="group"
        icon={<GroupIcon />}
      />
    </BottomNavigation>
  );
}
