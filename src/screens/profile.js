import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, onPress, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView, DatePicker } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyPlan from './myPlan.js'
import { ListItem, Avatar } from 'react-native-elements'
import { black, white } from 'react-native-paper/lib/typescript/styles/colors';
import { color } from 'react-native-reanimated';
import firestore from '@react-native-firebase/firestore'; import { Appbar, TextInput } from 'react-native-paper';
import firebase from '@react-native-firebase/app';
import { DrawerContentScrollView } from '@react-navigation/drawer';


export default function profile({ navigation }) {

	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();
	const [Fname, setFname] = useState();
	const [Lname, setLname] = useState();
	const [Email, setEmail] = useState();
	const [Dob, setDob] = useState();
	const [Gender, setgender] = useState();
	const [Phone, setPhone] = useState();
	const [Zip, setZip] = useState();

	function onAuthStateChanged(user) {
		setUser(user);
		// console.log(user);
		getData(user.email);
		if (initializing) setInitializing(false);
	}
	getData = (user) => {
		firestore().collection('userDetails').where('Email', '==', user).get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				// console.log(doc.id, ' => ', doc.data());
				setFname(doc.data().Fname);
				setLname(doc.data().Lname);
				setEmail(doc.data().Email);
				setDob(doc.data().Dob);
				setgender(doc.data().Gender);
				setZip(doc.data().Zip);
				setPhone(doc.data().Phone)

				// console.log(Fname);
				// console.log(doc.data().Fname);
			});
		})
			.catch(function (error) {
				console.log("Error getting documents: ", error);
			});
	}



	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	}, []);

	if (initializing) return null;

	if (!user) {
		return navigation.navigate('Login');
	}
	if (!Fname) {

		return (
			<View>
				<Button type="clear" icon={<Icon name="edit" size={30} style={{ marginLeft: 5 }} type='font-awesome' color="black" />} onPress={() => navigation.navigate('userDetails')} />
				<Text>Please Enter Details</Text>
			</View>
		);
	}
	else{
		return (
			<View>
				<Text>{Fname}</Text>
				<Text>{Lname}</Text>
				<Text>{Phone}</Text>
				<Text>{Email}</Text>
				<Text>{Dob}</Text>
				<Text>{Gender}</Text>
				<Text>{Zip}</Text>
			</View>
		);
	}
}
	const styles = StyleSheet.create({
		appButtonContainer: {
			elevation: 10,
			backgroundColor: "#009688",
			borderRadius: 10,
			paddingVertical: 10,
			paddingHorizontal: 12
		}
	});


	profile.navigationOptions = ({ navigation }) => ({
		title: 'user Details',
		headerLeft: () => <Button type="clear" icon={<Icon name="home" size={30} style={{ marginLeft: 5 }} type='font-awesome' color="black" />} onPress={() => navigation.navigate('Home')} />,
		headerRight: () => <Button type="clear" icon={<Icon name="sign-out" size={30} style={{ marginRight: 5 }} type='font-awesome' color="black" />} onPress={() => { auth().signOut() }} />,
	});

// dparikh11297@gmail.com
// 1234567890