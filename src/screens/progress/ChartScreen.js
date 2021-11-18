import React, { useState, useEffect } from "react";
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
import { Picker } from "@react-native-picker/picker";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

export default function ChartScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <>
      <View style={styles.container}>
        {/* Drop down menu */}
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="1 week" value="oneweek" />
          <Picker.Item label="1 month" value="onemonth" />
          <Picker.Item label="3 months" value="threemonth" />
          <Picker.Item label="6 months" value="sixmonth" />
          <Picker.Item label="1 year" value="oneyear" />
        </Picker>
      </View>
      {/* Line Chart  */}
      <View style={{ marginTop: 80 }}>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Number(140),
                  Number(150),
                  Number(160),
                  Number(170),
                  Number(180),
                  Number(190),
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#0096FF",
            backgroundGradientFrom: "#0096FF",
            backgroundGradientTo: "#0096FF",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#0096FF",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
});
// Libraries have been used
// Chart:
// https://www.npmjs.com/package/react-native-chart-kit/v/6.11.0

// Dropdown menu (Picker):
// https://reactnative.dev/docs/picker
// https://www.npmjs.com/package/@react-native-picker/picker
