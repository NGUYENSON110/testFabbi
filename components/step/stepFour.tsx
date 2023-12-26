import {View, Text, StyleSheet, Pressable, Dimensions, Alert} from 'react-native';
import React, {useState} from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useMyContext} from '../context/myContext';
import {useNavigation} from '@react-navigation/native';

const StepFour: React.FC = () => {
  const [step, setStep] = useState('Review');
  const navigation = useNavigation();
  const {medal, newServing, numberPeople, restaurent} = useMyContext();

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
  const handleSubmit = (medal:String, newServing:any, numberPeople:Number, restaurent:String) =>{
    console.log('medal', medal);
    console.log('addServing', newServing);
    console.log('numberPeople', numberPeople);
    console.log('restaurent', restaurent);
    Alert.alert("Bạn đặt món thành công!")
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
                backgroundColor: item.tittle === 'Review' ? '#3f3ff5' : 'white',
                paddingHorizontal: 11,
                paddingVertical: 6,
                borderRadius: 5,
              }}>
              <Text
                style={{color: item.tittle === 'Review' ? 'white' : 'black'}}>
                {item.id}
              </Text>
            </View>
            <Text style={styles.buttonStepStyleTextStep}>{item.tittle}</Text>
          </Pressable>
        ))}
      </View>

      <View style={{marginLeft: 20}}>
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Medal</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', marginRight: 40}}>
            {medal}
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>No of People:</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', marginRight: 40}}>
            {numberPeople}
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Restaurent:</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', marginRight: 40}}>
            {restaurent}
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: windowWidth - 30,
          }}>
          <View style={{width: windowWidth - 230}}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>Dishes:</Text>
          </View>

          <View style={{width: windowWidth - 200 }}>
            {newServing.map((item: any) => (
             
                <View style={{flexDirection: 'column', marginLeft: 50}}>
                  <Text style={{fontSize: 17, fontWeight: 'bold', textAlign:"left"}}>
                    Dish: {item.name} - {item.serving}
                  </Text>
                </View>
             
            ))}
          </View>
        </View>
      </View>

      <View style={styles.containerButton}>
        <Pressable
          onPress={() => navigation.goBack()
        }
          style={styles.containerButtonPrevious}>
          <Text style={{fontSize: 15}}>Previous</Text>
        </Pressable>
        <Pressable
          onPress={() => handleSubmit(medal, newServing, numberPeople, restaurent)}
          style={styles.containerButtonNext}>
          <Text style={{fontSize: 15, color: 'white'}}>Submit</Text>
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

export default StepFour;
