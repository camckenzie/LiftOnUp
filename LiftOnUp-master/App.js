// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

//  import React from 'react';
//  // import type {Node} from 'react';
//  import { createAppContainer } from 'react-navigation';
//  import { createStackNavigator } from 'react-navigation-stack';
//  import Login from './src/screens/Login';
//  import Register from './src/screens/Register';
//  import Home from './src/screens/Home';
//  import Reset from './src/screens/Restpassword';
//  import {
//    SafeAreaView,
//    ScrollView,
//    StatusBar,
//    StyleSheet,
//    Text,
//    useColorScheme,
//    View,
//  } from 'react-native';
 
//  import {
//    Colors,
//    DebugInstructions,
//    Header,
//    LearnMoreLinks,
//    ReloadInstructions,
//  } from 'react-native/Libraries/NewAppScreen';
 
//  const RootStack = createStackNavigator(
//    {
//      Login: Login,
//      Register: Register,
//      Home: Home,
//      Reset: Reset,
//    },
//    {
//      initialRouteName: 'Home',
//      defaultNavigationOptions: {
//        headerStyle: {
//          backgroundColor: '#19AC52',
//        },
//        headerTintColor: '#fff',
//        headerTitleStyle: {
//          fontWeight: 'bold',
//        },
//      },
//    },
//  );
//  const RootContainer = createAppContainer(RootStack);
//  export default function App() {
//    return (
//      <RootContainer />
//    )
//  }


import React, {Component} from 'react';
import Navigator from './src/components/Navigator';

export default class App extends Component {
  render() {
    return <Navigator />;
  }
}