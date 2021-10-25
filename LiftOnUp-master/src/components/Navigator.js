import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login.js';
import Intro from '../screens/Intro.js';
import Register from '../screens/Register';
import RestPassword from '../screens/Restpassword.js'
import Home from '../screens/Home.js'
// import Workout from '../screens/workout.js'

const StackNavigator = createStackNavigator({
    Intro: Intro,
    Login: Login,
    Register: Register,
    Home:Home,
    RestPassword: RestPassword,
    // Workout: Workout,
});
export default createAppContainer(StackNavigator);