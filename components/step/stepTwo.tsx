import {View, Text, StyleSheet, Pressable, Dimensions, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {useMyContext} from '../context/myContext';
import data from '../data/data.json';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {List} from 'react-native-paper';

interface Dish {
  id: number;
  name: string;
  restaurant: string;
  availableMeals: string[];
}

interface Menu {
  dishes: Dish[];
}

interface MyContext{
  medal: String;
  numberPeople: number;
}

interface ComponentProps {
  navigation: any;

}

const stepTwo: React.FC<ComponentProps> = ({navigation}) => {
  const dataDishes = data;
  console.log('dasd', dataDishes);

  const {medal, setrestaurent} = useMyContext();

  const newArray = dataDishes.dishes.reduce((accumulator, dish) => {
    if (dish.availableMeals.includes(medal) &&  !accumulator.some((item) => item.restaurant === dish.restaurant) ) {
      accumulator.push(dish);
    }
    return accumulator;
  }, [] as Dish[]);

  console.log('newArray', newArray);
  const route = useRoute();
  const [restaurent, setRestaurent] = useState<String>("");
  const [tittleRestaurent, setTittleRestaurent] = useState<String>("-----------");
  const [expandedNumber, setExpandedNumber] = useState<boolean>(false);
  // console.log('route1', route);
  const [step, setStep] = useState('Step2');
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

  
  const handlePressNumber = (res:String) => {
    console.log('selectMedal');
    setExpandedNumber(!expandedNumber);
    setTittleRestaurent(res);
    setRestaurent(res);
    setrestaurent(res);
  };
  const handleNext = (res:String) =>{
    if(res==='-----------'){
      Alert.alert("Bạn hãy chọn restaurent")
    }
    else {
      navigation.navigate('StepThree')
    }
  }
  const handlePrevious = () =>{
    navigation.goBack()
  }
  return (
    <View>
      <View style={styles.container}>
        {Step.map((item, index) => (
          <Pressable
            style={styles.buttonStep}
            onPress={() => setStep(item.tittle)}>
            <View
              style={{
                backgroundColor: item.tittle === 'Step2' ? '#3f3ff5' : 'white',
                paddingHorizontal: 11,
                paddingVertical: 6,
                borderRadius: 5,
              }}>
              <Text
                style={{color: item.tittle === 'Step2' ? 'white' : 'black'}}>
                {item.id}
              </Text>
            </View>
            <Text style={styles.buttonStepStyleTextStep}>{item.tittle}</Text>
          </Pressable>
        ))}
      </View>



      <View>
      <ScrollView>
        <View style={styles.containerMedal}>
          <List.Section title="Please select a Restaurent">
            <List.Accordion
              title={tittleRestaurent}
              expanded={expandedNumber}
              onPress={() => setExpandedNumber(!expandedNumber)}
              style={styles.containerMedalAccordion}
              right={() => <List.Icon icon="camera" />}>
              {newArray.map((item, index) => (
                <List.Item
                  title={item.restaurant}
                  onPress={() => handlePressNumber(item.restaurant)}
                />
              ))}
            </List.Accordion>
          </List.Section>
        </View>
      </ScrollView>
      </View>

      <View style={styles.containerButton}>
        <Pressable
          onPress={() => handlePrevious()
        }
          style={styles.containerButtonPrevious}>
          <Text style={{fontSize: 15}}>Previous</Text>
        </Pressable>
        <Pressable
          onPress={() => handleNext(tittleRestaurent)}
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
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerButtonPrevious: {
    backgroundColor: '#cecede',
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
});

export default stepTwo;
