import React,{useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import config from '../config.json';

export default function Notice({navigation, route}) {

    const data = config

    useEffect(() =>{
        if(route.params.language === "eng") {
            navigation.setOptions({
                title : data.eng.main_title4
            })
        }
        else {
            navigation.setOptions({
                title : data.kor.main_title4
            })
        }
    })

    return (
        <WebView 
            source = {{uri : 'https://dorm.pusan.ac.kr/dorm/bbs/list03/20000602'}}
        />
    )
}