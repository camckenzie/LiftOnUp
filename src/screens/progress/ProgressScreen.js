import React, { useState, useEffect } from "react";
import { SearchBar } from "react-native-elements";

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
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import SecondProgress from "./ChartScreen";

// This section for setting and passing the props later on
const FirstSection = ({ title1, title2, title3, props }) => {
  return (
    <View style={styles.upperSection}>
      <View style={{ width: "15%" }}>
        <Text>{title1}</Text>
      </View>
      <View style={{ marginLeft: "5%" }}>
        <Text>{title2}</Text>
      </View>
      <View>
        <Text>{title3}</Text>
      </View>
    </View>
  );
};
// The fixed section which contains (Exercise, Max, Date)
const TopSection = ({ title1, title2, title3, props }) => {
  return (
    <View style={styles.upperSection}>
      <View>
        <Text style={{ fontWeight: "600", color: "black", fontSize: 25 }}>
          {title1}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "600",
            color: "black",
            fontSize: 25,
            marginRight: 55,
          }}
        >
          {title2}
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: "600", color: "black", fontSize: 25 }}>
          {title3}
        </Text>
      </View>
    </View>
  );
};
// The Data section, which is comming from the database
const MainSection = ({ props }) => {
  return (
    <View style={{ width: "90%", marginLeft: "5%", marginTop: 40 }}>
      <TopSection title1="Exercise" title2="Max" title3="Date" />
      <FirstSection title1="Bench" title2="165lbsX110reps " title3="11/11/21" />
      <FirstSection title1="Squat" title2="165lbsX110reps" title3="11/11/21" />
      <FirstSection
        title1="Deadlift"
        title2="165lbsX110reps"
        title3="11/11/21"
      />
    </View>
  );
};

export default function ProgressScreen({ navigation }) {
  // by default it is A, which is MainSection (Logs)
  const [view, setView] = useState("A");

  const [search, setsearch] = useState("");

  return (
    <View>
      <View style={styles.upperSection}>
        <View style={styles.innerSection}>
          <TouchableOpacity style={styles.button} onPress={() => setView("A")}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Logs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setView("B")}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Weight
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "90%", marginLeft: "10%" }}>
          <SearchBar
            round
            searchIcon={{ size: 18 }}
            containerStyle={{
              backgroundColor: "gainsboro",
              width: "50%",
              height: 45,
            }}
            inputContainerStyle={{
              height: 17,
              marginTop: 5,
            }}
            inputStyle={{ backgroundColor: "white" }}
            platform={Platform.OS}
            // onChangeText={(text) => searchFilterFunction(text)}
            // onClear={(text) => searchFilterFunction('')}
            placeholder="Type Here..."
            value={search}
          />
        </View>
      </View>

      <View>
        {view === "A" ? (
          <MainSection />
        ) : view === "B" ? (
          <SecondProgress />
        ) : null}
      </View>
    </View>
  );
}

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
  innerSection: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "42%",
    marginTop: 7,
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
    backgroundColor: "#004d99",
    padding: 8,
    marginLeft: "5%",
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 12,
    paddingBottom: 12,
    width: 80,
  },
  button_txt: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    padding: 7,
    textAlign: "center",
    fontWeight: "bold",
    alignContent: "center",
  },
});
