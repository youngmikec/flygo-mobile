import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/auth/WelcomeScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import SignupScreen from '../screens/auth/SignupScreen';

const stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <stack.Navigator initialRouteName='Welcome'>
      <stack.Screen 
        name='Welcome' 
        component={WelcomeScreen} 
        options={{ headerShown: false }} 
      />
      <stack.Screen 
        name='Signin' 
        component={SignInScreen} 
        options={{ headerShown: false }} 
      />
      <stack.Screen 
        name='Signup' 
        component={SignupScreen} 
        options={{ headerShown: false }} 
      />
    </stack.Navigator>
  )
}

export default AuthNavigation;