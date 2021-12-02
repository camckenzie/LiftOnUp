
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
import {  Icon } from 'react-native-elements';
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
        setEdit(true);
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
        onPress={() => navigation.navigate('WorkoutDetailScreen', { exercise: exercise, page: 'push', })}>
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
          <View>
            <Text h1 style={styles.title}>List of Exercises Added</Text>
          </View>
          <View style={styles.contentContainer}>
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
              <Text style={styles.start_text}>Edit Routine</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>


    );
  }
  else {
    return (

      //The parent container that controls the general format
      <View style={styles.addWorkout}>
        <SafeAreaView >

          {/* This is the footer, the buttons at bottom */}
          <View >
            <TouchableOpacity
              onPress={() => navigation.navigate('StartRoutine', { day: days, })}
              >
                 <Icon
                        name='add'x
                        color="#004d99"
                        size={44}
                        />
              <Text style={{ color: "#004d99",fontSize:19, textAlign: "center",
              fontWeight: "bold",alignContent: 'center'}}>Add Exercises</Text>
            </TouchableOpacity>
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
    color: "#121212",
    backgroundColor: "rgba(230,230,230,1)",
    width: "10%"

  },
  title: {
    textAlign: "center",
    padding:20,
    fontSize:20,
    fontWeight:"bold",
    color:"#5F5F64"
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 16,
  },
  contentContainer: {
    top:40,
    flex: 1,
    justifyContent: 'flex-start',
  },
  wo_btn: {
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
    alignItems: 'center',
  },
  addWorkout:{
    marginVertical:290,
    justifyContent:"center",
     alignContent: 'center'
  },
  start_shape: {
    bottom:10,
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
