import {StatusBar} from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddToCartScreen from './src/screens/AddToCartScreen';
import OnlineShoppingScreen from './src/screens/OnlineShoppingScreen';
import PaymentSuccessfulScreen from './src/screens/PaymentSuccesfulScreen';


import {createStackNavigator,  } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
    return (
       <NavigationContainer>
         <Stack.Navigator
           screenOption  = {{
               header: () => null,
           }} 
         >
           <Stack.Screen name="OnlineScreen" component= {OnlineShoppingScreen} ></Stack.Screen>
           <Stack.Screen name="CartScreen" component= {AddToCartScreen}></Stack.Screen>
           <Stack.Screen name="PaymentScreen" component= {PaymentSuccessfulScreen}></Stack.Screen>

         </Stack.Navigator>


            
     </NavigationContainer>
               

      



        
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  
})