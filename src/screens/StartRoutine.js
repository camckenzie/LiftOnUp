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

const Navbar = ({ props }) => {
  const isDarkMode = useColorScheme() === "dark";

  const colorStyle = {
    color: isDarkMode ? Colors.white : Colors.black,
    fontSize: 30,

    marginLeft: 10,
  };
  return (
    <View>
      <Text style={colorStyle}>Chest and Triceps</Text>
    </View>
  );
};
const FitnessSection = ({ children, title, props }) => {
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
      <TextInput style={styles.TextInput1} {...props} editable />
      <TextInput style={styles.TextInput2} {...props} editable />
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
    </View>
  );
};

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
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
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
          <Navbar />
          <Section title="Bench Press(Barbell)"></Section>
          <Section title="Incline Bench Press(Barbell)"></Section>
          <Section title="Strict Military Press(Barbell)"></Section>
          <TouchableOpacity style={styles.button1}>
            <Text style={[styles.alignText0, colorStyle]}>
                Cancel Exercise
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button0}>
            <Text style={[styles.alignText0, colorStyle]}>
                Complete Exercise
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
    color: "blue",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
  checkbox: {
    alignItems: "center",
  },
  upperSection: {
    display: "flex",
    alignItems: "center",
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
    backgroundColor: "gainsboro",
    padding: 8,
  },
  //Complete button
  button0: {
    borderRadius: 10,
    backgroundColor: "gainsboro",
    padding: 8,
    marginTop: 10,
    marginBottom: 25,
    marginLeft:"5%",
    width: "90%",
  },
  alignText0: {
    textAlign: "center",
  },
  //Cancel button
  button1: {
    borderRadius: 10,
    backgroundColor: "#ffa1a1",
    padding: 8,
    marginTop: 25,
    marginBottom: 10,
    marginLeft:"5%",
    width: "90%",

  },
});
// The checkbox library 
//https://npm.io/package/@react-native-community/checkbox