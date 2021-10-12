import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import Login from '../login.js';
import Intro from '../intro.js';
import Landing from '../landing.js';

const StackNavigator = createStackNavigator({
    Intro: Intro,
    Login: Login,
    Landing: Landing
});

// const AppSwitchNavigator = createSwitchNavigator({
//     Laading: Landing
// });

export default createAppContainer(StackNavigator);