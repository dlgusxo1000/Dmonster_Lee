import React,{useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import config from '../config.json';

export default function Menu({navigation, route}) {

    const data = config;

    useEffect(() =>{
        if(route.params.language === "eng") {
            navigation.setOptions({
                title : data.eng.main_title2
            })
        }
        else {
            navigation.setOptions({
                title : data.kor.main_title2
            })
        }
    })

    return (
        <WebView 
            source = {{uri : 'https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403'}}
        />
    )
}