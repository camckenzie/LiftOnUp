import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, onPress, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyPlan from './myPlan.js'
import { ListItem, Avatar } from 'react-native-elements'
import { black, white } from 'react-native-paper/lib/typescript/styles/colors';
import { color } from 'react-native-reanimated';

// const { navigate } = this.props.navigation;

// const Workout = [
//   {
//     id: 1,
//     name: "Day 1",
//     excercise: "    Training",
//     state: "    Not Started",
//   },
//   {
//     id: 2,
//     name: "Day 2",
//     excercise: "    Cardio",
//     state: "    Not Started",
//   },
//   {
//     id: 3,
//     name: "Day 3",
//     excercise: "    Training",
//     state: "    Not Started",
//   },
//   {
//     id: 4,
//     name: "Day 4",
//     excercise: "    Cardio",
//     state: "    Not Started",
//   },
//   {
//     id: 5,
//     name: "Day 5",
//     excercise: "    Training",
//     state: "    Not Started",
//   },
//   {
//     id: 6,
//     name: "Day 6",
//     excercise: "    Cardio",
//     state: "    Not Started",
//   },
//   {
//     id: 7,
//     name: "Day 7",
//     excercise: "    Training",
//     state: "    Not Started",
//   },
// ];
// const navigationOptions = {
//   title: "Day 1",
// };

// function Item({ name, excercise, state }) {

//   return (
//     <TouchableOpacity
//       style={styles.listItem}>
//       <Text styles={styles.listName}>{name}</Text>
//       <Text styles={styles.listExcercise}>{excercise}</Text>
//       <Text styles={styles.listState}>{state}</Text>
//     </TouchableOpacity>
//     // <View>
//     //    < Button title="Add me"    onPress={(gotoTestStackScreen)} />

//     // </View>
//   );
// }

// function WorkoutScreen() {
//   return (
//     <View style={{ flex: 1 }}>
//       <View >
//         {/* <Text style={styles.headerText}>Current</Text> */}
//         {/* <Button title="Add me"    onPress={() =>navigation.navigate('MyPlan')} /> */}
//         <FlatList
//           data={Workout}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => navigation.navigate("./myPlan.js")}>
//               <Item
//                 name={item.name} excercise={item.excercise} state={item.state}
//               />
//             </TouchableOpacity>

//           )}
//         />
//       </View>
//     </View>
//   );
// }

// function ProfileScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile!</Text>
//       {/* <Text>Welcome {user.email}</Text> */}
//     </View>
//   );
// }

// function DiscoverScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Discover!</Text>
//     </View>
//   );
// }

// function ExercisesScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Exercises!</Text>
//     </View>
//   );
// }
// function ProgressScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Progress!</Text>
//     </View>
//   );
// }
// const styles = StyleSheet.create(
//   {
//     headerText: { textAlign: "center", fontWeight: "bold" },
//     listItem: {
//       backgroundColor: "#ddd",
//       flexDirection: "row",
//       marginVertical: 10,
//       padding: 10,
//     },
//     listName: {
//       flex: 0.5,
//       alignItems: "center",
//       textAlign: "center",
//       fontSize: 33,
//     },
//     listExcercise: {
//       flex: 0.5,
//       alignItems: "center",
//       textAlign: "center",
//     },
//     listState: {
//       flex: 0.5,
//       alignItems: "flex-end",
//     },
//   }
// )
// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Workout" component={WorkoutScreen}
//         options={{
//           tabBarLabel: 'Workout',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="home" color={'#004d99'} size={size} />
//           ),
//         }} />
//       <Tab.Screen name="Profile" component={ProfileScreen}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="user" type='font-awesome' color={'#004d99'} size={size} />
//           ),
//         }} />
//       <Tab.Screen name="Discover" component={DiscoverScreen}
//         options={{
//           tabBarLabel: 'Discover',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="compass" type='font-awesome' color={'#004d99'} size={size} />
//           ),
//         }} />

//       <Tab.Screen name="Exercises" component={ExercisesScreen}
//         options={{
//           tabBarLabel: 'Exercises',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="gears" type='font-awesome' color={'#004d99'} size={size} />
//           ),
//         }} />
//       <Tab.Screen name="Progress" component={ProgressScreen}
//         options={{
//           tabBarLabel: 'Progress',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="calendar" type='font-awesome' color={'#004d99'} size={size} />
//           ),
//         }} />

//     </Tab.Navigator>
//   );
// }


export default function Home({ navigation }) {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
}, []);

if (initializing) return null;

