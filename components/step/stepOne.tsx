import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {List} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useMyContext} from '../context/myContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface ComponentProps {
  navigation: any
}


const stepOne: React.FC<ComponentProps> = ({navigation}) => {
  const {medal, numberPeople, setmedal, setnumberPeople} = useMyContext();
  const [expandedMedal, setExpandedMedal] = useState<boolean>(false);
  const [expandedNumber, setExpandedNumber] = useState<boolean>(false);
  const [titleMedal, setTittleMedal] = useState<String>('');
  const [titleNumber, setTittleNumber] = useState<number>(1);
  const [input, setInput] = useState('');
  const handlePress = (medal: string) => {
    // console.log('selectMedal', medal);
    setExpandedMedal(!expandedMedal);
    setTittleMedal(medal);
    setmedal(medal);
  };

  const handlePressNumber = (number: number) => {
    // console.log('selectMedal', number);
    setExpandedNumber(!expandedNumber);
    setTittleNumber(number);
    setnumberPeople(number);
  };

  const Medal = [
    {
      id: 1,
      tittle: 'lunch',
    },
    {
      id: 2,
      tittle: 'breakfast',
    },
    {
      id: 3,
      tittle: 'dinner',
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

  const handleNext = (medel: String, number: any) => {
    console.log('123', medel);
    // console.log('456', number);
    if (medal === '' || Number === undefined) {
      Alert.alert('Bạn hãy chọn bữa ăn và số người ăn ');
    } else {
      navigation.navigate('StepTwo');
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.containerMedal}>
        <List.Section title="Please select a medal">
          <List.Accordion
            title={titleMedal}
            expanded={expandedMedal}
            onPress={() => setExpandedMedal(!expandedMedal)

            }
            style={styles.containerMedalAccordion}
            right={() => <List.Icon icon="camera" />}>
            {Medal.map((item, index) => (
              <List.Item
                title={item.tittle}
                onPress={() => handlePress(item.tittle)}
              />
            ))}
          </List.Accordion>
        </List.Section>
      </View>

      <ScrollView>
        <View style={styles.containerMedal}>
          <List.Section title="Please select Number of people">
            <List.Accordion
              title={titleNumber}
              expanded={expandedNumber}
              onPress={() => setExpandedNumber(!expandedNumber)
              
              }
              style={styles.containerMedalAccordion}
              right={() => <List.Icon icon="camera" />}>
              {ListnumberPeople.map((item, index) => (
                <List.Item
                  title={item.number}
                  onPress={() => handlePressNumber(item.number)}
                />
              ))}
            </List.Accordion>
          </List.Section>
        </View>
      </ScrollView>

      <View style={styles.containerButton}>
        <Pressable style={styles.containerButtonPrevious}>
          <Text style={{fontSize: 15}}></Text>
        </Pressable>
        <Pressable
          onPress={() => handleNext(titleMedal, titleNumber)}
          style={styles.containerButtonNext}>
          <Text style={{fontSize: 15, color: 'white'}}>Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
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
  containerInputNumber: {
    width: windowWidth - 40,
    marginVertical: 10,
    marginHorizontal: 30,
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
});
export default stepOne;
