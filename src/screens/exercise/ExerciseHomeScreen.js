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
import {Picker} from '@react-native-picker/picker';
const exercises = ExerciseList.exercises;

const ExerciseHomeScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);

  const [selectedBP, setSelecteBP] = useState("");
  const [selectedCat, setSelectedCat] = useState("");

  useEffect(() => {
    setfilterData(exercises);
    setmasterData(exercises);
  },[]);


  const searchFilterFunction = (text) => {
    //check if searched text is not blank
    if (text){
      const newData = masterData.filter(item => {
        const itemData = `${item.name.toUpperCase()} ${item.primaryMuscles[0].toUpperCase()}`;
        // function(item){
        //   const itemData = item.name
        //     ? item.name.toUpperCase()
        //     : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setSearch(text);
    } 
    else{
      setfilterData(masterData);
      setSearch(text);
    }
  };

  //filter by category
  const filterCatFunction = (selectedCat) => {
    setSelectedCat(selectedCat);
    if (selectedCat != 'Any Category') {
      const newData = masterData.filter(item => {
        const itemData = `${item.category.toUpperCase()}`;
        const textData = selectedCat.toUpperCase();
        return itemData.indexOf(textData) > -1;
    });
    setfilterData(newData);//update list
  }
    else{
      setfilterData(masterData);
    }
  };

  //filter by bodyparts
  const filterBodyFunction = (selectedBP) => {
    setSelecteBP(selectedBP);
    if (selectedBP != 'Any Body Part') {
      const newData = masterData.filter(item => {
        const itemData = `${item.primaryMuscles[0].toUpperCase()}`;
        const textData = selectedBP.toUpperCase();
        return itemData.indexOf(textData) > -1;
    });
    setfilterData(newData);//update list
  }
    else{
      setfilterData(masterData);
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
        <Picker
          selectedValue={selectedCat}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => filterCatFunction(itemValue)}
        >
          <Picker.Item label="Any Category" value="Any Category" />
          <Picker.Item label="Strength" value="strength" />
          <Picker.Item label="Stretching" value="stretching" />
          <Picker.Item label="Strongman" value="strongman" />
          <Picker.Item label="Olympic weightlifting" value="olympic weightlifting" />
          <Picker.Item label="Plyometrics" value="plyometrics" />
          <Picker.Item label="Powerlifting" value="powerlifting" />
          

        </Picker>
        <Picker
          selectedValue={selectedBP}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => filterBodyFunction(itemValue)}
        >
          <Picker.Item label="Any Body Part" value="Any Body Part" />
          <Picker.Item label="Abdominals" value="abdominals" />
          <Picker.Item label="Adductors" value="adductors" />
          <Picker.Item label="Back" value="Back" />
          <Picker.Item label="Biceps" value="biceps" />
          <Picker.Item label="Chest" value="chest" />
          <Picker.Item label="Hamstring" value="hamstring" />
          <Picker.Item label="Quadriceps" value="quadriceps" />
          <Picker.Item label="Triceps" value="triceps" />
          <Picker.Item label="Shoulders" value="Shoulders" />
        </Picker>
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
