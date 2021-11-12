import React, { useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  onPress,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
  
} from "react-native";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import CheckBox from "@react-native-community/checkbox";

export default function createWorkout() {
  
  //This creates a new checkbox
  const Days = ({ day }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
      <SafeAreaView style={styles.body}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={styles.dayText}>{day}</Text>
      </SafeAreaView>
    );

  };

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Please select Days
      </Text>
      <Days day='Monday' />
      <Days day='Tuesday' />
      <Days day='Wednesday'/>
      <Days day='Thursday'/>
      <Days day='Friday' />
      <Days day='Saturday' />
      <Days day='Sunday' />
      
      {/* 'Next' button */}
      <SafeAreaView style={styles.footer}>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('EditDay1')}
        style={styles.next_shape}
        >
          <Text style={styles.next_text}>Next</Text>
        </TouchableOpacity>   
      </SafeAreaView>

    </SafeAreaView>

  )
}


  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    // textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  dayText: {
    // textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  body: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },

  footer: {
    width: "100%",
    //flexDirection: 'row',
    // alignItems: "flex-start",
    // alignSelf: 'center',
  },

  next_shape: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor:"#004d99",
    width: '40%',
    height: 40,
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'center',
    // THIS CENTERS THE BUTTON
    alignSelf: 'center'
  },
  next_text: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    //textAlign: "center",
    fontWeight: "bold",
    //alignContent: 'center',
  },

});
