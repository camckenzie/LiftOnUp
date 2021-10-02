import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./src/login.js";


const Navigator = createStackNavigator({
  Login: { screen: Login },

});

const App = createAppContainer(Navigator);

export default App;