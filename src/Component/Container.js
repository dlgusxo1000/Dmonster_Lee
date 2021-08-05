import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import Domitory from './Domitory';
import Notice from './Notice';
import Notification from './Notification';
import Menu from './Menu';
import inquiries from './Inquiries';

const Stack = createStackNavigator();

const Container = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions = {{
            headerStyle : {
              elevation : 3,
              shadowOpacity: 1,

            }
          }}
        >
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown : false }}
          />
          <Stack.Screen name="Domitory" component={Domitory} />
          <Stack.Screen name="Notice" component = {Notice} />
          <Stack.Screen name="Notification" component = {Notification} />
          <Stack.Screen name = "Menu" from component = {Menu} />
          <Stack.Screen name = "Inquiries" from component = {inquiries} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  
export default Container;