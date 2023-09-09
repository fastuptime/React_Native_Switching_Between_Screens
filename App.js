import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import main from './screens/main'; // Ekran 1
import screen2 from './screens/screen2'; // Ekran 2

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="main"
          component={main}
          options={{
            headerShown: false, // False yaparak header'ı gizleyebilirsiniz.
          }}
        />
        <Stack.Screen
          name="screen2"
          component={screen2}
          options={{ // Header'ı özelleştirmek için bu şekilde kullanabilirsiniz.
            title: 'Ekran 2',
            headerStyle: {
              backgroundColor: '#f4511e', 
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;