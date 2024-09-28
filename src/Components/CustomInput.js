import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from '../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomInput = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => { },
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{ marginBottom: 10 }}>
       {label ? <Text style={style.label}>{label}</Text> : null}
      <View
        style={[
          style.inputContainer,
          {

            borderColor: error
              ? Colors.red
              : isFocused
                ? Colors.primariColor
                : Colors.grey,
            alignItems: 'center',
          },
        ]}>
        <MaterialCommunityIcons
          name={iconName}
          style={{ color:isFocused? Colors.primariColor: Colors.grey, fontSize: 22, marginRight: 10 }}
        />
        <TextInput
          autoCorrect={false}
          
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{ color: Colors.primariColor, flex: 1 }}
          {...props}
        />
        {password && (
          <MaterialCommunityIcons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{ color: Colors.primariColor, fontSize: 22 }}
          />
        )}
      </View>
      {error && (
        <Text style={{ marginTop: 7, color: Colors.red, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: Colors.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10
  },
});

export default CustomInput;