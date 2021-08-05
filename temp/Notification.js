import React,{useState, useEffect} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native'; 
//import { Switch } from 'react-native-switch';
import config from '../config.json';

import {fcmService} from '../FCMService';
import {localNotificationService} from '../LocalNotificationService';

export default function Notification({navigation, route}) {

    const [data, setData] = useState([]);
    const [check, setCheck] = useState(true);

    useEffect(() =>{
        if(route.params.language === "eng") {
            setData(config.eng);
            navigation.setOptions({
                title : data.main_title1
            })
        }
        else {
            setData(config.kor);
            navigation.setOptions({
                title : data.main_title1
            })
        }
    })

    useEffect(() => {
        fcmService.registerAppWithFCM();
        fcmService.register(onRegister, onNotification, onOpenNotification);
        localNotificationService.configure(onOpenNotification);
    
        function onRegister(token) {
          console.log('[App] onRegister : token :', token);
        }
    
        function onNotification(notify) {
          console.log('[App] onNotification : notify :', notify);
          const options = {
            soundName: 'default',
            playSound: true,
          };
          localNotificationService.showNotification(
            0,
            notify.title,
            notify.body,
            notify,
            options,
          );
        }
    
        function onOpenNotification(notify) {
          console.log('[App] onOpenNotification : notify :', notify);
          alert('Open Notification : notify.body :' + notify.body);
        }
        return () => {
          console.log('[App] unRegister');
          fcmService.unRegister();
          localNotificationService.unregister();
        };
      }, []);
    
    
    return (
        <View style = {Styels.container}>
            <View style = {{flexDirection : 'row', justifyContent :'space-between', margin : '5%'}}>
                <Text style = {Styels.main_title}>{data.sub_page1_t1}</Text>
                <Switch
                    value = {check} 
                    onValueChange = {(val) => setCheck(val)}
                    
                />
            </View>
            
        </View>
    )
}

const Styels = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'rgb(242,242,242)'
    },
    main_title : {
         fontSize : 20
    },
})