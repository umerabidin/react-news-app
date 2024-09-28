import React from 'react'
import Button from '../CustomButton'
import CustomInput from '../CustomInput'
import * as SecureStore from 'expo-secure-store';
import { useNavigation, CommonActions } from "@react-navigation/native";
import { validateEmail, validatePassword } from '../../utils/validation/FormValidation';
import { Alert, View } from 'react-native';
import { useState } from 'react';
import StringConstants from '../../utils/StringConstants';
import { setLoader } from '../../redux/Reducers/LoadingScreenReducer'
import { useDispatch, useSelector } from 'react-redux';

function LoginForm() {
    const navigation = useNavigation();

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    const register = () => {
        // setLoading(true);
        dispatch(
            setLoader({
                isLoading: true,
            })
        );
        setTimeout(async () => {
            try {
                // setLoading(false);
                dispatch(
                    setLoader({
                        isLoading: false,
                    })
                );
                const token = 'abdul123';
                await SecureStore.setItemAsync("token", token);

                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'Bottom' }],
                    })
                );
            } catch (error) {
                Alert.alert('Error', 'Something went wrong');
            }
        }, 3000);
    };

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };
    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };
    const validate = () => {
        let isValid = true;

        if (!inputs.email) {
            handleError('Please input email', 'email');
            isValid = false;
        } else if (!validateEmail(inputs.email)) {
            handleError('Please input a valid email', 'email');
            isValid = false;
        }

        if (!inputs.password) {
            handleError('Please input password', 'password');
            isValid = false;
        } else if (!validatePassword(inputs.password)) {
            handleError('Min password length of 5', 'password');
            isValid = false;
        }

        if (isValid) {
            register();
        }
    };

    return (
        <View>
            <CustomInput
                onChangeText={text => handleOnchange(text, 'email')}
                onFocus={() => handleError(null, 'email')}
                iconName="email"
                // label="Email"  label is optional
                placeholder={StringConstants.ENTER_EMAIL}
                error={errors.email}

            />
            <CustomInput
                onChangeText={text => handleOnchange(text, 'password')}
                onFocus={() => handleError(null, 'password')}
                iconName="lock-outline"
                // label="Password"
                placeholder={StringConstants.ENTER_PASSWORD}
                error={errors.password}
                password
            />

            <Button title={StringConstants.LOGIN} onPress={validate} />
        </View>
    )
}

export default LoginForm