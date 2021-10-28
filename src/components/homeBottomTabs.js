import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import MyPlan from '../screens/myPlan.js';
import EditDay1 from '../screens/editDay1.js';
// import Training from '../screens/TrainingScreen';
// import WeeklyPlan from '../screens/WeklyPlanScreen';
// import Browse from '../screens/BrowseScreen';

const Tab = createBottomTabNavigator();

const HomeBottomTabs = () => {
  return (
    <Tab.Navigator
    
      >
      <Tab.Screen name="MyPlan" component={MyPlan} />
      <Tab.Screen name="EditDay1" component={EditDay1} />
      {/* <Tab.Screen name="Home" component={Browse} /> */}
      {/* <Tab.Screen name="Plan" component={WeeklyPlan} />
      <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
};

export default HomeBottomTabs;
