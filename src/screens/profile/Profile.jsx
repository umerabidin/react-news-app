import { StyleSheet, Text, View, FlatList, Pressable, ActivityIndicator,Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, CommonActions } from "@react-navigation/native";
import * as SecureStore from 'expo-secure-store';

const ProfileScreen = () => {
  const navigation = useNavigation();
    const products = useSelector(state => state.product.data);
    const handleLogout = () => {
      Alert.alert(
        'Log Out',
        'Are you sure you want to log out?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              handleLogoutRoute();
              // Perform logout action
              console.log('User logged out');
            },
          },
        ],
        { cancelable: false },
      );
    };
    useEffect(() => {
        // console.log(JSON.stringify(products)); 
    
      }, []
      );
      const handleLogoutRoute = async () => {

        await SecureStore.deleteItemAsync("token");
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        );
       
      };
      return (
      <View style={styles.container}>
      {/* <Text>Product List</Text>
      <Text>Number of Products: {products.length}</Text> */}
      <Pressable onPress={() => handleLogout()}>
      <View style={styles.rowContainer}>
      <MaterialCommunityIcons name="logout"  size={20} />
                        <Text style={styles.text2}>LogOut</Text>
                    </View>
                    </Pressable>
</View>
      );
}
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'flex-start', // Add space between the two texts
    paddingHorizontal: 20, // Add padding for better spacing
    marginTop: 20, // Add margin at the top for separation
},
 
  title: {
    textAlign: 'center',
    flexGrow: 1, // This allows the title to take up all available space
  },
  container: {
    flex: 1,
    paddingTop: 25,


  },
 
  newsCardHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  listItem: {
    padding: 40,
    // borderBottomWidth: 10,
    // borderBottomColor: '#990000',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#990000',

  },
});
export default ProfileScreen;