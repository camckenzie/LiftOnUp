// import React, { useState } from "react";
// import CheckBox from "@react-native-community/checkbox";

// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";

// import {
//   Colors,
//   DebugInstructions,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from "react-native/Libraries/NewAppScreen";
// import { white } from "react-native-paper/lib/typescript/styles/colors";

// //DO WE NEED THIS BELOW?

// // const Navbar = ({ props }) => {
// //   const isDarkMode = useColorScheme() === "dark";

// //   const colorStyle = {
// //     color: isDarkMode ? Colors.white : Colors.black,
// //     fontSize: 30,

// //     marginLeft: 10,
// //   };
// //   return (
// //     <View>
// //       <Text style={colorStyle}>Chest and Triceps</Text>
// //     </View>
// //   );
// // };

// const FitnessSection = ({ children, title }) => {
//   const isDarkMode = useColorScheme() === "dark";

//   const colorStyle = {
//     color: isDarkMode ? Colors.white : Colors.black,
//   };
//   const [toggleCheckBox, setToggleCheckBox] = useState(false);

//   return (
//     <View style={styles.upperSection}>
//       <TouchableOpacity style={styles.button}>
//         <Text style={colorStyle}> {title}</Text>
//       </TouchableOpacity>
//       <View style={{ marginLeft: 30 }}>
//         <Text>___</Text>
//       </View>
//       <TextInput style={styles.TextInput1} maxLength={3} />
//       <TextInput style={styles.TextInput2} maxLength={3} />
//       <CheckBox
//         disabled={false}
//         value={toggleCheckBox}
//         onValueChange={(newValue) => setToggleCheckBox(newValue)}
//       />
//     </View>
//   );
// };

// //What is this for?
// const Section = ({ children, title }) => {
//   const isDarkMode = useColorScheme() === "dark";
//   const [toggleCheckBox, setToggleCheckBox] = useState(false);
//   const colorStyle = {
//     color: isDarkMode ? Colors.white : Colors.black,
//   };

//   const alignText = {
//     textAlign: "center",
//   };
//   return (
//     <View style={styles.sectionContainer}>
//       <View style={{ backgroundColor: "#004d99" }}>
//         <Text style={styles.sectionTitle}>
//           {title}
//         </Text>
//       </View>
//       <View style={styles.upperSection}>
//         <Text style={colorStyle}>Set</Text>
//         <Text style={colorStyle}>Previous</Text>
//         <Text style={colorStyle}>lbs</Text>
//         <Text style={colorStyle}>Reps</Text>
//         {/* <CheckBox
//           disabled={false}
//           value={true}
//           onValueChange={(newValue) => setToggleCheckBox(newValue)}
//         /> */}

//         {/* Below is so the checkbox has no title above */}
//         <Text style={{ width: "8%" }}></Text>

//       </View>
//       <FitnessSection title="1" />
//       <FitnessSection title="2" />
//       <FitnessSection title="3" />
//       <FitnessSection title="4" />
//       {/* <TouchableOpacity style={styles.button}>
//         <Text style={[colorStyle, alignText]}> + Add set</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// const Exercise = () => {
//   const isDarkMode = useColorScheme() === "dark";

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };
//   const colorStyle = {
//     color: isDarkMode ? Colors.white : Colors.black,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}
//       >
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}
//         >
//           {/* <Navbar /> */}
//           <Section title="Bench Press(Barbell)"></Section>
//           <Section title="Incline Bench Press(Barbell)"></Section>
//           <Section title="Strict Military Press(Barbell)"></Section>
//           <TouchableOpacity style={styles.cancel_button}>
//             <Text style={[styles.button_text]}>
//               Cancel Routine
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.complete_button}>
//             <Text style={styles.button_text}>
//               Complete Routine
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Exercise;

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     alignSelf: 'center',
//     backgroundColor: "#004d99",
//     color: "white",
//   },

