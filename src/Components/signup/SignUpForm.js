import React from 'react'
import Button from '../CustomButton';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { Alert,Keyboard,View,TouchableOpacity,Image,StyleSheet ,Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, CommonActions } from "@react-navigation/native";
import Colors from '../../utils/colors';
import { setLoader } from '../../redux/Reducers/LoadingScreenReducer'
import CustomInput from '../CustomInput';
import { useDispatch, useSelector } from 'react-redux';

function SignUpForm() {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        email: '',
        fullname: '',
        phone: '',
        password: '',
      });
      const navigation = useNavigation();
      const [image, setImage] = useState(null);
      const [errors, setErrors] = useState({});
      const [loading, setLoading] = useState(false);
      const [isChecked, setIsChecked] = useState(false);
    
      const handleChoosePhoto = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    
      const handleTakePhoto = async () => {
        const result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    
      const handleCheckBoxChange = () => {
        setIsChecked(!isChecked);
      };
    
      const handleSubmit = () => {
        const isValid = validate();
        if (isValid) {
          if (image === null) {
            Alert.alert('Please choose photo');
            return;
          }
          if (!isChecked) {
            Alert.alert('Please check the Terms and Conditions checkbox.');
            return;
          }
          register();
        }
      };
      
      const validate = () => {
        Keyboard.dismiss();
        const errors = {};
        let isValid = true;
    
        if (!inputs.email) {
          errors.email = 'Please input email';
          isValid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
          errors.email = 'Please input a valid email';
          isValid = false;
        }
    
        if (!inputs.fullname) {
          errors.fullname = 'Please input fullname';
          isValid = false;
        }
    
        if (!inputs.phone) {
          errors.phone = 'Please input phone number';
          isValid = false;
        }
    
        if (!inputs.password) {
          errors.password = 'Please input password';
          isValid = false;
        } else if (inputs.password.length < 5) {
          errors.password = 'Min password length of 5';
          isValid = false;
        }
    
        setErrors(errors);
        return isValid;
      };
      const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
      };
      const register = () => {
        dispatch(
            setLoader({
                isLoading: true,
            })
        );
        setTimeout(() => {
          try {
            dispatch(
                setLoader({
                    isLoading: false,
                })
            );
            // AsyncStorage.setItem('userData', JSON.stringify(inputs));
            navigation.navigate('Login');
          } catch (error) {
            Alert.alert('Error', 'Something went wrong');
          }
        }, 3000);
      };
    
      const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
      };
      const navigateToWebView = async () => {
        navigation.navigate('TermsAndConditions');
      }
  return (
    <View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {image ? (
              <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 100 }} />
            ) : (
              <Image source={require('../../assets/images/placeholder.jpeg')} style={{ width: 150, height: 150, borderRadius: 100 }} />
            )}
            <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
              <Text>Choose Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
              <Text>Take Photo</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 20 }}>
            <CustomInput
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              iconName="email"
              placeholder="Enter your email address"
              error={errors.email}
            />
            <CustomInput
              onChangeText={text => handleOnchange(text, 'fullname')}
              onFocus={() => handleError(null, 'fullname')}
              iconName="account-outline"
              placeholder="Enter your full name"
              error={errors.fullname}
            />
            <CustomInput
              keyboardType="numeric"
              onChangeText={text => handleOnchange(text, 'phone')}
              onFocus={() => handleError(null, 'phone')}
              iconName="phone-outline"
              placeholder="Enter your phone no"
              error={errors.phone}
            />
            <CustomInput
              onChangeText={text => handleOnchange(text, 'password')}
              onFocus={() => handleError(null, 'password')}
              iconName="lock-outline"
              placeholder="Enter your password"
              error={errors.password}
              password
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={handleCheckBoxChange} />
            <Text style={{ marginLeft: 10 }}>I agree to the</Text>
            <TouchableOpacity onPress={navigateToWebView}>
              <Text style={{ color: Colors.primariColor, paddingHorizontal: 5, fontWeight: '600' }}>
                Terms & Conditions
              </Text>
            </TouchableOpacity>
          </View>
          <Button title="Sign Up" onPress={handleSubmit} />
    </View>
  )
}
const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: Colors.primariColor,
      padding: 10,
      width: '100%',
      borderRadius: 5,
      marginVertical: 10,
    },
    checkbox: {
      marginRight: 10,
    },
  });
  

export default SignUpForm