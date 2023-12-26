import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import StepOne from '../step/stepOne';
import StepTwo from '../step/stepTwo';
import StepThree from '../step/stepThree';
import StepFour from '../step/stepFour';
import {List, MD3Colors} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface MyComponentProps {
  navigation:any
}

const Home:React.FC<MyComponentProps> = ({navigation}) => {
  const [expanded, setExpanded] = useState(true);
  const [titleMedal, setTittleMedal] = useState('-----------');
  const [step, setStep] = useState('Step1');
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

  const handlePress = (medal: string) => {
    console.log('selectMedal', medal);
    setExpanded(!expanded);
    setTittleMedal(medal);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {Step.map((item, index) => (
            <Pressable
              style={styles.buttonStep}
              onPress={() => setStep(item.tittle)}>
              <View
                style={{
                  backgroundColor:
                    item.tittle === 'Step1' ? '#3f3ff5' : 'white',
                  paddingHorizontal: 11,
                  paddingVertical: 6,
                  borderRadius: 5,
                }}>
                <Text
                  style={{color: item.tittle === 'Step1' ? 'white' : 'black'}}>
                  {item.id}
                </Text>
              </View>
              <Text style={styles.buttonStepStyleTextStep}>{item.tittle}</Text>
            </Pressable>
          ))}
        </View>

        <View>
          <ScrollView>
            <StepOne  navigation={navigation}/>
          </ScrollView>
        </View>
      </ScrollView>
      {/* Select Step */}
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
});

export default Home;
