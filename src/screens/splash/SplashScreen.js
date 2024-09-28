import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import Colors from '../../utils/colors';

const logoImg = require('../../assets/images/bitverx_logo.jpeg');

const SplashScreen = () => {
  const navigation = useNavigation();
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);


  useEffect(() => {
    
    const timeout = setTimeout(fetchToken, 5000);

    // Clear timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const fetchToken = async () => {

    try {
     const checkData = await  SecureStore.getItemAsync('alreadyLaunched');
     console.log('value',checkData);
        if(checkData===null){
           SecureStore.setItemAsync("alreadyLaunched", "true");
           setIsFirstLaunch(false);
        }else{
          setIsFirstLaunch(true);
        }
       
    
      const token =  await SecureStore.getItemAsync('token');

      if (token) {
        console.warn(token);
        // Token exists, navigate to the home screen
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Bottom' }],
          })
        );
      } else {
        console.log(isFirstLaunch);
        if(!isFirstLaunch){
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Onboarding' }],
            })
          );
        }else{
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            })
          );
        }
        // Token doesn't exist, navigate to the sign-in screen
        
      }
    } catch (error) {
      console.error(error);
      // Display error message or handle the error
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', justifyContent: 'center', flexDirection: 'row'}}>
      <Image source={logoImg} style={{  

    width: 150,
    height: 150,
    margin: 20,
    borderColor: Colors.primariColor,
    borderWidth: 10,
    backgroundColor: Colors.primariColor,
    borderRadius: 100,
    marginVertical: 60,
    paddingVertical: 20, }} />
    </View>
  );
};

export default SplashScreen;
