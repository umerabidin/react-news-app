import React from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import { useState } from 'react';
import { Appbar, } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

const DetailScreen = () => {
    const route = useRoute();
    const { item } = route.params;
    const [isModalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            
            <View style={styles.body}>
                <Text style={{ paddingHorizontal: 30, paddingVertical:30, textAlign:'left' }}>{item.body}</Text>
                <Button
                    title="press"
                    style={{ marginTop: 30, paddingTop: 40 }}
                    onPress={() => setModalVisible(true)}
                    backgroundColor="3d85c6"
                />
                {/* Render user details based on the title */}
            </View>
            <Modal visible={isModalVisible}
                onRequestClose={() => setModalVisible(false)}
                animationType='slide'
                presentationStyle='pageSheet'
            >
                <View style={{ flex: 1, backgroundColor: '#3d85c6', padding: 60 }}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.text1}>post id: </Text>
                        <Text style={styles.text2}>{item.id.toString()}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.text1}>user id: </Text>
                        <Text style={styles.text2}>{item.userId.toString()}</Text>
                    </View>
                    {/* <Text>{post.id.toString()}</Text>
            <Text>user id: {post.userId.toString()}</Text> */}
                    <View style={styles.rowContainer}>
                        <Text style={styles.text1}>post title: </Text>
                        <Text style={styles.text2}>{item.title.toString()}</Text>
                    </View>
                    {/* <Text>post title: {post.title}</Text> */}

                    <Button title="close" backgroundColor="midnightlue" style={{ paddingTop: 20, padding: 20 }}
                        onPress={async () => {
                            
                            setModalVisible(false);
                        }}
                    />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row', // Align items horizontally
        justifyContent: 'space-between', // Add space between the two texts
        paddingHorizontal: 20, // Add padding for better spacing
        marginTop: 20, // Add margin at the top for separation
    },
    text1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
    },
    text2: {
        fontSize: 14,
        fontStyle: 'italic',
        color: 'blue',
    },
    heading: {
        fontSize: 12,
        fontWeight: '600'
    },
    appBar: {
        backgroundColor: '#3d85c6',
        textAlign: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        flexGrow: 1,
    },
    container: {
        flex: 1,
    },
    content: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 20,
    },
});

export default DetailScreen;