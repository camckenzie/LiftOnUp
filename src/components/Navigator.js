import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/Login.js";
import Intro from "../screens/Intro.js";
import Register from "../screens/Register";
import RestPassword from "../screens/Restpassword.js";
import Home from "../screens/homeApp.js";
import EditDay1 from "../screens/workout/editDay1.js";
import AccountScreen from "../screens/account/AccountScreen.js";
import SettingsScreen from "../screens/account/SettingsScreen.js";
import EditProfileScreen from "../screens/account/EditProfileScreen.js";
import ProgressScreen from "../screens/progress/ProgressScreen";
import ExerciseDetailsScreen from "../screens/exercise/ExerciseDetailsScreen";
import ExerciseHomeScreen from '../screens/exercise/ExerciseHomeScreen';
import CreateWorkout from '../screens/workout/createWorkout';
const StackNavigator = createStackNavigator({
  Intro: Intro,
  Login: Login,
  RestPassword: RestPassword,
  Register: Register,
  Home: Home,
  CreateWorkout:CreateWorkout,
  AccountScreen: AccountScreen,
  SettingsScreen: SettingsScreen,
  EditProfileScreen: EditProfileScreen,
  ProgressScreen: ProgressScreen,
  ExerciseHomeScreen: ExerciseHomeScreen,
  ExerciseDetailsScreen: ExerciseDetailsScreen,
  // AddWorkout:AddWorkout,
  EditDay1: EditDay1,
  ExerciseHomeScreen: ExerciseHomeScreen,
});

export default createAppContainer(StackNavigator);
