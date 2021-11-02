import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, Text, Alert,Image,TouchableOpacity } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';



export default function Login({ navigation }) {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showLoading, setShowLoading] = useState(false);

	const login = async () => {
		setShowLoading(true);
		try {
			const doLogin = await auth().signInWithEmailAndPassword(email, password);
			setShowLoading(false);
			if (doLogin.user) {
				navigation.navigate('Home');
			}
		} catch (e) {
			setShowLoading(false);
			Alert.alert(
				e.message
			);
		}
	};
	return (
		<View style={styles.container}>
			 <View>
            <Image 
            source = {require('./LiftOnUp.png')} 
          style={{width:300,height:200,top:100}}/> 
            </View>
			<View style={styles.formContainer}>
				{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text style={{ fontSize: 28, height: 50 }}>Please Login!</Text>
				</View> */}
				<View style={styles.subContainer}>
					<Input
						style={styles.textInput}
						placeholder='Your Email'
						leftIcon={
							<Icon
								name='mail'
								size={24}
								color="#004d99"
							/>
						}
						value={email}
						onChangeText={setEmail}
					/>
				</View>
				<View style={styles.subContainer}>
					<Input
						style={styles.textInput}
						placeholder='Your Password'
						leftIcon={
							<Icon
								name='lock'
								size={24}
								color="#004d99"
							/>
						}
						secureTextEntry={true}
						value={password}
						onChangeText={setPassword}
					/>
				</View>

				<View style={styles.btn_box}>
        <TouchableOpacity
          onPress={() => login()}
          style={styles.btn_shape}
        >
          <Text style={styles.btn_text}>Log In</Text>
        </TouchableOpacity>
        
      </View>
{/* 
				<View style={styles.subContainer}>
					<Button
						style={styles.textInput}
						icon={
							<Icon
								name="input"
								size={15}
								color="white"
								
							/>
						}
						title="Login"
						onPress={() => login()} />
				</View> */}
				{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>Forgot Password?</Text>
				</View> */}
				{/* <View style={styles.subContainer}>
					<Button
						style={styles.textInput}
						icon={
							<Icon
								name="refresh"
								size={15}
								color="white"
							/>
						}
						title="Reset Password"
						onPress={() => {
							navigation.navigate('RestPassword');
						}} />
				</View> */}

<View   style={{ fontSize:20,color:"#00264d",padding:10 }} >
        <TouchableOpacity
           	onPress={() => {
				navigation.navigate('RestPassword');}}
        >
          <Text  style={{textAlign: 'center', color: '#004d99',fontWeight: 'bold',fontSize:15}} >Reset Password?</Text>
        </TouchableOpacity>
        
      </View>
				{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>Not a user?</Text>
				</View> */}
				{/* <View style={styles.subContainer}>
					<Button
						style={styles.textInput}
						icon={
							<Icon
								name="check-circle"
								size={15}
								color="white"
							/>
						}
						title="Register"
						onPress={() => {
							navigation.navigate('Register');
						}} />
				</View> */}
				<Text  style={{textAlign: 'center', fontSize:15}} >If you don't have an Account.</Text>
				<View   style={{ fontSize:20,color:"#00264d",padding:5 }} >
						<TouchableOpacity
							onPress={() => {
								navigation.navigate('Register');}}
						>
						
						<Text style={{textAlign: 'center', color: '#004d99',fontWeight: 'bold',fontSize:15}}>Click Here</Text>
						</TouchableOpacity>
						
					</View>
				
				{showLoading &&
					<View style={styles.activity}>
						<ActivityIndicator size="large" color="#0000ff" />
					</View>
				}
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        // height: 300,
		width:"80%",
        padding: 10,
        top:100,
        justifyContent: 'center',
    },
    subContainer: {
        marginBottom: 10,
        padding: 5,
    },
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        fontSize: 18,
        margin: 5,
        width: 200
    },
	btn_box: {
        flexDirection: "row",
        // width: "100%",
        justifyContent: "center",
        alignContent:"center",
      },
	btn_shape: {
        borderRadius: 5,
        backgroundColor: '#00264d',
        width: 200,
        height: 40,
        marginHorizontal: 15,
        justifyContent: "center",
      },
    btn_text: {
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
      },
})

Login.navigationOptions = ({ navigation }) => ({
	// title: 'Login',
	headerShown: false,
});