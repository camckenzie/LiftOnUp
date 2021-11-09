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
import firestore from '@react-native-firebase/firestore'; 
import { Appbar, TextInput } from 'react-native-paper';

export default function userDetails({ navigation }) {

	const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    
	const [ Fname, setFname ] = useState('');
	const [ Lname, setLname ] = useState('');
	const [ Email, setEmail ] = useState('');
	const [ Phone, setphone ] = useState('');
	const [ Dob, setdob ] = useState('');
	const [ Gender , setgender] = useState('');
	const [ Zip , setzip ] = useState(''); 

    const ref = firestore().collection('userDetails');
    async function addTodo() {    
        await ref.add({      
            Fname: Fname,
			Lname: Lname,
			Email: user.email,
			Phone: Phone,
			Dob: Dob,
			Gender: Gender,
			Zip:Zip,
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
    
    return (
        <View>
            <TextInput label={'First Name'} value={Fname} onChangeText={setFname} />
            <TextInput label={'Last Name'} value={Lname} onChangeText={setLname} />
            <TextInput label={'Email'} value={user.email} onChangeText={setEmail} />
			<TextInput keyboardType='name-phone-pad' label={'phone'} value={Phone} onChangeText={setphone} />
            <TextInput label={'Gender'} value={Gender} onChangeText={setgender} />
            <TextInput label={'Birth Date'} value={Dob} onChangeText={setdob} />
            <TextInput keyboardType = 'name-phone-pad' label={'Zip'} value={Zip} onChangeText={setzip} />
            {/* <Button style={styles.appButtonContainer} onPress={() => addTodo()}><Text>Add Details</Text></Button> */}
			<Button title="Submit" onPress={() => {
				if (Fname !== '' && Lname !== '' && Phone !== '' && Gender !== '' && Zip !== '' && Dob !== '') {
					addTodo();
					navigation.navigate('Home');
				}
			}} />
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


userDetails.navigationOptions = ({ navigation }) => ({
	title: 'user Details',
	headerLeft: () => <Button type="clear" icon={<Icon name="arrow-left" size={30} style={{ marginLeft: 5 }} type='font-awesome' color="black" />} onPress={() => navigation.navigate('profile')} />,
	headerRight: () => <Button type="clear" icon={<Icon name="sign-out" size={30} style={{ marginRight: 5 }} type='font-awesome' color="black" />} onPress={() => { auth().signOut() }} />,
});
