

import Colors from '../../utils/colors';
import SignUpForm from '../../components/signup/SignUpForm';
import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';

const SignUpScreenUI = () => {
  const loading = useSelector(state => state.screenloading);
  const handleSignIn = async () => {
    navigation.navigate('Login');
  }
  return (
    <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
      <Loader visible={loading.isLoading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 20, paddingHorizontal: 20 }}>
        <View>
          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ color: Colors.primariColor, fontSize: 32, marginVertical: 10, fontWeight: "800", justifyContent: 'center', textAlignVertical: 'center' }}>
              SignUp
            </Text>
          </View>
          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ color: Colors.grey, fontSize: 18, marginVertical: 10, justifyContent: 'center', textAlignVertical: 'center' }}>
              Enter Your Details to Register
            </Text>
          </View>
          <SignUpForm />

          <View style={{ justifyContent: 'center', flexDirection: 'row', marginVertical: 20 }}>
            <Text>
              Already have account?
            </Text>
            <TouchableOpacity onPress={handleSignIn}>
              <Text style={{ color: Colors.primariColor, paddingHorizontal: 5, fontWeight: '600' }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreenUI;

