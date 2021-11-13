import React, { useState } from "react";
import CheckBox from "@react-native-community/checkbox";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import { white } from "react-native-paper/lib/typescript/styles/colors";

//DO WE NEED THIS BELOW?

// const Navbar = ({ props }) => {
//   const isDarkMode = useColorScheme() === "dark";

//   const colorStyle = {
//     color: isDarkMode ? Colors.white : Colors.black,
//     fontSize: 30,

//     marginLeft: 10,
//   };
//   return (
//     <View>
//       <Text style={colorStyle}>Chest and Triceps</Text>
//     </View>
//   );
// };

const FitnessSection = ({ children, title}) => {
  const isDarkMode = useColorScheme() === "dark";

  const colorStyle = {
    color: isDarkMode ? Colors.white : Colors.black,
  };
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.upperSection}>
      <TouchableOpacity style={styles.button}>
        <Text style={colorStyle}> {title}</Text>
      </TouchableOpacity>
      <View style={{ marginLeft: 30 }}>
        <Text>___</Text>
      </View>
      <TextInput style={styles.TextInput1} maxLength ={3} />
      <TextInput style={styles.TextInput2}  maxLength ={3} />
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
    </View>
  );
};

//What is this for?
const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === "dark";
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const colorStyle = {
    color: isDarkMode ? Colors.white : Colors.black,
  };

  const alignText = {
    textAlign: "center",
  };
  return (
    <View style={styles.sectionContainer}>
      <View style={{backgroundColor:"#004d99"}}>
      <Text style={styles.sectionTitle}>
        {title}
      </Text>
      </View>
      <View style={styles.upperSection}>
        <Text style={colorStyle}>Set</Text>
        <Text style={colorStyle}>Previous</Text>
        <Text style={colorStyle}>lbs</Text>
        <Text style={colorStyle}>Reps</Text>
        {/* <CheckBox
          disabled={false}
          value={true}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        /> */}
        
        {/* Below is so the checkbox has no title above */}
        <Text style={{width: "8%"}}></Text>

      </View>
      <FitnessSection title="1" />
      <FitnessSection title="2" />
      <FitnessSection title="3" />
      <FitnessSection title="4" />
      {/* <TouchableOpacity style={styles.button}>
        <Text style={[colorStyle, alignText]}> + Add set</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const Exercise = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const colorStyle = {
    color: isDarkMode ? Colors.white : Colors.black,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View 
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          {/* <Navbar /> */}
          <Section title="Bench Press(Barbell)"></Section>
          <Section title="Incline Bench Press(Barbell)"></Section>
          <Section title="Strict Military Press(Barbell)"></Section>
          <TouchableOpacity style={styles.cancel_button}>
            <Text style={[styles.button_text]}>
                Cancel Routine
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.complete_button}>
            <Text style={styles.button_text}>
                Complete Routine
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    alignSelf: 'center',
    backgroundColor:"#004d99",
    color: "white",
  },

  checkbox: {
    alignItems: "center",
  },
  upperSection: {
    display: "flex",
    //alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  TextInput1: {
    borderRadius: 15,
    backgroundColor: "gainsboro",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 20,
    paddingLeft: 20,
    marginLeft: 25,
  },
  TextInput2: {
    borderRadius: 15,
    backgroundColor: "gainsboro",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 20,
    paddingLeft: 20,
  },
  button: {
    borderRadius: 10,
    //backgroundColor: "gainsboro",
    padding: 8,
  },
  //Complete button
  complete_button: {
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
  button_text: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    alignContent: 'center',
  },
  //Cancel button
  cancel_button: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor:"#ff0000",
    width: '40%',
    height: 40,
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'center',
    // THIS CENTERS THE BUTTON
    alignSelf: 'center'

  },
});
// The checkbox library 
//https://npm.io/package/@react-native-community/checkbox