if (!user) {
    return navigation.navigate('Login');
}
  

  // return (

  //   <NavigationContainer>
  //     <View style={{ flexDirection: 'row', width: "100%" }}>
  //       <TouchableOpacity style={{ width: 100, height: 50, marginLeft: 2, justifyContent: "center", backgroundColor: '#00264d' }} onPress={() => navigation.navigate('MyPlan')} >
  //         <Text style={{ color: "rgba(255,255,255,1)", fontSize: 13, textAlign: "center", fontWeight: "bold" }}>Add Workout</Text>
  //       </TouchableOpacity>
  //       <Text style={{ marginVertical: 15, marginHorizontal: 20, justifyContent: "center" }} >{user.email}</Text>
  //       <TouchableOpacity style={{ width: 100, marginRight: 0, justifyContent: "center", backgroundColor: '#00264d' }} onPress={() => { auth().signOut() }}>
  //         <Text style={{color: "rgba(255,255,255,1)",fontSize: 13,textAlign: "center",fontWeight: "bold"}}>Logout</Text>
  //       </TouchableOpacity>
  //     </View>
  //     <MyTabs/>
  //   </NavigationContainer>
  // );
  const width = `${50}%`;
  return (

    <ScrollView>
      <View style={{ backgroundColor: 'green', justifyContent: "center" }}>
        <Text style={{ marginVertical: 15, color: '#fff', fontSize: 20, marginHorizontal: 20, textAlign: 'center', fontWeight: 'bold', paddingTop: 10, paddingBottom: 10 }} >Hi {user.email}</Text>
      </View>
      <View style={styles1.container}>
        <View style={[styles1.wrapper, { width: width }]}>
          <TouchableOpacity onPress={() => navigation.navigate('Workout')}>
            <View style={styles1.box}>
              <Image style={{ width: 140, height: 140, marginLeft: 15 }} source={require('../../assets/Workouts/add_image.png')} />
              <Text style={{ color: '#fff', textAlign: "center", fontSize: 20 }}>Workout</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles1.wrapper, { width: width }]}>
          <TouchableOpacity onPress={() => navigation.navigate('createWorkout')}>
            <View style={styles1.box}>
              <Image style={{ width: 140, height: 140, marginLeft: 15 }} source={require('../../assets/Workouts/start_new.png')} />
              <Text style={{ color: '#fff', textAlign: "center", fontSize: 20 }}>Excercise</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles1.wrapper, { width: width }]}>
          <TouchableOpacity onPress={() => navigation.navigate('showWorkout')}>
            <View style={styles1.box}>
              <Image style={{ width: 140, height: 140, marginLeft: 15 }} source={require('../../assets/Workouts/follow.png')} />
              <Text style={{ color: '#fff', textAlign: "center", fontSize: 20 }}>Discover</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles1.wrapper, { width: width }]}>
          <TouchableOpacity onPress={() => { track_record() }}>
            <View style={styles1.box}>
              <Image style={{ width: 140, height: 140, marginLeft: 15 }} source={require('../../assets/Workouts/track_record.png')} />
              <Text style={{ color: '#fff', textAlign: "center", fontSize: 20 }}>Progress</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: 'green', justifyContent: "center" }}>
        <Text style={{ marginVertical: 15, color: '#fff', fontSize: 20, marginHorizontal: 20, textAlign: 'center', fontWeight: 'bold', paddingTop: 10, paddingBottom: 10 }} >Existing Workout</Text>
      </View>
      <View style={styles1.container}>
        <View style={[styles1.wrapper, { width: width }]}>
          <TouchableOpacity onPress={() => navigation.navigate('Workout')}>
            <View style={styles1.box}>
              <Image style={{ width: 140, height: 140, marginLeft: 15 }} source={require('../../assets/Workouts/add_image.png')} />
              <Text style={{ color: '#fff', textAlign: "center", fontSize: 20 }}>Cardio</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles1.wrapper, { width: width }]}>
          <TouchableOpacity onPress={() => navigation.navigate('createWorkout')}>
            <View style={styles1.box}>
              <Image style={{ width: 140, height: 140, marginLeft: 15 }} source={require('../../assets/Workouts/start_new.png')} />
              <Text style={{ color: '#fff', textAlign: "center", fontSize: 20 }}>Excercise</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles1.wrapper, { width: width }]}>
          <TouchableOpacity onPress={() => { follow() }}>
            <View style={styles1.box}>
              <Image style={{ width: 140, height: 140, marginLeft: 15 }} source={require('../../assets/Workouts/follow.png')} />
              <Text style={{ color: '#fff', textAlign: "center", fontSize: 20 }}>Discover</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles1.wrapper, { width: width }]}>
          <TouchableOpacity onPress={() => { track_record() }}>
            <View style={styles1.box}>
              <Image style={{ width: 140, height: 140, marginLeft: 15 }} source={require('../../assets/Workouts/track_record.png')} />
              <Text style={{ color: '#fff', textAlign: "center", fontSize: 20 }}>Progress</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f88d3',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 30,
    paddingBottom: 30,
  },
  box: {
    width: 170,
    height: 170,
    borderRadius: 20,
    backgroundColor: 'green',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
  },
  wrapper: {
    marginVertical: 15, alignItems: 'center'
  }
});


Home.navigationOptions = ({ navigation }) => ({
  title: 'Home',
  headerLeft: () => <Button  type="clear" icon={<Icon name='user' size={30} style={{marginLeft: 5}}  type='font-awesome' colour="black"/>} onPress={() => navigation.navigate('profile')}/>,
  // headerRight: () => <Button  type="clear" icon={<Icon name="sign-out" size={30} style={{marginRight: 5}} type='font-awesome' color="black"/>} onPress={() => { auth().signOut() }} />,
  headerRight: () => <Button  type="clear" title="LogOut" onPress={() => { auth().signOut() }}></Button>,
});