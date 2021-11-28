// import React, { useState, useEffect } from 'react';
// import {
//   //Dimensions,
//   ActivityIndicator,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Image,
//   onPress,
//   TouchableOpacity,
//   ScrollView,
  
// } from "react-native";
// import { ListItem } from "react-native-elements";
// import { Button } from "react-native-elements/dist/buttons/Button";
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';
// import NumericInput from 'react-native-numeric-input'
// import StartRoutine from './StartRoutine';

// // export class EditDay1 extends React.Component {
// export default function EditDay1({ navigation }) {
  
//   // updateInputVal = (val, prop) => {
//   //   const [input, setInput] = React.useState("")
//   // }
//   // static navigationOptions = {
//   //   title: "Day 1 Edit",
//   // };
  
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   function onAuthStateChanged(user) {
//       setUser(user);
//       if (initializing) setInitializing(false);
//   }


//   const [ sets, setsets ] = useState('');
//   const [ reps, setreps ] = useState('');  
//   // const[exercise, setexercise] = useState('Squat');
//   const ref = firestore().collection('WorkoutCollection').doc('Day1').collection('Deadlift');
//   async function addWorkout() {    
//       await ref.add({      
//         sets:sets,      
//         reps: reps,
//       });    
//       setsets('');
//       setreps('');  
//       // setexercise('');
//   } 

//   useEffect(() => {
//       const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//       return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   if (!user) {
//       return navigation.navigate('Login');
//   }

//     return(
      
//       //The parent container that controls the general format
//       <View style={styles.container}>
//         <ScrollView>
//         {/* Container that handles to body */}
//         <View style={styles.contentContainer}>
//           {/* Below are a set of 6 buttons:
//           Exercise: AxB reps, C lbs */}
//           <TouchableOpacity
//             style={styles.wo_btn}
//             onPress={onPress}
//             >
//               {/* Buttons need ListItem format */}
//               <ListItem>
//                 <Image
//                     source={require('../../../assets/Workouts/Deadlift.png')}
//                   style={{width:60, height:60}}/>
//                   <ListItem.Content>
//                     <ListItem.Title>Deadlift</ListItem.Title>
//                   {/* These are the titles of the fields in a row */}
//                       <View style={{flexDirection:"row"}}>
//                       <Text style={{padding:10}}>Sets</Text>
//                       <Text style={{marginHorizontal: 60,padding:10}}>Reps</Text>
//                       </View>
                  
//                   {/* These hold the text inputs in a row */}
//                       <View style ={{flexDirection:"row"}}>

//                       <View><NumericInput 
                        
//                         totalWidth={70} 
//                         totalHeight={28} 
//                         iconSize={28}
//                      onChangeText={setsets}
//                           value={sets}/></View> 
//                             <View style={{marginLeft:30,alignContent:"center"}}><NumericInput 
                        
//                         totalWidth={70} 
//                         totalHeight={28} 
//                         iconSize={28}
//                      onChangeText={setsets}
//                           value={sets}/></View> 
//                       </View>
//                   </ListItem.Content>
//               </ListItem>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.wo_btn}
//             onPress={onPress}
//             >
//               <ListItem>
//                 <Image
//                       source={require('../../../assets/Workouts/LegCurl.jpg')}
//                   style={{width:60, height:60}}/>
//                   <ListItem.Content>
//                     <ListItem.Title>Leg Curl</ListItem.Title>
//                       <View style={{flexDirection:"row"}}>
//                       <Text style={{padding:10}}>Sets</Text>
//                       <Text style={{marginHorizontal: 60,padding:10}}>Reps</Text>
//                       </View>

//                       <View style ={{flexDirection:"row"}}>
//                         {/* <TextInput 
//                            onChangeText={setsets}
//                            value={sets}
//                            style={styles.edits}
//                         style={styles.edits}
//                         maxLength = {3}></TextInput> */}
//                     <View><NumericInput 
                        
//                         totalWidth={70} 
//                         totalHeight={28} 
//                         iconSize={28}
//                      onChangeText={setsets}
//                           value={sets}/></View> 
//                             <View style={{marginLeft:30,alignContent:"center"}}><NumericInput 
                        
//                         totalWidth={70} 
//                         totalHeight={28} 
//                         iconSize={28}
//                      onChangeText={setsets}
//                           value={sets}/></View> 
//                       </View>
//                   </ListItem.Content>
//               </ListItem>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.wo_btn}
//             onPress={onPress}
//             >
//               <ListItem>
//                 <Image
//                   source={require('../../../assets/Workouts/LegExtension.jpg')}
//                   style={{width:60, height:60}}/>
//                   <ListItem.Content>
//                     <ListItem.Title>Leg Extension</ListItem.Title>
//                       <View style={{flexDirection:"row"}}>
//                       <Text style={{padding:10}}>Sets</Text>
//                       <Text style={{marginHorizontal: 50,padding:10}}>Reps</Text>
//                       </View>
//                       <View style ={{flexDirection:"row"}}>
//                         {/* <TextInput 
//                            onChangeText={setsets}
//                            value={sets}
//                            style={styles.edits}
//                         style={styles.edits}
//                         maxLength = {3}></TextInput>
//                         <TextInput style={styles.editsReps}
//                        onChangeText={setreps}
//                        value={reps}
//                        maxLength = {3}></TextInput> */}
//                          <View><NumericInput 
                        
//                         totalWidth={70} 
//                         totalHeight={28} 
//                         iconSize={28}
//                      onChangeText={setsets}
//                           value={sets}/></View> 
//                             <View style={{marginLeft:30,alignContent:"center"}}><NumericInput 
                        
//                         totalWidth={70} 
//                         totalHeight={28} 
//                         iconSize={28}
//                      onChangeText={setsets}
//                           value={sets}/></View> 
//                       </View>
//                   </ListItem.Content>
//               </ListItem>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.wo_btn}
//             onPress={onPress}
//             >
//               <ListItem>
//                 <Image
//                     source={require('../../../assets/Workouts/Squat.png')}
//                   style={{width:60, height:60}}/>
//                   <ListItem.Content>
//                     <ListItem.Title >Squat</ListItem.Title>
//                       <View style={{flexDirection:"row"}}>
//                       <Text style={{padding:10}}>Sets</Text>
//                       <Text style={{marginHorizontal: 60,padding:10}}>Reps</Text>
//                       </View>

//                       <View style ={{flexDirection:"row"}}>
//                         {/* <TextInput  style={{width:60,}} 
//                          onChangeText={setsets}
//                          value={sets}
//                          style={styles.edits}
//                          maxLength = {3}></TextInput>
                        
//                         <TextInput 
//                         onChangeText={setreps}
//                         value={reps}
//                         style={styles.editsReps}
//                         maxLength = {3}></TextInput> */}
//                       <View><NumericInput 
                        
//                         totalWidth={70} 
//                         totalHeight={28} 
//                         iconSize={28}
//                      onChangeText={setsets}
//                           value={sets}/></View> 
//                             <View style={{marginLeft:30,alignContent:"center"}}
//                             ><NumericInput 
                        
//                         totalWidth={70} 
//                         totalHeight={28} 
//                         iconSize={28}
//                      onChangeText={setsets}
//                           value={sets}/></View> 
//                       </View>
//                   </ListItem.Content>
//               </ListItem>
//           </TouchableOpacity>         
//         </View>

//           {/* This is the footer, the buttons at bottom */}
//           <View styles={styles.footer}>
//             <TouchableOpacity
//               onPress={() => this.props.navigation.navigate('EditDay1')}
//               style={styles.start_shape}>
//                 <Text style={styles.start_text}>Add Workout</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//               onPress={() =>  { navigation.navigate("StartRoutine");}}
//               style={styles.start_shape}>
//                 <Text style={styles.start_text}>Start Workout</Text>
//               </TouchableOpacity>
//           </View>
//           </ScrollView>
//       </View>


//     );
//   }


// const styles = StyleSheet.create({
//   edits: {
//     alignItems: 'center',
//     fontSize: 13,
//     paddingVertical: 0,
//     // marginHorizontal: 40,
//     color: "#121212",
//     backgroundColor: "rgba(230,230,230,1)",
//     width:"1%"
    
//   },
//   editsReps: {
//     alignItems: 'center',
//     fontSize: 10,
//     paddingVertical: 0,
//     marginHorizontal: 40,
//     color: "#121212",
//     fontSize: 13,
//     paddingVertical: 0,
//     // marginHorizontal: 40,
//     color: "#121212",
//     backgroundColor: "rgba(230,230,230,1)",
//     width:"10%"
    
//   },
//   title: {
//     textAlign: "left",
//     marginVertical: 5,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     marginHorizontal: 16,
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'flex-start',
//   },
//   wo_btn: {
//     //alignItems: "flex-start",
//     backgroundColor: "#DDDDDD",
//     padding: 10,
//     marginVertical: 2,
//   },
//   innerText: {
//     fontSize:10,
//   },

//   footer: {
//     width: "100%",
//     flexDirection: 'row',
//     alignItems: "flex-start",
//   },
//   start_shape: {
//     alignItems: 'center',
//     borderRadius: 10,
//     backgroundColor:"#004d99",
//     width: '40%',
//     height: 40,
//     marginHorizontal: 5,
//     marginVertical: 5,
//     justifyContent: 'center',
//     // THIS CENTERS THE BUTTON
//     alignSelf: 'center'
//   },
//   start_text: {
//     color: "rgba(255,255,255,1)",
//     fontSize: 16,
//     textAlign: "center",
//     fontWeight: "bold",
//     alignContent: 'center',
//   },
// })


// // export default EditDay1

import React, { useState, useEffect } from 'react';
import {
  //Dimensions,
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  onPress,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,

} from "react-native";
import { ListItem } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import NumericInput from 'react-native-numeric-input'
import StartRoutine from './StartRoutine';
import { useIsFocused } from '@react-navigation/native'

// export class EditDay1 extends React.Component {
export default function EditDay1({ navigation, route }) {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [days, setDay] = useState(route.params.data);
  const isFocused = useIsFocused();
  const [masterData, setmasterData] = useState([]);
  const workoutDisplay = [];
  const [edit, setEdit] = useState(false);

  function onAuthStateChanged(user) {
    setUser(user);
    // console.log(days);
    getData(user.email, days);
    // console.log(masterData);
    if (initializing) setInitializing(false);
  }

  function getData(user) {
    firestore().collection("Users").doc(user).collection("Exercises").where('day', '==', days).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.data().workout);
        const Exercise = doc.data().workout;
        for (const Ex in Exercise) {
          if (Exercise[Ex].value) {
            getDetails(Exercise[Ex].name);
          }

        }
      });
    })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }

  getDetails = (exercise) => {
    firestore().collection('WorkoutCollection').doc(exercise).get().then((querySnapshot) => {
      workoutDisplay.push({ name: querySnapshot.id, primaryMuscles: querySnapshot.data().Part, instructions: querySnapshot.data().Description, Reps: querySnapshot.data().Reps, Sets: querySnapshot.data().Sets, image: querySnapshot.data().Image });
      setmasterData(workoutDisplay);
      setEdit(true);
    })

      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [isFocused]);

  if (initializing) return null;

  if (!user) {
    return navigation.navigate('Login');
  }
  const ItemView = ({ exercise }) => {
    return (
      // Flat List Item
      <Text
        style={styles.itemStyle}
        onPress={() => navigation.navigate('ExerciseDetailsScreen', { exercise: exercise, page: "user" })}>
        {exercise.name}
        {' ('}
        {exercise.primaryMuscles}
        {')'}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  if (edit) {
    return (

      //The parent container that controls the general format
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1, position: 'relative' }}>
          <View style={styles.contentContainer}>
            {/* <Text>{days}</Text> */}
            {/* <FlatList data={masterData} renderItem={renderItem} keyExtractor={(item) => item.name} /> */}
            <FlatList
              data={masterData}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={({ item }) => <ItemView exercise={item} />} //display in array
            />
          </View>

          {/* This is the footer, the buttons at bottom */}
          <View styles={styles.footer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('StartRoutine', { day: days, page: true })}
              style={styles.start_shape}>
              <Text style={styles.start_text}>Edit Workout</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
            onPress={() => { navigation.navigate("StartRoutine"); }}
            style={styles.start_shape}>
            <Text style={styles.start_text}>Start Workout</Text>
          </TouchableOpacity> */}
          </View>
        </SafeAreaView>
      </View>


    );
  }
  else {
    return (

      //The parent container that controls the general format
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1, position: 'relative' }}>
          <View style={styles.contentContainer}>
            {/* <Text>{days}</Text> */}
            {/* <FlatList data={masterData} renderItem={renderItem} keyExtractor={(item) => item.name} /> */}
            {/* <FlatList
              data={masterData}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={({ item }) => <ItemView exercise={item} />} //display in array
            /> */}
          </View>

          {/* This is the footer, the buttons at bottom */}
          <View styles={styles.footer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('StartRoutine', { day: days, })}
              style={styles.start_shape}>
              <Text style={styles.start_text}>Add Workout</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => { navigation.navigate("StartRoutine"); }}
              style={styles.start_shape}>
              <Text style={styles.start_text}>Start Workout</Text>
            </TouchableOpacity> */}
          </View>
        </SafeAreaView>
      </View>


    );
  }

}


const styles = StyleSheet.create({
  edits: {
    alignItems: 'center',
    fontSize: 13,
    paddingVertical: 0,
    // marginHorizontal: 40,
    color: "#121212",
    backgroundColor: "rgba(230,230,230,1)",
    width: "1%"

  },
  itemStyle: {
    padding: 10,
  },
  editsReps: {
    alignItems: 'center',
    fontSize: 10,
    paddingVertical: 0,
    marginHorizontal: 40,
    color: "#121212",
    fontSize: 13,
    paddingVertical: 0,
    // marginHorizontal: 40,
    color: "#121212",
    backgroundColor: "rgba(230,230,230,1)",
    width: "10%"

  },
  title: {
    textAlign: "left",
    marginVertical: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  wo_btn: {
    //alignItems: "flex-start",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginVertical: 2,
  },
  innerText: {
    fontSize: 10,
  },

  footer: {
    width: "100%",
    flexDirection: 'row',
    alignItems: "flex-start",
  },
  start_shape: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#004d99",
    width: '40%',
    height: 40,
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'center',
    // THIS CENTERS THE BUTTON
    alignSelf: 'center'
  },
  start_text: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    alignContent: 'center',
  },
})
