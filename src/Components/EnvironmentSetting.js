
import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { useDispatch, useSelector } from 'react-redux';

import { setEnv } from '../redux/Reducers/EnvironmentalSlice';
import Constants from '../utils/Constants';

const PopupMenu = () => {
    const dispatch = useDispatch();
    const [popupVisible, setPopupVisible] = useState(false);

    const handleSwitchToDev = () => {
        dispatch(
            setEnv({
                apiUrl: Constants.BASE_API_URL_DEV,
                bannerUrl: Constants.BASE_API_URL_DEV,
                environmentalName: Constants.DEV,
            })
        );
        onClosePopupMenu();

    };

    const handleSwitchToStage = () => {
        dispatch(
            setEnv({
                apiUrl: Constants.BASE_API_URL_STAGE,
                bannerUrl: Constants.BASE_API_URL_STAGE,
                environmentalName: Constants.STAGE,

            })
        );
        onClosePopupMenu();
    };

    const handleSwitchToProd = () => {
        dispatch(
            setEnv({
                apiUrl: Constants.BASE_API_URL_PROD,
                bannerUrl: Constants.BASE_API_URL_PROD,
                environmentalName: Constants.PROD,

            })
        );
        onClosePopupMenu();

    };
    const onClosePopupMenu = () => {
        setPopupVisible(false);
    }
    const onOpenPopupMenu = () => {
        setPopupVisible(true);
    }


    return (

        <View
            style={{
                marginVertical: 10,

                flexDirection: 'row',
                justifyContent: 'start',



            }}>
            <Menu
                visible={popupVisible}
                onDismiss={onClosePopupMenu}
                anchor={<Button onPress={onOpenPopupMenu}>
                    <MaterialCommunityIcons
                        name='power-settings'
                        style={{ fontSize: 22, marginRight: 10 }}
                    />
                </Button>}>
                <Menu.Item onPress={handleSwitchToDev} title="Dev" />
                <Divider />
                <Menu.Item onPress={handleSwitchToStage} title="Stage" />
                <Divider />
                <Menu.Item onPress={handleSwitchToProd} title="Prod" />
            </Menu>
        </View>

    );
};

export default PopupMenu;