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
import DatePicker from 'react-native-datepicker';
import SelectDropdown from 'react-native-select-dropdown' 
  const CreateWorkout = () => {
    const [date, setDate] = useState('09-10-2020');
    const countries = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satrday", "Sunday"]
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Please select date
          </Text>
         
        <SelectDropdown
	data={countries}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		return item
	}}
/>
        </View>
      </SafeAreaView>
    );
  };
  
  export default CreateWorkout;
  
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
    datePickerStyle: {
      width: 200,
      marginTop: 20,
    },
  });