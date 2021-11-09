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


export default function showWorkout({ navigation }) {

	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();
	const workout = [];

	function onAuthStateChanged(user) {
		setUser(user);
		// console.log(user);

		if (initializing) setInitializing(false);
	}
	getData = () => {
		firestore().collection('WorkoutCollection').get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				// console.log(doc.id, doc.data());
				workout.push({ "name": doc.id });
			});
			console.log(workout);
		})
			.catch(function (error) {
				console.log("Error getting documents: ", error);
			});
	}



	useEffect(() => {
		// getData();
		firestore().collection('WorkoutCollection').get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				// console.log(doc.id, doc.data());
				workout.push({ "name": doc.id });
			});
			console.log(workout);
		})
		console.log(workout, "workout")
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	}, []);

	if (initializing) return null;

	if (!user) {
		return navigation.navigate('Login');
	}

	renderWorkout = (workout) => {
		console.log(workout, "kdjshfkjshfksdhjkf");
		// workout.forEach(element => {
		// 	return (
		// 		<View>
		// 			<TouchableOpacity style={styles.wo_btn} onPress={onPress} >
		// 				<ListItem>
		// 					<Image source={require('../../assets/Workouts/Deadlift.png')} style={{ width: 60, height: 60 }} />
		// 					<ListItem.Content>
		// 						<ListItem.Title>{element}</ListItem.Title>
		// 					</ListItem.Content>
		// 				</ListItem>
		// 			</TouchableOpacity>
		// 		</View>
		// 	)
		// });

	}
	const Item = ({ item, onPress }) => (
		<TouchableOpacity onPress={onPress}>
			<Text>{item.name}</Text>
		</TouchableOpacity>
	);
	const renderItem = ({ item }) => {

		return (
			<Item item={item} onPress={() => { }} />
		);
	};

	return (
		<View >
			{/* <FlatList data={workout} renderItem={renderItem} keyExtractor={(item) => item.name} /> */}
		</View>
	);
}


const styles = StyleSheet.create({
	edits: {
		alignItems: 'center',
		fontSize: 13,
		paddingVertical: 0,
		// marginHorizontal: 40,
		color: "#121212",
		backgroundColor: "rgba(230,230,230,1)",
		width: "10%"

	},
	editsReps: {
		alignItems: 'center',
		fontSize: 10,
		paddingVertical: 0,
		marginHorizontal: 40,
		color: "#121212",
		fontSize: 13,
		paddingVertical: 0,
		// marginHorizontal: 40,
		color: "#121212",
		backgroundColor: "rgba(230,230,230,1)",
		width: "10%"

	},
	title: {
		textAlign: "left",
		marginVertical: 8,
	},
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		marginHorizontal: 16,
	},
	contentContainer: {
		flex: 1,
		justifyContent: 'flex-start',
	},
	wo_btn: {
		//alignItems: "flex-start",
		backgroundColor: "#DDDDDD",
		padding: 10,
		marginVertical: 5,
	},
	innerText: {
		fontSize: 10,
	},

	footer: {
		height: 100,
		flexDirection: 'row',
		alignItems: 'center',
	},
	start_shape: {
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: "#004d99",
		width: '40%',
		height: 40,
		marginHorizontal: 5,
		marginVertical: 5,
		justifyContent: 'center',
		// THIS CENTERS THE BUTTON
		alignSelf: 'center'
	},
	start_text: {
		color: "rgba(255,255,255,1)",
		fontSize: 16,
		textAlign: "center",
		fontWeight: "bold",
		alignContent: 'center',
	},
})

showWorkout.navigationOptions = ({ navigation }) => ({
	title: 'user Details',
	headerLeft: () => <Button type="clear" icon={<Icon name="home" size={30} style={{ marginLeft: 5 }} type='font-awesome' color="black" />} onPress={() => navigation.navigate('Home')} />,
	headerRight: () => <Button type="clear" icon={<Icon name="sign-out" size={30} style={{ marginRight: 5 }} type='font-awesome' color="black" />} onPress={() => { auth().signOut() }} />,
});

// dparikh11297@gmail.com
// 1234567890