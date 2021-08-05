import React,{useState, useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Switch, Button } from 'react-native';
import { onChange } from 'react-native-reanimated';
import config from '../config.json';


export default function Notification ({navigation, route}) {

    const [data, setData] = useState([]);
    const [check, setCheck] = useState(true);
    const [onDrop, setOnDrop] = useState(false);

    useEffect(() => {
        if(route.params.language == 'kor') {
            setData(config.kor);
            navigation.setOptions({
                title : data.main_title1
            })
        }
        else {
            setData(config.eng);
            navigation.setOptions({
                title : data.main_title1
            })
        }
    })

    const onToggleSwitch = () => {
        setCheck(!check)
    }

    return (
        <View style = {Styles.container}>
            <View style = {Styles.title}>
                <Text style = {{fontSize : 20}}>{data.sub_page1_t1}</Text>
                <Switch
                    value = {check}
                    onValueChange = {onToggleSwitch}
                />
            </View>
            <View style = {Styles.dropDown}>
                <TouchableOpacity 
                    onPress = {() => setOnDrop(!onDrop)}
                >
                    {route.params.language == 'kor' ? (
                        <Text style = {{fontSize : 20}}>드롭다운 메뉴 테스트입니다.</Text>
                    ) :
                    (
                        <Text style = {{fontSize : 20}}>DropDown Menu Test</Text>
                    )
                    }
                </TouchableOpacity>
                
            </View>
            {onDrop ? (
                    <View style = {{backgroundColor : 'white', margin : 5, }}> 
                        <Text style = {{fontSize : 15, margin : 15}}>메뉴 1</Text>
                        <Text style = {{fontSize : 15, margin : 15}}>메뉴 2</Text>
                        <Text style = {{fontSize : 15, margin : 15}}>메뉴 3</Text>
                    </View>
                    
                    
                ) :
                    null
                }
        </View>
    )
}

const Styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor : 'rgb(242,242,242)'
    },
    title : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        margin : 15,
    },
    dropDown : {
        margin : 15,
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    
})