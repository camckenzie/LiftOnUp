import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login.js';
import Intro from '../screens/Intro.js';
import Register from '../screens/Register';
import RestPassword from '../screens/Restpassword.js'
import Home from '../screens/Home.js'
import MyPlan from '../screens/myPlan.js'
import EditDay1 from '../screens/editDay1.js'

const StackNavigator = createStackNavigator({
    Intro: Intro,
    Login: Login,
    RestPassword: RestPassword,
    Register: Register,
    Home:Home,
    MyPlan: MyPlan,
    EditDay1:EditDay1,
    
   
});


export default createAppContainer(StackNavigator);