// @app
import React, { useEffect } from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
} from 'react-native';
import { styles } from './styles';
const Welcome = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <Image
        style={{ height: '100%', width: "100%" }}
        resizeMode='cover'
        source={require('../../assets/welcome.png')} />
    </View >
  );
};
export default Welcome;
