import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation, CommonActions } from "@react-navigation/native";
import Colors from '../../utils/colors';
import StringConstants from '../../utils/StringConstants';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../../components/login/LoginForm';
import Loader from '../../components/Loader';
import EnvironmentalSetup from '../../components/login/EnvironmentalSetup';



const LoginScreen = () => {
  const navigation = useNavigation();

  const loading = useSelector(state => state.screenloading);

  const handleSignUp = async () => {
    navigation.navigate('SignUp');
  };

  return (

    <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
      <Loader visible={loading.isLoading} />
      <View style={{ marginHorizontal: 20 }} >
        <EnvironmentalSetup />
        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/bitverx_logo.jpeg')}
          />
        </View>
        <LoginForm />

        <View style={{ justifyContent: 'center', flexDirection: 'row', marginVertical: 20 }}>
          <Text >
            {StringConstants.DONT_HAVE_ACOUNT}
          </Text >
          <TouchableOpacity onPress={handleSignUp}>

            <Text style={{ color: Colors.primariColor, paddingHorizontal: 5, fontWeight: '600' }}>
              {StringConstants.SIGN_UP}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#178e92',
  },
  text: {
    fontSize: 30,
    color: '#FF0000',
    marginBottom: 100,
  },
  logo: {
    width: 150,
    height: 150,

    borderColor: Colors.primariColor,
    borderWidth: 10,
    backgroundColor: Colors.primariColor,
    borderRadius: 100,
    marginBottom: 30,
    paddingVertical: 20,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
  }
});
export default LoginScreen;