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

// const interstitialId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-3340464236132360/1338586768';
const interstitialId = 'ca-app-pub-3340464236132360/1338586768';
// const adUnitId2 = 'ca-app-pub-3340464236132360/2693413925';


const interstitial = InterstitialAd.createForAdRequest(interstitialId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const Welcome = ({ navigation }) => {

  {/* INTERSTITIAL */ }
  useEffect(async () => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => { interstitial.show(); });
    interstitial.load();
    return unsubscribe;
  }, [])
  {/* INTERSTITIAL */ }

  return (
    <View style={styles.container}>
      {/* BANNER */}
      {/* <View style={{ width: '100%', alignItems: 'center' }}>
        <BannerAd
          size={BannerAdSize.BANNER}
          // unitId={'ca-app-pub-3340464236132360/7129135347'}
          unitId={adUnitId2}
          // unitId={"ca-app-pub-9152919921144751/4080981743"} 
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View> */}
      {/* BANNER */}
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
