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
import { getItem, setItem } from '../../helpers/AsyncStorage';
import { getImage } from './CallBack';

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
  const [voice, setVoice] = useState('');
  const [Score, setScore] = useState([]);
  const getScore = async () => {
    let getScoreFromAsync = await getItem('Score')
    if (getScoreFromAsync) {
      let clearedLevel = []
      let getindex = getScoreFromAsync?.findIndex((val) => val.data == route?.params?.val?.data)
      console.log(getindex, 'getindex')
      if (getindex >= 0) {
        setScore(getScoreFromAsync)

      }
      else {
        if (route.params.val) {
          clearedLevel = [...getScoreFromAsync, route.params.val]
          setScore(clearedLevel)
          setItem('Score', clearedLevel)
        }
      }
    } else {
      setScore([route.params.val])
      setItem('Score', [route.params.val])
    }
  }
  console.log(Score, 'Score')
  useEffect(() => {
    // console.log(route.params, 'route.params.')
    getScore()
    // Tts.setDefaultPitch(1.0)
    Tts.setDefaultRate(0.3, true);
    if (route.params.level == 'Urdu') {
      Tts.setDefaultLanguage('ur-PK');
    }
    else {
      Tts.setDefaultLanguage('en-US');
    }

    // if (route.params.val) setItem('Score', route.params.val)
    if (route.params.level == 'English')
      if (route.params.val.data.toUpperCase() == `A`) { setText(`Apple`) }
      else if (route.params.val.data.toUpperCase() == `B`) { setText(`Ball`) }
      else if (route.params.val.data.toUpperCase() == `C`) { setText(`Cat`) }
      else if (route.params.val.data.toUpperCase() == `D`) { setText(`Doll`) }
      else if (route.params.val.data.toUpperCase() == `E`) { setText(`Egg`) }
      else if (route.params.val.data.toUpperCase() == `F`) { setText(`Frog`) }
      else if (route.params.val.data.toUpperCase() == `G`) { setText(`Glass`) }
      else if (route.params.val.data.toUpperCase() == `H`) { setText(`Hat`) }
      else if (route.params.val.data.toUpperCase() == `I`) { setText(`Ice cream`) }
      else if (route.params.val.data.toUpperCase() == `J`) { setText(`Jug`) }
      else if (route.params.val.data.toUpperCase() == `K`) { setText(`Kite`) }
      else if (route.params.val.data.toUpperCase() == `L`) { setText(`Lamp`) }
      else if (route.params.val.data.toUpperCase() == `M`) { setText(`Monkey`) }
      else if (route.params.val.data.toUpperCase() == `N`) { setText(`Net`) }
      else if (route.params.val.data.toUpperCase() == `O`) { setText(`Onion`) }
      else if (route.params.val.data.toUpperCase() == `P`) { setText(`Pen`) }
      else if (route.params.val.data.toUpperCase() == `Q`) { setText(`Queen`) }
      else if (route.params.val.data.toUpperCase() == `R`) { setText(`Ring`) }
      else if (route.params.val.data.toUpperCase() == `S`) { setText(`Star`) }
      else if (route.params.val.data.toUpperCase() == `T`) { setText(`Train`) }
      else if (route.params.val.data.toUpperCase() == `U`) { setText(`Umbrella`) }
      else if (route.params.val.data.toUpperCase() == `V`) { setText(`Van`) }
      else if (route.params.val.data.toUpperCase() == `W`) { setText(`Watch`) }
      else if (route.params.val.data.toUpperCase() == `X`) { setText(`X-ray`) }
      else if (route.params.val.data.toUpperCase() == `Y`) { setText(`Yacht`) }
      else if (route.params.val.data.toUpperCase() == `Z`) { setText(`Zebra`) }
    // dataArray = [
    // , "ا"
    // , "ب"
    // , "پ"
    // , "ت"
    // , "ٹ"
    // , "ث"
    // , "ج"
    // , "چ"
    // , "ح"
    // , "خ"
    // , "د"
    // , "ڈ"
    // , "ذ"
    // , "ر"
    // , "ڑ"
    // , "ز"
    // , "ژ"
    // , "س"
    // , "ش"
    // , "ص"
    // , "ض"
    // , "ط"
    // , "ظ"
    // , "ع"
    // , "غ"
    // , "ف"
    // , "ق"
    // , "ک"
    // , "گ"
    // , "ل"
    // , "م"
    // , "ن"
    // , "ں"
    // , "ه"
    // , "و"
    // , "ء"
    // , "ی"
    // , "ے"];

    if (route.params.level == 'Urdu') {
      if (route.params.val.data.toUpperCase() == `ا`) { setText(`انگور`); setVoice(`انگور`) }
      if (route.params.val.data.toUpperCase() == `ب`) { setText(`بلی`); setVoice(`بلی`) }
      if (route.params.val.data.toUpperCase() == `پ`) { setText(`پیاز`); setVoice(`پیاز`) }
      if (route.params.val.data.toUpperCase() == `ت`) { setText(`تتلی`); setVoice(`تتلی`) }
      if (route.params.val.data.toUpperCase() == `ٹ`) { setText(`ٹیلی ویژن`); setVoice(`ٹیلی ویژن`) }
      if (route.params.val.data.toUpperCase() == `ث`) { setText(`سمر`); setVoice(`سمر`) }
      if (route.params.val.data.toUpperCase() == `ج`) { setText(`جہاز`); setVoice(`جہاز`) }
      if (route.params.val.data.toUpperCase() == `چ`) { setText(`چابی`); setVoice(`چابی`) }
      if (route.params.val.data.toUpperCase() == `ح`) { setText(`حلوہ`); setVoice(`حلوہ`) }
      if (route.params.val.data.toUpperCase() == `خ`) { setText(`خرگوش`); setVoice(`خرگوش`) }
      if (route.params.val.data.toUpperCase() == `د`) { setText(`درخت`); setVoice(`درخت`) }
      if (route.params.val.data.toUpperCase() == `ڈ`) { setText(`ڈاکٹر`); setVoice(`ڈاکٹر`) }
      if (route.params.val.data.toUpperCase() == `ذ`) { setText(`ذخیرہ`); setVoice(`ذخیرہ`) }
      if (route.params.val.data.toUpperCase() == `ر`) { setText(`رسی `); setVoice(`رسی `) }
      if (route.params.val.data.toUpperCase() == `ڑ`) { setText(`گاڑی`); setVoice(`گاڑی`) }
      if (route.params.val.data.toUpperCase() == `ز`) { setText(`زرافہ`); setVoice(`زرافہ`) }
      if (route.params.val.data.toUpperCase() == `ژ`) { setText(`ٹیلی ویژن`); setVoice(`ٹیلی ویژن`) }
      if (route.params.val.data.toUpperCase() == `س`) { setText(`سیب`); setVoice(`سیب`) }
      if (route.params.val.data.toUpperCase() == `ش`) { setText(`شیر`); setVoice(`شیر`) }
      if (route.params.val.data.toUpperCase() == `ص`) { setText(`صابُن`); setVoice(`صابُن`) }
      if (route.params.val.data.toUpperCase() == `ض`) { setText(`ضعیف`); setVoice(`ضعیف`) }
      if (route.params.val.data.toUpperCase() == `ط`) { setText(`طوطا`); setVoice(`طوطا`) }
      if (route.params.val.data.toUpperCase() == `ظ`) { setText(`ظروف`); setVoice(`ظروف`) }
      if (route.params.val.data.toUpperCase() == `ع`) { setText(`عنق`); setVoice(`عنق`) }
      if (route.params.val.data.toUpperCase() == `غ`) { setText(`غبارہ`); setVoice(`غبارہ`) }
      if (route.params.val.data.toUpperCase() == `ف`) { setText(`فوارہ`); setVoice(`فوارہ`) }
      if (route.params.val.data.toUpperCase() == `ق`) { setText(`قلم`); setVoice(`قلم`) }
      if (route.params.val.data.toUpperCase() == `ک`) { setText(`کرسی`); setVoice(`کرسی`) }
      if (route.params.val.data.toUpperCase() == `گ`) { setText(`گاجر`); setVoice(`گاجر`) }
      if (route.params.val.data.toUpperCase() == `ل`) { setText(`لیمو`); setVoice(`لیمو`) }
      if (route.params.val.data.toUpperCase() == `م`) { setText(`مچھلی`); setVoice(`مچھلی`) }
      if (route.params.val.data.toUpperCase() == `ن`) { setText(`ناریل`); setVoice(`ناریل`) }
      // if (route.params.val.data.toUpperCase() == `ں`) { setText(`انگور`); setVoice(`ungooor`) }
      if (route.params.val.data.toUpperCase() == `و`) { setText(`ورزش`); setVoice(`ورزش`) }
      if (route.params.val.data.toUpperCase() == `ه`) { setText(`ہیرا`); setVoice(`ہیرا`) }
      // if (route.params.val.data.toUpperCase() == `ء`) { setText(`انگور`); setVoice(`Heera`) }
      if (route.params.val.data.toUpperCase() == `ی`) { setText(`چائی`); setVoice(`چائی`) }
      if (route.params.val.data.toUpperCase() == `ے`) { setText(`یاکا`); setVoice(`یاکا`) }
    }


  }, [])
  const handlePlay = () => {

    if (voice.length > 0) Tts.speak(voice);
    // For maths
    else if (route?.params?.val?.data) { Tts.speak(route.params.val.data.toString()) }
  };
  const UrduCustomVoice = () => {
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
              title={Score.length}
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
              {text.length > 0 ?
                <Text style={{
                  fontSize: 16,
                  fontFamily: 'LuckiestGuy-Regular',
                  color: Colors.black,
                }}>{text}</Text>
                :
                <Text style={{
                  fontSize: 16,
                  fontFamily: 'LuckiestGuy-Regular',
                  color: Colors.black,
                }}>{route?.params?.val?.data}</Text>
              }

            </View>
          </View>
          <View style={{ flex: 5, alignItems: 'center', justifyContent: "center", }}>
            {(route.params.level == 'English' || route.params.level == 'Urdu') &&
              // {route?.params?.val?.data &&
              getImage(route?.params?.val?.data)
            }
          </View>
          <Button
            callBack={() => navigation.pop()}
            title={`Back`}
            titleStyle={styles.titleStyle(Colors.primary)}
            customStyle={[styles.customStyle(Colors.white)]}
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
