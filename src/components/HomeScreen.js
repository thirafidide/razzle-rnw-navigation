import React from 'react';
import { View, Text } from 'react-native';
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
HomeScreen.path = '';
HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
