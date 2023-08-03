// @app
import React, { useEffect, useState } from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView
} from 'react-native';
import Button from '../../components/Button';
import { styles } from './styles';
import Colors from '../../styles/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Tts from 'react-native-tts';
import LinearGradient from 'react-native-linear-gradient';

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const MainScreen = ({ navigation, route }) => {
  const dataArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index)); // 'a' to 'z'
  const [text, setText] = useState('');

  const handlePlay = () => {
    // alert()
    // if (text) {
    Tts.speak('APPLE');
    // }
  };
  return (
    <View style={{ flex: 1, }}>
      <LinearGradient colors={['#B0CEE3', `rgba(176, 206, 227, 0.00)`]} style={{ flex: 8 }}>
        <View style={{ flex: 1, paddingHorizontal: RFPercentage(2) }}>
          <SafeAreaView style={{ flexDirection: 'row', justifyContent: "space-between", }}>

            <Button
              title={`PLAY`}

              callBack={handlePlay}
              titleStyle={styles.titleStyle(Colors.white)}
              customStyle={styles.customStyle('#36C02A')}
            />
            <Button
              title={route?.params?.level}
              titleStyle={styles.titleStyle(Colors.black)}
              customStyle={styles.customStyle('#FFB800')}
            />
          </SafeAreaView>
          <View style={{
            flex: 4, flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Image source={require('../../assets/sound.png')} />
            <View style={{ height: RFPercentage(10), justifyContent: "center", padding: RFPercentage(2), marginHorizontal: RFPercentage(3), width: "70%", backgroundColor: Colors.white, borderRadius: RFPercentage(2) }}>
              <Text style={{
                fontSize: 16,
                fontFamily: 'LuckiestGuy-Regular',
                color: Colors.black,
              }}>APPLE</Text>
            </View>
          </View>
          <View style={{ flex: 5, alignItems: 'center', justifyContent: "center" }}>
            <Image source={require('../../assets/apple.png')} />
          </View>
          <Button
            callBack={() => navigation.pop()}
            title={`Back`}
            titleStyle={styles.titleStyle(Colors.primary)}
            customStyle={[styles.customStyle(Colors.white), { marginTop: '0%', }]}
          />
        </View>
      </LinearGradient>
      <View onPress={() => { }} style={{ flex: 2 }}>
        <Image resizeMode='cover' style={{ height: '100%', width: "100%" }} source={require('../../assets/gras.png')} />
      </View>
    </View >
  );
};
export default MainScreen;
