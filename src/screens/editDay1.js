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

} from "react-native";
import { ListItem } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Login } from './Login';

// export class EditDay1 extends React.Component {
export default function EditDay1({ navigation }) {

  // updateInputVal = (val, prop) => {
  //   const [input, setInput] = React.useState("")
  // }
  // static navigationOptions = {
  //   title: "Day 1 Edit",
  // };

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  const [Workout, setWorkout] = useState("");
  const [sets, setsets] = useState('');
  const [reps, setreps] = useState('');
  const [sets1, setsets1] = useState('');
  const [reps1, setreps1] = useState('');
  const [sets2, setsets2] = useState('');
  const [reps2, setreps2] = useState('');
  const [sets3, setsets3] = useState('');
  const [reps3, setreps3] = useState('');

  async function addWorkout(user) {
    // console.log(user);   
    function saveWorkout() {
      firestore().collection('WorkoutCollection').doc(user).set({
        week1: {
          day1: {
            Workout: Workout,
            sets: sets,
            reps: reps
          }
        }
      });
    }
    setsets('');
    setreps('');
    setsets1('');
    setreps1('');
    setsets2('');
    setreps2('');
    setsets3('');
    setreps3('');
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return navigation.navigate('Login');
  }

  // function loadWorkout() {
  //   return (
  //     <TouchableOpacity style={styles.wo_btn} onPress={onPress} >
  //       <ListItem>
  //         <Image source={require('../../assets/Workouts/Deadlift.png')}style={{ width: 60, height: 60 }} />
  //         <ListItem.Content>
  //           <ListItem.Title>Deadlift</ListItem.Title>
  //           <View style={{ flexDirection: "row" }}>
  //             <TextInput style={{ width: 60, }} onChangeText={setsets} value={sets} style={styles.edits} maxLength={3}></TextInput> 
  //             <TextInput onChangeText={setreps} value={reps} style={styles.editsReps} maxLength={3}></TextInput>
  //           </View>
  //         </ListItem.Content>
  //       </ListItem>
  //     </TouchableOpacity>
  //   )
  // }
  return (

    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          {/* {loadWorkout()} */}
          <TouchableOpacity style={styles.wo_btn} onPress={onPress} >
            <ListItem>
              <Image source={require('../../assets/Workouts/Deadlift.png')} style={{ width: 60, height: 60 }} />
              <ListItem.Content>
                <ListItem.Title>Deadlift</ListItem.Title>
                <View style={{ flexDirection: "row" }}>
                  <Text>Sets</Text>
                  <Text style={{ marginHorizontal: 40 }}>Reps</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TextInput style={{ width: 60, }} onChangeText={setsets} value={sets} style={styles.edits} maxLength={3}></TextInput>
                  <TextInput onChangeText={setreps} value={reps} style={styles.editsReps} maxLength={3}></TextInput>
                </View>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>

          <TouchableOpacity style={styles.wo_btn} onPress={onPress}>
            <ListItem>
              <Image source={require('../../assets/Workouts/LegCurl.jpg')} style={{ width: 60, height: 60 }} />
              <ListItem.Content>
                <ListItem.Title>Leg Curl</ListItem.Title>
                <View style={{ flexDirection: "row" }}>
                  <Text>Sets</Text>
                  <Text style={{ marginHorizontal: 40 }}>Reps</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TextInput style={{ width: 60, }} onChangeText={setsets1} value={sets} style={styles.edits} maxLength={3}></TextInput>
                  <TextInput onChangeText={setreps1} value={reps} style={styles.editsReps} maxLength={3}></TextInput>
                </View>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>

          <TouchableOpacity style={styles.wo_btn} onPress={onPress} >
            <ListItem>
              <Image source={require('../../assets/Workouts/LegExtension.jpg')}style={{ width: 60, height: 60 }} />
              <ListItem.Content>
                <ListItem.Title>Leg Extension</ListItem.Title>
                <View style={{ flexDirection: "row" }}>
                  <Text>Sets</Text>
                  <Text style={{ marginHorizontal: 40 }}>Reps</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TextInput style={{ width: 60, }} onChangeText={setsets2} value={sets2} style={styles.edits} maxLength={3}></TextInput>
                  <TextInput onChangeText={setreps2} value={reps2} style={styles.editsReps} maxLength={3}></TextInput>
                </View>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>

          <TouchableOpacity style={styles.wo_btn} onPress={onPress} >
            <ListItem>
              <Image source={require('../../assets/Workouts/Squat.png')} style={{ width: 60, height: 60 }} />
              <ListItem.Content>
                <ListItem.Title >Squat</ListItem.Title>
                <View style={{ flexDirection: "row" }}>
                  <Text>Sets</Text>
                  <Text style={{ marginHorizontal: 40 }}>Reps</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TextInput style={{ width: 60, }} onChangeText={setsets3} value={sets3} style={styles.edits} maxLength={3}></TextInput>
                  <TextInput onChangeText={setreps3} value={reps3} style={styles.editsReps} maxLength={3}></TextInput>
                </View>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>

        </View>

        {/* This is the footer, the buttons at bottom */}
        <View styles={styles.footer}>
          {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('EditDay1')} style={styles.start_shape}> 
          <Text style={styles.start_text}>Add Workout</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => addWorkout(user.email)}
            style={styles.start_shape}>
            <Text style={styles.start_text}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>


  );
}


const styles = StyleSheet.create({
  edits: {
    alignItems: 'center',
    fontSize: 13,
    paddingVertical: 0,
    // marginHorizontal: 40,
    color: "#121212",
    backgroundColor: "rgba(230,230,230,1)",
    width: "10%"

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
    marginVertical: 8,
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
    marginVertical: 5,
  },
  innerText: {
    fontSize: 10,
  },

  footer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
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


// export default EditDay1