//   checkbox: {
//     alignItems: "center",
//   },
//   upperSection: {
//     display: "flex",
//     //alignItems: "center",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   TextInput1: {
//     borderRadius: 15,
//     backgroundColor: "gainsboro",
//     paddingTop: 5,
//     paddingBottom: 5,
//     paddingRight: 20,
//     paddingLeft: 20,
//     marginLeft: 25,
//   },
//   TextInput2: {
//     borderRadius: 15,
//     backgroundColor: "gainsboro",
//     paddingTop: 5,
//     paddingBottom: 5,
//     paddingRight: 20,
//     paddingLeft: 20,
//   },
//   button: {
//     borderRadius: 10,
//     //backgroundColor: "gainsboro",
//     padding: 8,
//   },
//   //Complete button
//   complete_button: {
//     alignItems: 'center',
//     borderRadius: 10,
//     backgroundColor: "#004d99",
//     width: '40%',
//     height: 40,
//     marginHorizontal: 5,
//     marginVertical: 5,
//     justifyContent: 'center',
//     // THIS CENTERS THE BUTTON
//     alignSelf: 'center'
//   },
//   button_text: {
//     color: "rgba(255,255,255,1)",
//     fontSize: 16,
//     textAlign: "center",
//     fontWeight: "bold",
//     alignContent: 'center',
//   },
//   //Cancel button
//   cancel_button: {
//     alignItems: 'center',
//     borderRadius: 10,
//     backgroundColor: "#ff0000",
//     width: '40%',
//     height: 40,
//     marginHorizontal: 5,
//     marginVertical: 5,
//     justifyContent: 'center',
//     // THIS CENTERS THE BUTTON
//     alignSelf: 'center'

//   },
// });
// // The checkbox library
// //https://npm.io/package/@react-native-community/checkbox

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { COLORS, SIZES } from '../../constants';
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import CheckBox from "@react-native-community/checkbox";
// const exercises = ExerciseList.exercises;

const Exercise = ({ navigation, route }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [search, setSearch] = useState('');
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const workoutDisplay = [];
  const addEx = [];
  const [days, setDay] = useState(route.params.day);
  const [exist, setExist] = useState(route.params.page)


  function onAuthStateChanged(user) {
    setUser(user);
    // console.log(days);
    // console.log(user.email);
    getData();
    if (exist) {
      existWork(user.email, days)
    }


    // console.log(exist, "kjfhskjdfhs");
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

  function existWork(user, days) {
    console.log(user, days);
    firestore().collection("Users").doc(user).collection("Exercises").where("day", "==", days).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    })
  }

  function getData() {
    firestore().collection('WorkoutCollection').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        workoutDisplay.push({ name: doc.id, primaryMuscles: doc.data().Part, instructions: doc.data().Description, Reps: doc.data().Reps, Sets: doc.data().Sets, image: doc.data().Image });
      });
      setfilterData(workoutDisplay);
      setmasterData(workoutDisplay);
    })

      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }
  const searchFilterFunction = (text) => {
    //check if searched text is not blank
    if (text) {
      const newData = masterData.filter(
        function (item) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
      );
      setfilterData(newData);
      setSearch(text);
    } else {
      setfilterData(masterData);
      setSearch(text);
    }
  };

  async function addUserWorkout(workout, days, user) {
    await firestore().collection("Users").doc(user).collection('Exercises').add({
      day: days,
      workout: workout,

    });
    navigation.navigate("Details", { data: days });
  }

  async function saveData(exercise) {
    if (addEx.includes(exercise)) {
      index = addEx.indexOf(exercise);
      addEx.splice(index, 1);
    } else {
      addEx.push(exercise);
    }
  }
  const ItemView = ({ exercise }) => {
    return (
      // Flat List Item
      <View style={{ flexDirection: 'row' }}>

        <Text
          style={styles.itemStyle}
          onPress={() => navigation.navigate('ExerciseDetailsScreen', { exercise: exercise })}>
          {exercise.name}
          {' ('}
          {exercise.primaryMuscles}
          {')'}
        </Text>
        <CheckBox
          boxType="square"
          value={exercise.name}
          onChange={() => saveData(exercise.name)}
        />
      </View>

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
  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <View style={styles.btn_box}>
        <TouchableOpacity
          onPress={() => addUserWorkout(addEx, days, user.email)}
          style={styles.btn_shape}
        >
          <Text style={styles.btn_text}>Add Exercise</Text>
        </TouchableOpacity>

      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: 50,
          borderRadius: 25,
          backgroundColor: COLORS.white,
          marginVertical: 40,
        }}>
        <FontAwesome5Icons
          name="search"
          size={22}
          style={{ marginHorizontal: 20 }}
        />
        <TextInput
          onChangeText={(text) => searchFilterFunction(text)}
          placeholder="Search Exercise..." style={{ flex: 1 }} />
      </View>
      <FlatList
        data={filterData}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={({ item }) => <ItemView exercise={item} />} //display in array
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
    marginRight: 'auto',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  next_text: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    //textAlign: "center",
    fontWeight: "bold",
    //alignContent: 'center',
  },
  btn_text: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  btn_box: {
    flexDirection: "row",
    // width: "100%",
    justifyContent: "center",
    alignContent: "flex-end",
  },
  btn_shape: {
    borderRadius: 5,
    backgroundColor: '#00264d',
    width: 200,
    height: 40,
    marginHorizontal: 15,
    justifyContent: "center",
  },
});

export default Exercise;
