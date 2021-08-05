import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import config from '../config.json';

export default function Domitory({navigation, route}) {

    const [data, setData] = useState(config)
    useEffect(() =>{
        if(route.params.language === "eng") {
            navigation.setOptions({
                title : data.eng.main_title5
            })
        }
        else {
            navigation.setOptions({
                title : data.kor.main_title5
            })
        }
    })

    return (
        <WebView
            source = {{uri : 'https://dorm.pusan.ac.kr/ '}}
        />
    )
}