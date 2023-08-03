// @app
import React, { } from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Text
} from 'react-native';
import Button from '../../components/Button';
import { styles } from './styles';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
import LinearGradient from 'react-native-linear-gradient';
const Menu = ({ navigation }) => {


  return (
    <View style={{ flex: 1, }}>
      <SafeAreaView style={{ flex: 8, }}>
        <LinearGradient colors={['#B0CEE3', `rgba(176, 206, 227, 0.00)`]} style={styles.linearGradient}>
           <Button
            callBack={() => navigation.navigate('Menu')}
            title={`MENU`}
            titleStyle={styles.titleStyle}
            customStyle={styles.customStyle}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Level', { level: 'English' })}
            style={{ alignSelf: "center", }}>
            <ImageBackground style={{ alignSelf: "center", justifyContent: 'center', alignItems: 'center', height: 135, width: 285 }} source={require('../../assets/menuABC.png')}  >
              <Text style={{
                fontSize: 24,
                marginTop: '10%',
                fontFamily: 'LuckiestGuy-Regular',
                color: Colors.white,
              }}>English</Text>

            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Level', { level: 'Urdu' })}
            style={{ alignSelf: "center", }}>
            <ImageBackground style={{ alignSelf: "center", justifyContent: 'center', alignItems: 'center', height: 135, width: 285 }} source={require('../../assets/MenuUrdu.png')}  >
              <Text style={{
                fontSize: 24,
                marginTop: '10%',
                fontFamily: 'LuckiestGuy-Regular',
                color: Colors.white,
              }}>Urdu</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Level', { level: 'Number' })}
            style={{ alignSelf: "center", }}>
            <ImageBackground style={{ alignSelf: "center", justifyContent: 'center', alignItems: 'center', height: 135, width: 285 }} source={require('../../assets/MenuNumber.png')}  >
              <Text style={{
                fontSize: 24,
                marginTop: '10%',
                fontFamily: 'LuckiestGuy-Regular',
                color: Colors.white,
              }}>Number</Text>
            </ImageBackground>
          </TouchableOpacity>
        </LinearGradient>

      </SafeAreaView>
      <TouchableOpacity onPress={() => { }} style={{ flex: 2 }}>
        <Image resizeMode='cover' style={{ height: '100%', width: "100%" }} source={require('../../assets/gras.png')} />
      </TouchableOpacity>
    </View >
  );
};
export default Menu;
