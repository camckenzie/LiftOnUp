import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/login.js';
import Intro from '../screens/intro.js';
import Registration from '../screens/registration.js';
import ForgotPassword from '../screens/forgotpassword.js'

const StackNavigator = createStackNavigator({
    Intro: Intro,
    Login: Login,
    Registration: Registration,
    ForgotPassword: ForgotPassword,
});
export default createAppContainer(StackNavigator);