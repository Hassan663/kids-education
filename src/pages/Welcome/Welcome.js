// @app
import React, { useEffect } from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
} from 'react-native';
import { styles } from './styles';
import Colors from '../../styles/Colors';
const Welcome = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <Image
        style={{ height: '100%', width: "100%" }}
        resizeMode='cover'
        source={require('../../assets/welcome.png')} />
      <Text style={{
        color: Colors.primary,
        fontSize: 36, fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'

        //  
        // font-family: Luckiest Guy;
        // font-size: 36px;
        // font-style: normal;
        // font-weight: 400;
        // line-height: normal;
      }}>EDUCATION KIDS</Text>
    </View >
  );
};
export default Welcome;
