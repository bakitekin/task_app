import React from 'react';
import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      {/* <LottieView
        source={require('../assets/Animations/to-do.json')}
        className="flex-1"
        loop={false}
        onAnimationFinish={() => {
          setTimeout(() => {
            console.log('deneme');
          }, 900);
        }}
      /> */}
    </View>
  );
};

export default SplashScreen;
