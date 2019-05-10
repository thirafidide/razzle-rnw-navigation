import React from 'react';
import { View, Text } from 'react-native';

const ProfileScreen = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};
ProfileScreen.path = 'profile/:name';
ProfileScreen.navigationOptions = {
  title: 'Profile',
};

export default ProfileScreen;
