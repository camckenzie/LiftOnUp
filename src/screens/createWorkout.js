import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, onPress, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView, DatePicker } from 'react-native';
import { Button, Icon } from 'react-native-elements';
// import CheckBox from 'react-native-check-box'
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
import { Card } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';




export default function createWorkout({ navigation }) {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();
	//const [agree, setAgree] = useState(false);
	const [Chest, setChest] = useState(false);
	const [Back, setBack] = useState(false);
	const [Legs, setLegs] = useState(false);
	const [Shoulders, setShoulders] = useState(false);
	const [Biceps, setBiceps] = useState(false);
	const [Triceps, setTriceps] = useState(false);
	const [Abs, setAbs] = useState(false);
	const [Cardio, setCardio] = useState(false);
	const [Yoga, setYoga] = useState(false);
	const [Pilates, setPilates] = useState(false);
	const [Mode, setMode] = useState(false);
	const [Plan, setPlan] = useState(false);

	var radio_props = [
		{ label: 'Shreding', value: 'Shreding' },
		{ label: 'Bulking', value: 'Bulking' },
		{ label: 'Loosing Fat', value: 'Loosing Fat' }
	];
	var radio_props2 = [
		{ label: 'Beginner', value: 'Beginner' },
		{ label: 'Intermediate', value: 'Intermediate' },
		{ label: 'Advanced', value: 'Advanced' }
	];


	function onAuthStateChanged(user) {
		setUser(user);
		// getData(user.email);
		if (initializing) setInitializing(false);
	}

	const ref = firestore().collection('UserWorkout');
	async function addUserWorkout() {
		await ref.add({
			Mode: Mode,
			userEmail: user.email,
			Chest: Chest,
			Back: Back,
			Legs: Legs,
			Shoulders: Shoulders,
			Biceps: Biceps,
			Triceps: Triceps,
			Abs: Abs,
			Cardio: Cardio,
			Yoga: Yoga,
			Pilates: Pilates,
			Date: new Date(),
			Days: 30,
			Plan: Plan,
		});


	}

	function stepOne() {
		return (
			<View>
				<View>
					<Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Select Your Workout Mode</Text>
				</View>
				<RadioForm
					radio_props={radio_props}
					initial={0}
					formHorizontal={true}
					onPress={(value) => { setMode(value) }}
				/>
			</View>
		)
	}

	function stepTwo() {
		return (
			<View>
				<View>
					<Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Select Your Workout Plan</Text>
				</View>
				<RadioForm
					radio_props={radio_props2}
					initial={0}
					onPress={(value) => { setPlan(value) }}
				/>
			</View>
		)
	}

	function stepThree() {
		return (
			<View>
				<View>
					<Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Select Your Workout Part</Text>
				</View>
				<View style={styles.wrapper}>

					{Platform.OS === 'ios' ? (
						<CheckBox
							boxType="square"
							value={Chest}
							onChange={() => setChest(!Chest)} />
					) : (
						<CheckBox value={Chest} onChange={() => setChest(!Chest)} />
					)}
					<Text style={styles.text}>
						Chest
					</Text>
				</View>
				<View style={styles.wrapper}>
					{Platform.OS === 'ios' ? (
						<CheckBox
							boxType="square"
							value={Back}
							onChange={() => setBack(!Back)} />
					) : (
						<CheckBox value={Back} onChange={() => setBack(!Back)} />
					)}
					<Text style={styles.text}>
						Back
					</Text>
				</View>
				<View style={styles.wrapper}>
					{Platform.OS === 'ios' ? (
						<CheckBox
							boxType="square"
							value={Biceps}
							onChange={() => setBiceps(!Biceps)} />
					) : (
						<CheckBox value={Biceps} onChange={() => setBiceps(!Biceps)} />
					)}
					<Text style={styles.text}>
						Biceps
					</Text>
				</View>
				<View style={styles.wrapper}>
					{Platform.OS === 'ios' ? (
						<CheckBox
							boxType="square"
							value={Triceps}
							onChange={() => setTriceps(!Triceps)} />
					) : (
						<CheckBox value={Triceps} onChange={() => setTriceps(!Triceps)} />
					)}
					<Text style={styles.text}>
						Triceps
					</Text>
				</View>
				<View style={styles.wrapper}>
					{Platform.OS === 'ios' ? (
						<CheckBox
							boxType="square"
							value={Legs}
							onChange={() => setLegs(!Legs)} />
					) : (
						<CheckBox value={Legs} onChange={() => setLegs(!Legs)} />
					)}
					<Text style={styles.text}>
						Legs
					</Text>
				</View>
				<View style={styles.wrapper}>
					{Platform.OS === 'ios' ? (
						<CheckBox
							boxType="square"
							value={Shoulders}
							onChange={() => setShoulders(!Shoulders)} />
					) : (
						<CheckBox value={Shoulders} onChange={() => setShoulders(!Shoulders)} />
					)}
					<Text style={styles.text}>
						Shoulders
					</Text>
				</View>
				<View style={styles.wrapper}>
					{Platform.OS === 'ios' ? (
						<CheckBox
							boxType="square"
							value={Abs}
							onChange={() => setAbs(!Abs)} />
					) : (
						<CheckBox value={Abs} onChange={() => setAbs(!Abs)} />
					)}
					<Text style={styles.text}>
						Abs
					</Text>
				</View>
				<View style={styles.wrapper}>
					{Platform.OS === 'ios' ? (
						<CheckBox
							boxType="square"
							value={Cardio}
							onChange={() => setCardio(!Cardio)} />
					) : (
						<CheckBox value={Cardio} onChange={() => setCardio(!Cardio)} />
					)}
					<Text style={styles.text}>
						Cardio
					</Text>
				</View>
				<View style={styles.wrapper}>
					{Platform.OS === 'ios' ? (
						<CheckBox
							boxType="square"
							value={Yoga}
							onChange={() => setYoga(!Yoga)} />
					) : (
						<CheckBox value={Yoga} onChange={() => setYoga(!Yoga)} />
					)}
					<Text style={styles.text}>
						Yoga
					</Text>
				</View>
				<View style={styles.wrapper}>
					{Platform.OS === 'ios' ? (
						<CheckBox
							boxType="square"
							value={Pilates}
							onChange={() => setPilates(!Pilates)} />
					) : (
						<CheckBox value={Pilates} onChange={() => setPilates(!Pilates)} />
					)}
					<Text style={styles.text}>
						Pilates
					</Text>
				</View>
				<Button
					title="Create Plan"
					onPress={() => {
						if (!Back &&
							!Biceps &&
							!Triceps &&
							!Legs &&
							!Shoulders &&
							!Abs &&
							!Cardio &&
							!Yoga &&
							!Pilates) {
							Alert.alert('Please select at least one exercise');
						} else {
							addUserWorkout();
							navigation.navigate('EditDay1');
						}
					}} />
			</View>

		)
	}

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	}, []);

	if (initializing) return null;

	if (!user) {
		return navigation.navigate('Login');
	}

	return (
		<View>
			<ScrollView>
				<View style={styles.container}>{stepOne()}</View>
				<View style={styles.container}>{stepTwo()}</View>
				<View style={styles.container}>{stepThree()}</View>
			</ScrollView>
		</View>

	);
}
const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 16,
		paddingTop: 10,
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignContent: 'center',
		paddingVertical: 15,
	},
	text: {
		lineHeight: 30,
		marginLeft: 10,
	},
});


createWorkout.navigationOptions = ({ navigation }) => ({
	title: 'Creat Your Own Workout',
	headerLeft: () => <Button type="clear" icon={<Icon name="home" size={30} style={{ marginLeft: 5 }} type='font-awesome' color="black" />} onPress={() => navigation.navigate('Home')} />,
	headerRight: () => <Button type="clear" icon={<Icon name="sign-out" size={30} style={{ marginRight: 5 }} type='font-awesome' color="black" />} onPress={() => { auth().signOut() }} />,
});

// dparikh11297@gmail.com
// 1234567890