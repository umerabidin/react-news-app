import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../utils/colors'
import Onboarding from 'react-native-onboarding-swiper'
import { useNavigation , CommonActions} from '@react-navigation/native'
import LoginScreen from '../login/Login'

const OnboardingScreen = () => {
    const navigation = useNavigation();
    const DotComponent = ({ selected }) => {
      return (
        <View style={[styles.dotContainer, { borderColor: selected ? 'blue' : 'white' }]}>
          <View style={[styles.dot, { backgroundColor: selected ? 'blue' : 'white' }]} />
        </View>
      );
    };
  return (
    <Onboarding
    // DotComponent={DotComponent}    //Can create custom dots
    onSkip={()=> navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    )}
    onDone={()=> navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    )}
    pages={[
      {
        backgroundColor: Colors.primariColor,
        image: <Image source={require('../../assets/images/bitverx_logo.jpeg')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: Colors.primariColor,
        image: <Image source={require('../../assets/images/bitverx_logo.jpeg')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: Colors.grey,
        image: <Image source={require('../../assets/images/bitverx_logo.jpeg')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
    
    ]}
  />
  )
}
const styles = StyleSheet.create({
  dotContainer: {
    width: 8,
    height: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    padding: 5,
    margin:2
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default OnboardingScreen