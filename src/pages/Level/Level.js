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

const Level = ({ navigation, route }) => {
  const [dataArray, setDataArray] = useState('')
  const [name, setname] = useState('')
  useEffect(() => {
    let colorArr = []
    for (let i = 1; i <= 50; i++) {
      colorArr.push(getRandomColor())
    }

    let levelName = route.params.level
    let dataArray;
    if (levelName == `English`) {
      dataArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index)); // 'a' to 'z'
      setname('ALPHABET')
    } else if (levelName == `Urdu`) {
      dataArray = ["ا", "ب", "پ", "ت", "ٹ", "ث", "ج", "چ", "ح", "خ", "د", "ڈ", "ذ", "ر", "ڑ", "ز", "ژ", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ک", "گ", "ل", "م", "ن", "ں", "ه", "و", "ء", "ی", "ے"];
      setname('حرف')
    } else if (levelName == `Number`) {
      let numberData = []
      for (let i = 1; i <= 50; i++) {
        numberData.push(i);
      }
      dataArray = numberData
      setname('')
    }
    const combinedArray = dataArray.map((data, index) => {
      return {
        color: colorArr[index],
        data: data
      };
    });
    setDataArray(combinedArray)
  }, [])
  return (
    <View style={{ flex: 1, }}>
      <SafeAreaView style={{ flex: 8, }}>
        <Button
          title={route.params.level}
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
                    navigation.navigate('MainScreen', { level: route.params.level })
                  }}
                  key={index}
                  style={{
                    backgroundColor: item?.color, padding: RFPercentage(2),
                    margin: RFPercentage(2),
                    borderRadius: RFPercentage(2),
                    justifyContent: "center",
                    alignItems: 'center',
                    flex: 1
                  }}>
                  <Text style={{
                    textTransform: "uppercase",
                    fontSize: route.params.level == 'Urdu' ? RFPercentage(4) : RFPercentage(3),
                    fontFamily: 'LuckiestGuy-Regular',
                    color: Colors.white,
                    fontWeight: route?.params?.level == 'Urdu' ? 'bold' : null,
                  }}>{name + "     "} {item?.data}</Text>
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
