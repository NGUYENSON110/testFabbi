import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {List, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {useMyContext} from '../context/myContext';
import data from '../data/data.json';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface Dish {
  id: number;
  name: string;
  restaurant: string;
  availableMeals: string[];
}
interface Serving {
  name: String;
  serving: any;
}
interface ComponentProps {
  navigation: any;

}

const StepThree: React.FC<ComponentProps> = ({navigation}) => {
  const [expandedMedal, setExpandedMedal] = useState<boolean>(false);
  const [expandedNumber, setExpandedNumber] = useState<boolean>(false);
  const {restaurent,numberPeople, setdish, setServing, newServing, setnewServing} = useMyContext();
  const [step, setStep] = useState('Step3');
  const Step = [
    {
      id: 1,
      tittle: 'Step1',
    },
    {
      id: 2,
      tittle: 'Step2',
    },
    {
      id: 3,
      tittle: 'Step3',
    },
    {
      id: 4,
      tittle: 'Review',
    },
  ];
  const ListnumberPeople = [
    {
      number: 1,
    },
    {
      number: 2,
    },
    {
      number: 3,
    },
    {
      number: 4,
    },
    {
      number: 5,
    },
    {
      number: 6,
    },
    {
      number: 7,
    },
    {
      number: 8,
    },
    {
      number: 9,
    },
    {
      number: 10,
    },
  ];
  
  const dataDishes = data;
  const newArray = dataDishes.dishes.reduce((accumulator, dish) => {
    if (dish.restaurant === restaurent) {
      accumulator.push(dish);
    }
    return accumulator;
  }, [] as Dish[]);
  // console.log("newArray",newArray)
  const [numberServing, setNumberServing] = useState<any>(1);
  const [dish, setDish] = useState<String>('');
  const [addServing, SetAddServing] = useState<Serving[]>([]);
  const handlePress = (dish: String) => {
    // console.log('selectMedal');
    setDish(dish);
    setExpandedMedal(!expandedMedal);
    // setTittleMedal(medal);
  };

  const handleServing = (serving: any) => {
    setNumberServing(serving);
    setExpandedNumber(!expandedNumber);
    // console.log('456', number);
    // if (medal === '' || Number === undefined) {
    //   Alert.alert('Please choose medal and Number of people');
    // } else {
    //   navigation.navigate('StepTwo');
    // }
  };

  const handleAddServing = (name: String, serving: Number) => {
    // console.log("4545",name)
    // console.log("ZXCZXC",serving)
    if (addServing.some(item => item.name === name)) {
      Alert.alert('Bạn đã chọn món này rồi, vui lòng chọn món khác');
    } else {
      const newItem: Serving = {name, serving};
      SetAddServing(prevArray => [...prevArray, newItem]);
    }
  };
  // console.log('addServing', addServing);


  const handleNext = (numberServing:Number,people:number,addServing:Serving[]) =>{
    const totalServing = addServing.reduce((sum, item) => sum + (item.serving || 0), 0);
    if(dish==="" || numberServing === undefined ){
      Alert.alert("Vui lòng chọn các món trên")
    }
    else if (totalServing < people){
      Alert.alert("Vui lòng chọn thêm món sao cho bằng tổng số người bạn đặt")
    }
    else{
      Alert.alert("Bạn đặt thành công!")
      navigation.navigate('StepFour');
      setnewServing(addServing);
    }
  }
  console.log("setaddServing",newServing)
  return (
    <View>
      <View style={styles.container}>
        {Step.map((item, index) => (
          <Pressable
            style={styles.buttonStep}
            onPress={() => setStep(item.tittle)}>
            <View
              style={{
                backgroundColor: item.tittle === 'Step3' ? '#3f3ff5' : 'white',
                paddingHorizontal: 11,
                paddingVertical: 6,
                borderRadius: 5,
              }}>
              <Text
                style={{color: item.tittle === 'Step3' ? 'white' : 'black'}}>
                {item.id}
              </Text>
            </View>
            <Text style={styles.buttonStepStyleTextStep}>{item.tittle}</Text>
          </Pressable>
        ))}
      </View>

      <View>
        <View style={styles.containerMedal}>
          <List.Section title="Please select a Dish">
            <List.Accordion
              title={dish}
              expanded={expandedMedal}
              onPress={() => setExpandedMedal(!expandedMedal)}
              style={styles.containerMedalAccordion}
              right={() => <List.Icon icon="camera" />}>
              {newArray.map((item, index) => (
                <List.Item
                  title={item.name}
                  onPress={() => handlePress(item.name)}
                />
              ))}
            </List.Accordion>
          </List.Section>
        </View>
      </View>

      <ScrollView>
        <View style={styles.containerMedal}>
          <List.Section title="Please enter no of servings">
            <List.Accordion
              title={numberServing}
              expanded={expandedNumber}
              onPress={() => setExpandedNumber(!expandedNumber)}
              style={styles.containerMedalAccordion}
              right={() => <List.Icon icon="camera" />}>
              {ListnumberPeople.map((item, index) => (
                <List.Item
                  title={item.number}
                  onPress={() => handleServing(item.number)}
                />
              ))}
            </List.Accordion>
          </List.Section>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Pressable
          style={styles.containerButtonAddDish}
          onPress={() => handleAddServing(dish, numberServing)}>
          <Text style={{fontSize: 20, color: 'white'}}>+</Text>
        </Pressable>
        <View style={{flexDirection:"row", flexWrap:'wrap', width:windowWidth-60, marginTop: 15, justifyContent:'space-between'}}>
          {addServing?.map((item, index) => (
            <View style={{marginRight: 15, marginVertical: 10,width: windowWidth-100 }}>
              <Text style={{fontSize: 15, textAlign: 'left', fontWeight: 'bold'}}>Dish : {item.name}</Text>
              <Text style={{fontSize: 15, textAlign: 'left', fontWeight: 'bold'}}>Serving : {item.serving}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.containerButton}>
        <Pressable style={styles.containerButtonPrevious} onPress={()=>navigation.goBack()}>
          <Text style={{fontSize: 15}}>Previous</Text>
        </Pressable>
        <Pressable
          onPress={() => handleNext(numberServing,numberPeople,addServing)}
          style={styles.containerButtonNext}>
          <Text style={{fontSize: 15, color: 'white'}}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStep: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 9,
  },
  buttonStepStyle: {
    backgroundColor: '#3f3ff5',
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 5,
  },
  buttonStepStyleTextId: {
    color: 'white',
    fontSize: 15,
  },
  buttonStepStyleTextStep: {
    color: 'black',
    fontSize: 15,
    marginHorizontal: 5,
  },
  containerMedal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerMedalAccordion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth - 30,
  },
  containerServing: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerButtonPrevious: {
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: windowWidth - 230,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButtonNext: {
    backgroundColor: '#3f3ff5',
    marginVertical: 10,
    marginRight: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: windowWidth - 230,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButtonAddDish: {
    marginLeft: 20,
    backgroundColor: 'blue',
    width: 25,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default StepThree;
