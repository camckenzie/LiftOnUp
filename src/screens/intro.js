import {
    View,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  import {Text, Image, Button} from 'react-native-elements';
  import React, {Component} from 'react';
  class Intro extends React.Component {
    
    static navigationOptions = {
      headerShown: true,
    };
    // styles for Intro Screen
    render() {
        const styles = StyleSheet.create({
            container: {
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            },
            
            headerContainer: {
              textAlign: 'center',
              padding: 30,
              top:0
            },
            contentView: {
              top: 0,
              justifyContent: 'center',
              alignItems: 'center',
            },
          });
          return (
            <View style={styles.container}>
              {/* Logo view */}
            <Image 
            source = {require('../../assets/LiftOnUp.png')} 
          style={{width:300,height:200}}/> 

          {/* Heading Display */}
           <View style={styles. headerContainer}>
              <Text h4 style={{marginBottom: 5,textAlign:'center'}}>Welcome to LiftOnUp</Text>
              <Text h5 >
                The best App for track Fitness workout
              </Text>
              </View>
              <View style={styles.contentView}>
          <Button
            onPress={() => this.props.navigation.navigate('Registration')}
            title="Get started"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={{
              backgroundColor: '#00264d',
              borderRadius: 5,
            }}
            titleStyle={{fontWeight: 'bold', fontSize: 23}}
            containerStyle={{marginVertical: 10, height: 50, width: 200}}
            underlayColor="transparent"
          />
          <Text h5 style={{textAlign: 'center', color: 'grey',fontSize: 20}}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{textAlign: 'center', color: '#004d99',fontWeight: 'bold',fontSize:20}}>
              Sign in
            </Text>
          </TouchableOpacity>
          </View>
    </View>

);
}
}
export default Intro;