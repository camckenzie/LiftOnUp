import * as React from 'react';
import {Component} from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default class MyTabs extends Component{
  render() {
    return (
      <NavigationContainer>
        
        <Tab.Navigator>
          <Tab.Screen name="Workout" component={WorkoutScreen} />
          <Tab.Screen name="Exercises" component={ExercisesScreen} />
          <Tab.Screen name="Discover" component={DiscoverScreen} />
          <Tab.Screen name="Progress" component={ProgressScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
        
      </NavigationContainer>
    );
  };
}

const Workout = [
  {
    id: 1,
    name: "Day 1",
    excercise: "    Training",
    state: "    Not Started",
  },
  {
    id: 2,
    name: "Day 2",
    excercise: "    Cardio",
    state: "    Not Started",
  },
  {
    id: 3,
    name: "Day 3",
    excercise: "    Training",
    state: "    Not Started",
  },
  {
    id: 4,
    name: "Day 4",
    excercise: "    Cardio",
    state: "    Not Started",
  },
  {
    id: 5,
    name: "Day 5",
    excercise: "    Training",
    state: "    Not Started",
  },
  {
    id: 6,
    name: "Day 6",
    excercise: "    Cardio",
    state: "    Not Started",
  },
  {
    id: 7,
    name: "Day 7",
    excercise: "    Training",
    state: "    Not Started",
  },
];

function Item({name,excercise,state}){
  
  return(
    <TouchableOpacity style={styles.listItem}>
      <Text styles={styles.listName}>{name}</Text>
      <Text styles={styles.listExcercise}>{excercise}</Text>
      <Text styles={styles.listState}>{state}</Text>
    </TouchableOpacity>
  );
}


function WorkoutScreen() {
  return (
    <View>
      <Text style={styles.headerText}>Current</Text>
      <FlatList 
      data={Workout} 
      renderItem={({item}) => (
          <Item name={item.name} excercise={item.excercise} state={item.state} />
        )} 
      />
    </View>
  );
}


















function ExercisesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Exercises Screen</Text>
    </View>
  );
}
function DiscoverScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Discover Screen</Text>
    </View>
  );
}
function ProgressScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Progress Screen</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} option={{headrShown:false}} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default MyTabs;

const styles = StyleSheet.create(
  {
    headerText:{ textAlign:"center", fontWeight:"bold"},
    listItem: {
      backgroundColor:"#ddd",
      flexDirection:"row",
      marginVertical: 10,
      padding: 10,
    },
    listName: {
      flex: 0.5,
      alignItems:"center",
      textAlign: "center",
      fontSize:33,
    },
    listExcercise: {
      flex: 0.5,
      alignItems:"center",
      textAlign: "center",
    },
    listState: {
      flex: 0.5,
      alignItems:"flex-end",
    },
  }
)