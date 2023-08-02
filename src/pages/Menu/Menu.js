// @app
import React, { } from 'react';
import {
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import Button from '../../components/Button';
import { styles } from './styles';
const Menu = ({ navigation }) => {


  return (
    <View style={{ flex: 1, }}>
      <View style={{ flex: 8, }}>
        <Button
          callBack={() => navigation.navigate('Menu')}
          title={`MENU`}
          titleStyle={styles.titleStyle}
          customStyle={styles.customStyle}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Level')}
          style={{ alignSelf: "center", }}>
          <Image resizeMode='contain' style={{ alignSelf: "center", }} source={require('../../assets/menu.png')} />
        </TouchableOpacity>

      </View>
      <TouchableOpacity onPress={() => { }} style={{ flex: 2 }}>
        <Image resizeMode='cover' style={{ height: '100%', width: "100%" }} source={require('../../assets/gras.png')} />
      </TouchableOpacity>
    </View >
  );
};
export default Menu;
