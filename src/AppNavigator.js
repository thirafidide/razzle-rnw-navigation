import { createSwitchNavigator } from '@react-navigation/core';
import Home from './components/HomeScreen';
import Profile from './components/ProfileScreen';

const AppNavigator = createSwitchNavigator({
  Home,
  Profile,
});

export default AppNavigator;
