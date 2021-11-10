import {createAppContainer,createBottomTabNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login.js';
import Intro from '../screens/Intro.js';
import Register from '../screens/Register';
import RestPassword from '../screens/Restpassword.js'
import Home from '../screens/homeApp.js'
import EditDay1 from '../screens/editDay1.js'
import AccountScreen from '../screens/AccountScreen.js'
import ProgressScreen from '../screens/ProgressScreen';
import ExerciseHomeScreen from '../screens/ExerciseHomeScreen';
import ExerciseDetailsScreen from '../screens/ExerciseDetailsScreen';
import CreateWorkout from '../screens/createWorkout';
// import ExerciseHomeScreen from '../screens/ExerciseHomeScreen';

const StackNavigator = createStackNavigator({
    // Intro: Intro,
    // Login: Login,
    // RestPassword: RestPassword,
    // Register: Register,
    Home:Home,
    AccountScreen:AccountScreen,
    // ProgressScreen:ProgressScreen,
    // ExerciseHomeScreen:ExerciseHomeScreen,
    // ExerciseDetailsScreen:ExerciseDetailsScreen,
    // CreateWorkout:CreateWorkout,
    // // AddWorkout:AddWorkout,
    // EditDay1:EditDay1,
    // ExerciseHomeScreen:ExerciseHomeScreen,
   
});


export default createAppContainer(StackNavigator);