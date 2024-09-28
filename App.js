import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/home/HomeScreen';
import { SplashScreen  } from './src/screens';
import DetailScreen from './src/components/home/DetailScreen';
import LoginScreen from './src/screens/login/Login';
import SignUpScreen from './src/screens/signup/SignUpScreen';
import OnboardingScreen from './src/screens/onboarding/onboarding_screen';
import TermsAndCondition from './src/screens/terms_and_condition/WebViewTerms'


import BottomNavigationScreen from './src/screens/bottom_navigation';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';


const Stack = createStackNavigator();

export default function App() {
  return (
    
    <Provider store={store}>
      <PaperProvider>
       <SafeAreaProvider style={{ flex: 1, backgroundColor: '#ffff'}}>
       <NavigationContainer>
        <Stack.Navigator >
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen}options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUpScreen}options={{headerShown:false}}/>
        <Stack.Screen name="Onboarding" component={OnboardingScreen}options={{headerShown:false}}/>
        <Stack.Screen name="TermsAndConditions" component={TermsAndCondition}options={{headerShown:false}}/>



        
        <Stack.Screen name="Bottom" component={BottomNavigationScreen} options={{headerShown:false}} />

          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
      </PaperProvider>
      </Provider>

      
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4f4d2',
  },
  
});
