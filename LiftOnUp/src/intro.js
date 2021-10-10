import {
    View,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
  } from 'react-native';
  import {Text, Icon, Image, Button} from 'react-native-elements';
  import React, {Component} from 'react';
  class Intro extends React.Component {
    static navigationOptions = {
      headerShown: false,
    };
    
    render() {
      

        const styles = StyleSheet.create({
            container: {
              // top:150,
              backgroundColor: '#F4F6FA',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent:'center'
            },
            headerContainer: {
              justifyContent: 'center',
              alignItems: 'center',
              padding: 40
            },
            contentView: {
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            },
          });
          return (
            <View style={styles.container}>
               <View style={styles.headerContainer}>
           
            </View>
            <View style={styles.contentView}>
            <Image 
            source = {require('./LiftOnUp.png')} 
          style={{width:300,height:200}}/> 
           
              <Text h4 tyle={{marginTop: 0}}>Welcome to LiftOnUp</Text>
              <Text h5 style={{textAlign: 'center'}}>
                The best App for track Fitness workout
              </Text>
          <Button
            onPress={() => this.props.navigation.navigate('Registation')}
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
            <Text h4 style={{textAlign: 'center', color: '#004d99',fontWeight: 'bold', fontSize: 20}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
          </View>

);
}
}
export default Intro;