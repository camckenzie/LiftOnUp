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
import ExerciseDetailsScreen from './ExerciseDetailsScreen';
import ExerciseList from './exercises.json';
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
const exercises = ExerciseList.exercises;

const ExerciseHomeScreen = ({ navigation }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [search, setSearch] = useState('');
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const workoutDisplay = [];
  // useEffect(() => {
  //   setfilterData(exercises);
  //   setmasterData(exercises);
  // });
  // getData();
  function onAuthStateChanged(user) {
    setUser(user);
    // console.log(user.email);
    getData(user.email);
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
  // // {
  // user1: { // collection
  //   days: { // collection
  //     "Monday": { // collection
  //       "Deadlift": { // documents
  //         "sets": 15, //fields
  //           "reps": 3 //fields
  //       },
  //       "Legs": {
  //         ""
  //       }
  //     }
  //   }
  // }
  // // }
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
  const ItemView = ({ exercise }) => {
    return (
      // Flat List Item
      <Text
        style={styles.itemStyle}
        onPress={() => navigation.navigate('ExerciseDetailsScreen', { exercise: exercise })}>
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
  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>

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
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

export default ExerciseHomeScreen;
