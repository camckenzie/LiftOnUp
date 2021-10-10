// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import Login from "./src/login.js";


// const Navigator = createStackNavigator({
//   Login: { screen: Login },
//   // Signup: { screen: Signup },
//   // Today: { screen: Today },
//   // Profile: { screen: Profile },
//   // Exercise: { screen: Exercise },
// });

// const App = createAppContainer(Navigator);

// export default App;
import React, {Component} from 'react';

import Navigator from './src/components/Navigator';
export default class App extends Component {
  render() {
    return <Navigator />;
  }
}