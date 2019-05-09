import AppNavigator from './AppNavigator';
import { AppRegistry } from 'react-native';
import createBrowserApp from '@react-navigation/web/dist/createBrowserApp';

// register the app
AppRegistry.registerComponent('App', () => createBrowserApp(AppNavigator));
AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

if (module.hot) {
  module.hot.accept();
}
