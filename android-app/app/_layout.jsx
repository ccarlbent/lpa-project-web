import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pagelayout1 from './pagelayout1/index';
import Pagelayout2 from './pagelayout2/index';
import Checkout from './checkout/index';
import Congrats from './congrats/index';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    
      <Stack.Navigator initialRouteName="login/index">
        <Stack.Screen 
          name="login/index" 
          component={Pagelayout1} 
          options={{ headerShown: false }}>
        </Stack.Screen>
        <Stack.Screen 
          name="pagelayout2/index" 
          component={Pagelayout2} 
          options={{ headerShown: false }} />
        <Stack.Screen 
          name="checkout/index" 
          component={Checkout} 
          options={{ headerShown: false }} />
        <Stack.Screen 
          name="congrats/index" 
          component={Congrats} 
          options={{ headerShown: false }} />
      </Stack.Navigator>
    
  );
}
