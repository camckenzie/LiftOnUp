import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES} from '../../constants';
import ExerciseDetailsScreen from './ExerciseDetailsScreen';
import ExerciseList from './exercises.json';
const exercises = ExerciseList.exercises;

const ExerciseHomeScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  useEffect(() => {
    setfilterData(exercises);
    setmasterData(exercises);
  });

  const searchFilterFunction = (text) => {
    //check if searched text is not blank
    if (text){
      const newData = masterData.filter(
        function(item){
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
      );
      setfilterData(newData);
      setSearch(text);
    } else{
      setfilterData(masterData);
      setSearch(text);
    }
  };
  const ItemView = ({exercise}) => {
    return (
      // Flat List Item
      <Text
        style={styles.itemStyle}
        onPress={() => navigation.navigate('ExerciseDetailsScreen', {exercise: exercise})}>
        {exercise.name}
        {' ('}
        {exercise.primaryMuscles}
        {')'}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.white,
            marginVertical: 40,
          }}>
          <FontAwesome5Icons
            name="search"
            size={22}
            style={{marginHorizontal: 20}}
          />
          <TextInput 
          onChangeText={(text) => searchFilterFunction(text)}
          placeholder="Search Exercise..." style={{flex: 1}} />
        </View>
        <FlatList
        data={filterData}
        keyExtractor={(item,index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={({item}) => <ItemView exercise={item} />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

export default ExerciseHomeScreen;
