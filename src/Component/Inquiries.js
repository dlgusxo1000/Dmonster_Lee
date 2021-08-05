import React,{useState, useEffect} from 'react';
import config from '../config.json';
import {View, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';

export default function inquiries( {navigation, route}) {

    const [data, setData] = useState(config);
    
    useEffect(() =>{
        if(route.params.language === "eng") {
            setData(config.eng);
            navigation.setOptions({
                title : data.main_title5
            })
        }
        else {
            setData(config.kor);
            navigation.setOptions({
                title : data.main_title5
            })
        }
    })

    return (
        <View style = {Styles.container}>
            <Text style = {Styles.main_title}>
                {data.sub_page5_t1}
            </Text>
            <Text style = {Styles.sub_title}>
                {data.sub_page5_t1_t1}
            </Text>
            <Text style = {Styles.sub_title}>
                {data.sub_page5_t1_t2}
            </Text>
            <Text style = {Styles.main_title}>
                {data.sub_page4_t1}
            </Text> 
            <TouchableOpacity
                style = {Styles.button}
                onPress = {() => Linking.openURL('https://dorm.pusan.ac.kr/ ')}
            >
                <Text style = {{color : 'white'}}>
                    {data.sub_page4_b1}
                </Text>
            </TouchableOpacity>
            <Text style = {Styles.sub_title}>
                {data.sub_page4_b1_t}
            </Text>
            <TouchableOpacity
                style = {Styles.button}
                onPress = {() => Linking.openURL('https://dorm.pusan.ac.kr/ ')}
            >
                <Text
                    style = {{color : 'white'}}
                >{data.sub_page4_b2}</Text>
            </TouchableOpacity>
            <Text style = {Styles.sub_title}>
                {data.sub_page4_b2_t}
            </Text>
            <TouchableOpacity
                style = {Styles.button}
                onPress = {() => Linking.openURL('tel:$051-510-7827')}
            >
                <Text
                    style = {{color : 'white'}}
                >{data.sub_page4_b3}</Text>
            </TouchableOpacity>
            <Text style = {Styles.sub_title}>
                {data.sub_page4_b3_t}
            </Text>
        </View>
    )
}

const Styles = StyleSheet.create( {
    container : {
        flex : 1,
        backgroundColor : 'rgb(242,242,242)'
    },
    button : {
        height : 50,
        width : '90%',
        backgroundColor : 'rgb(93, 126, 190)',
        borderRadius : 5,
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : '5%',
        marginBottom : '3%'
    },
    main_title : {
        marginTop : '5%', marginLeft : '5%', marginBottom : '4%', fontSize : 20
    },
    sub_title : {
        marginBottom : '3%', marginLeft : '7%', color : 'gray'
    }
})