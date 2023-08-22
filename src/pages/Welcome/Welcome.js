// @app
import React, { useEffect } from 'react';
import {
  View,
  ImageBackground,
  Text,
} from 'react-native';

import { styles } from './styles';
import Button from '../../components/Button';
import { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize, AdEventType, RewardedAdEventType } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-3340464236132360/1338586768';
console.log(adUnitId,'adUnitId')
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});
const Welcome = ({ navigation }) => {

  useEffect(async () => {
    // await screenTrace()
    // crashlytics().log('code mounted.');
    // crashlytics().crash();
    // const trace = await perf().startTrace('get_Code');

    // setCodeForUI()

    // await trace.stop();
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      interstitial.show();
    });
    // Start loading the interstitial straight away
    interstitial.load();
    // Unsubscribe from events on unmount
    return unsubscribe;

  }, [])
  return (
    <View style={styles.container}>
      {/* <View style={{ width: '100%', alignItems: 'center' }}>

        <BannerAd
          size={BannerAdSize.BANNER}
          // unitId={'ca-app-pub-3340464236132360/7129135347'}
          unitId={adUnitId}
          // unitId={"ca-app-pub-9152919921144751/4080981743"} 
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View> */}
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
