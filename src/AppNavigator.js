import React from 'react';
import { View, Text } from 'react-native';
import { createSwitchNavigator } from '@react-navigation/core';
import { Link } from '@react-navigation/web';

const HomeScreen = () => {
  return (
    <View>
      <Link routeName="Profile" params={{ name: 'mock' }}>
        <Text>Go To Profile</Text>
      </Link>
    </View>
  );
};
HomeScreen.path = '/';
HomeScreen.navigationOptions = {
  title: 'Home',
};

const ProfileScreen = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};
ProfileScreen.path = '/profile/:name';
ProfileScreen.navigationOptions = {
  title: 'Profile',
};

const AppNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
});

export default AppNavigator;
