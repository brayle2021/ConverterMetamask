import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Column,
  Row,
} from "react-native";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screen/home_screen.tsx';
import wallet from './src/screen/wallet.tsx';
import chainIDChange from './src/screen/chainId.tsx';

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider)
}

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="wallet" component={wallet} />
        <Stack.Screen name="chainIDChange" component={chainIDChange} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}