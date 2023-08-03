// @app
import React, { useEffect } from 'react';
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
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Level = ({ navigation }) => {
  const dataArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index)); // 'a' to 'z'
  console.log(dataArray, 'dataArray')
  return (
    <View style={{ flex: 1, }}>
      <SafeAreaView style={{ flex: 8, }}>
        <Button
          title={`ENGLISH`}
          titleStyle={styles.titleStyle}
          customStyle={styles.customStyle}
        />
        <View style={{
          height: '80%',
          paddingTop: RFPercentage(2),
        }}>
          <FlatList
            data={dataArray}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-around", }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('MainScreen')
                  }}
                  key={index}
                  style={{
                    backgroundColor: getRandomColor(), padding: RFPercentage(2),
                    margin: RFPercentage(2),
                    borderRadius: RFPercentage(2),
                    justifyContent: "center",
                    alignItems: 'center',
                    flex: 1
                  }}>
                  <Text style={{
                    textTransform: "uppercase",
                    fontFamily: 'LuckiestGuy-Regular', color: Colors.white
                  }}>{`ALPHABET `}{item}</Text>
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <Button
          callBack={() => navigation.pop()}
          title={`Back`}
          titleStyle={styles.titleStyle}
          customStyle={styles.customStyle}
        />
      </SafeAreaView>
      <View onPress={() => { }} style={{ flex: 2 }}>
        <Image resizeMode='cover' style={{ height: '100%', width: "100%" }} source={require('../../assets/gras.png')} />
      </View>
    </View >
  );
};
export default Level;
