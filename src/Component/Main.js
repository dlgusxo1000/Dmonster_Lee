import React,{useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, Linking} from 'react-native';
import config from '../config.json';

export default function main ({navigation}) {

  const [data, setData] = useState(config);
  const [language, setLanguage] = useState('kor');
  const [button_color, setButton_color] = useState('white');
  const [text_color, setText_color] = useState('white');

  return (
    <View style = {Styles.container}>
      <ImageBackground
        source = {require('../../Img/main_bg.png')}
        style = {{width : '100%', height : '100%' }}
      >
      <View style = {Styles.header}>
        <TouchableOpacity 
          style = {[Styles.language_Button, {backgroundColor : language == 'kor' ? 'white' : 'rgba(0,0,0,0.2)'}]}
          onPress = {() => setLanguage('kor')}
          
        >
          <Text style = {{color : language == 'kor' ? 'black' : 'white'}}>한국어</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style = {[Styles.language_Button, {backgroundColor : language == 'eng' ? 'white' : 'rgba(0,0,0,0.2)'}]}
          onPress = {() => setLanguage('eng')}
          >
          <Text style = {{color : language == 'eng' ? 'black' : 'white'}}>ENG</Text>
        </TouchableOpacity>
      </View>
      <View  style = {Styles.title}>
        <Image
          source = {require('../../Img/main_logo.png')}
          style = {{resizeMode : "contain" , width : '75%'}}
        />
      </View>
      <View style = {Styles.section}>
        <TouchableOpacity
          style = {Styles.nav_Button1}
          onPress = {() => navigation.navigate("Notification", { language : language})}
        >
          <Image 
            source = {require('../../Img/icon1.png')}
            style = {{resizeMode : 'contain', height : 70}}
          />
          <Text>{language == 'kor' ? data.kor.main_title1 : data.eng.main_title1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {Styles.nav_Button1}
          onPress = {() => navigation.navigate('Menu', { language : language})}
        >
          <Image 
            source = {require('../../Img/icon3.png')}
            style = {{resizeMode : 'contain', height : 70}}
          />
          <Text>{language == 'kor' ? data.kor.main_title2 : data.eng.main_title2}</Text>
        </TouchableOpacity>
      </View>

      <View style = {Styles.section}>
        <TouchableOpacity
          style = {Styles.nav_Button2}
          onPress = {() => navigation.navigate('Notice', { language : language})}
        >
          <Image 
            source = {require('../../Img/icon2.png')}
            style = {{resizeMode : 'contain', height : 70}}
          />
          <Text>{language == 'kor' ? data.kor.main_title3 : data.eng.main_title3}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {Styles.nav_Button2}
          onPress = {() => Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401')}
        >
          <Image 
            source = {require('../../Img/icon4.png')}
            style = {{resizeMode : 'contain', height : 70}}
          />
          <Text>{language == 'kor' ? data.kor.main_title4 : data.eng.main_title4}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {Styles.nav_Button2}
          onPress = {() => navigation.navigate('Inquiries', { language : language} )}
        >
          <Image 
            source = {require('../../Img/icon5.png')}
            style = {{resizeMode : 'contain', height : 70}}
          />
          <Text>{language == 'kor' ? data.kor.main_title5 : data.eng.main_title5}</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  )
}

const Styles = StyleSheet.create({
  container : {
    flex : 1,
    
  },
  header : {
    flexDirection : 'row',
    alignItems : 'flex-end',
    width : '100%',
    height : '5%',
    right : 0,
    justifyContent : 'flex-end'
  },
  language_Button : {
    borderRadius : 10,
    borderColor : "white",
    width : 65 ,
    height : 30,
    marginTop : 15,
    marginRight : 10,
    borderWidth : 1,
    alignItems : 'center',
    justifyContent : 'center',
    
  },
  title : {
    height : '28%',
    width : '100%',
    alignItems : 'center',
    justifyContent : 'center',
  },
  section : {
    flexDirection : 'row',
    justifyContent : 'center'
  },
  nav_Button1 : {
    width : 186,
    height : 186,
    backgroundColor : 'white',
    margin : 7,
    borderRadius : 10,
    alignItems : 'center',
    justifyContent : 'center'
  },
  nav_Button2 : {
    width : 119,
    height : 186,
    backgroundColor : 'white',
    margin : 7,
    borderRadius : 10,
    alignItems : 'center',
    justifyContent : 'center'
  },
})