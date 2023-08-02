// @app
import React, { useEffect } from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  FlatList
} from 'react-native';
import Button from '../../components/Button';
import { styles } from './styles';
import Colors from '../../styles/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const MainScreen = ({ navigation }) => {
  const dataArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index)); // 'a' to 'z'

  return (
    <View style={{ flex: 1, }}>
      <View style={{ flex: 8, paddingHorizontal: RFPercentage(2) }}>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>

          <Button
            title={`ENGLISH`}
            titleStyle={styles.titleStyle(Colors.white)}
            customStyle={styles.customStyle('#36C02A')}
          />
          <Button
            title={`ENGLISH`}
            titleStyle={styles.titleStyle(Colors.black)}
            customStyle={styles.customStyle('#FFB800')}
          />
        </View>
        <View style={{
          flex: 4, flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Image source={require('../../assets/sound.png')} />
          <View style={{ height: RFPercentage(10), justifyContent: "center", padding: RFPercentage(2), marginHorizontal: RFPercentage(3), width: "70%", backgroundColor: Colors.white, borderRadius: RFPercentage(2) }}>
            <Text style={{
              fontSize: 16,
              color: Colors.black,
              fontWeight: "800",
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
      <View onPress={() => { }} style={{ flex: 2 }}>
        <Image resizeMode='cover' style={{ height: '100%', width: "100%" }} source={require('../../assets/gras.png')} />
      </View>
    </View >
  );
};
export default MainScreen;