import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../login.js';
import Intro from '../intro.js';

const StackNavigator = createStackNavigator({
    Intro: Intro,
    Login: Login,
  
});
export default createAppContainer(StackNavigator);