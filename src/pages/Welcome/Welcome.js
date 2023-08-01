// @app
import React from 'react';
import {
  View,
  ImageBackground,
  Text,
} from 'react-native';

import { styles } from './styles';
import Button from '../../components/Button';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.welcomeBg}
        resizeMode='cover'
        source={require('../../assets/welcome.png')} >

        <Text style={styles.welcomeHeading}>EDUCATION KIDS</Text>

        <Button
          callBack={() => navigation.navigate('Menu')}
          title={`Get Started`}
          titleStyle={styles.titleStyle}
          customStyle={styles.customStyle}
        />
      </ImageBackground>
    </View >
  );
};
export default Welcome;
