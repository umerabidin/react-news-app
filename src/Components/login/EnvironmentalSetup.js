import React from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PopupMenu from '../EnvironmentSetting'
import Colors from '../../utils/colors';


function EnvironmentalSetup() {
    const environment = useSelector(state => state.environment);
  return (
    <View style={{ flexDirection: 'row', paddingVertical: 30 }}>
    <PopupMenu />
    <Text style={{ color: Colors.black, paddingVertical: 20 }}>Current Environment:</Text>
 

    <Text style={{ color: Colors.primariColor, paddingVertical: 20, fontWeight: '800' }}>{environment.environmentalName}</Text>
  </View>
  )
}

export default EnvironmentalSetup