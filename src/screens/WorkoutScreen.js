import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  SafeAreaView
} from 'react-native';
import EditDay1 from './editDay1.js'
export default class WorkoutSCreen extends Component {

  constructor(props) {
  const handlePress = () => props.navigation.navigate('Add a workout');

    super(props);
    this.state = {
      activitiesList: [],   
  }
    this.state = {
      modalVisible:false,
      userSelected:[],
      data: [
        {id:1,  name: "Monday"},
        {id:2,  name: "Tuesday"},
        {id:3,  name: "Wednesday"} ,
        {id:4,  name: "Thursday"} ,
        {id:5,  name: "Friday"} ,
        {id:5,  name: "Saturday"} ,
        {id:5,  name: "Sunday"} ,

      ]
    };
  }

createNewWorkoutName = () => {
  const handlePress = () => props.navigation.navigate('Add a workout');
  Alert.alert('Workout Name', 'Please Create... ');
}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
         <SafeAreaView style={{ flex: 1 }}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}
            onPress={() => navigate("Details", { data: item }) }
              >
              <Image style={styles.image} source={{uri: item.image}}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.count}>{item.count}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Explore now</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            
          )}}/>
    </SafeAreaView>
    {/* Work Name Create */}
      <View styles={styles.footer}>
                <TouchableOpacity style={styles.start_shape} onPress={()=> this.createNewWorkoutName()}>
                  <Text style={styles.start_text}>Create Workout Name</Text>  
                </TouchableOpacity>
          </View>
         
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7"
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:15,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 10,
    marginRight: 10,
    marginTop:10,
    backgroundColor:"white",
    padding: 5,
    flexDirection:'row',
    borderRadius:10,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },
  start_shape: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor:"#004d99",
    width: '45%',
    height: 43,
    // marginHorizontal: 5,
    // marginVertical: 5,
    justifyContent: 'center',
    // THIS CENTERS THE BUTTON
    alignSelf: 'center'
  },
  start_text: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    padding:7,
    textAlign: "center",
    fontWeight: "bold",
    alignContent: 'center',
  },
}); 