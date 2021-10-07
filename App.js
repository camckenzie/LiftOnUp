import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ForgotPassword from "./src/forgotPassword.js";
import Login from "./src/login.js";


const Navigator = createStackNavigator({
  Login: { screen: Login },
  ForgotPassword: { screen: ForgotPassword}
  // Signup: { screen: Signup },
  // Today: { screen: Today },
  // Profile: { screen: Profile },
  // Exercise: { screen: Exercise },
});

const App = createAppContainer(Navigator);

export default App;