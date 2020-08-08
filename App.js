/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './source/store/store';
import Main from './source/component/main';
import SecondCounterScreen from './source/component/secondCounterScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ title: 'Main' }}
            />
            <Stack.Screen
              name="Second Counter"
              component={SecondCounterScreen}
              options={{ title: 'Second Counter' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
