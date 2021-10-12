import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/login.js';
import Intro from '../screens/intro.js';
import Registration from '../screens/registration.js';

const StackNavigator = createStackNavigator({
    Intro: Intro,
    Login: Login,
    Registration: Registration,
  
});
export default createAppContainer(StackNavigator);