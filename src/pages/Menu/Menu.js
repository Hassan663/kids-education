// @app
import React, { useEffect } from 'react';
import {
  Image,
  View,
} from 'react-native';
import Button from '../../components/Button';
import { styles } from './styles';
const Menu = ({ navigation }) => {


  return (
    <View style={{ flex: 1 }}>
      <Button
        callBack={() => navigation.navigate('Menu')}
        title={`Menu`}
        titleStyle={styles.titleStyle}
        customStyle={styles.customStyle}
      />
      <Image resizeMode='contain' style={{ alignSelf: "center", flex: 1 }} source={require('../../assets/menu.png')} />
      <Image resizeMode='contain' style={{ alignSelf: "center" }} source={require('../../assets/gras.png')} />
    </View>
  );
};
export default Menu;
