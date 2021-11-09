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


export default function Workout({ navigation }) {

	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();


	function onAuthStateChanged(user) {
		setUser(user);
		// console.log(user);
		// getData(user.email);
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

	const Workout = [
		{
			id: 1,
			name: "Day 1",
			excercise: "    Training",
			state: "    Not Started",
		},
		{
			id: 2,
			name: "Day 2",
			excercise: "    Cardio",
			state: "    Not Started",
		},
		{
			id: 3,
			name: "Day 3",
			excercise: "    Training",
			state: "    Not Started",
		},
		{
			id: 4,
			name: "Day 4",
			excercise: "    Cardio",
			state: "    Not Started",
		},
		{
			id: 5,
			name: "Day 5",
			excercise: "    Training",
			state: "    Not Started",
		},
		{
			id: 6,
			name: "Day 6",
			excercise: "    Cardio",
			state: "    Not Started",
		},
		{
			id: 7,
			name: "Day 7",
			excercise: "    Training",
			state: "    Not Started",
		},
	];
	const Item = ({ item, onPress }) => (
			<TouchableOpacity onPress={onPress}>
					<Text>{item.name} {item.excercise} {item.state}</Text>
			</TouchableOpacity>
	);
	const renderItem = ({ item }) => {

		return (
			<Item item={item} onPress={() => {}} />
		);
	};
	return (
		<View>
			<Button type="clear" icon={<Icon name="edit" size={30} style={{ marginLeft: 5 }} type='font-awesome' color="black" />} title="Add Workout" onPress={() => navigation.navigate('createWorkout')} />
			<FlatList data={Workout} renderItem={renderItem} keyExtractor={(item) => item.id} />
		</View>
	);

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


Workout.navigationOptions = ({ navigation }) => ({
	title: 'Workout',
	headerLeft: () => <Button type="clear" icon={<Icon name="home" size={30} style={{ marginLeft: 5 }} type='font-awesome' color="black" />} onPress={() => navigation.navigate('Home')} />,
	headerRight: () => <Button type="clear" title="LogOut" onPress={() => { auth().signOut() }} />,
});

// dparikh11297@gmail.com
// 1234567890