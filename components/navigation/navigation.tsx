import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../home/home';
import StepFour from '../step/stepFour';
import StepOne from '../step/stepOne';
import StepThree from '../step/stepThree';
import StepTwo from '../step/stepTwo';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StepOne"
          component={StepOne}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StepTwo"
          component={StepTwo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StepThree"
          component={StepThree}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StepFour"
          component={StepFour}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
