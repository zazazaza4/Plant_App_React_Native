import React from 'react';
import * as Animatable from 'react-native-animatable';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {HeroImage} from '../assets';

function HomeScreen(): JSX.Element {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}
      <View className="flex-row px-4  mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      {/* Second Section */}
      <View className="px-4 mt-8 space-y-3">
        <Text className="text-[#3c6072] text-5xl">Enjoy the trip with</Text>
        <Text className="text-[#00bcc9] text-4xl font-bold">Good Moments</Text>

        <Text className="text-[#3c6072] text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa
          quasi quo quis corrupti dolorum? Quaerat ducimus a consectetur
          expedita!
        </Text>
      </View>

      {/* Circle Section */}
      <View className="w-72 h-72 bg-[#00bcc9] rounded-full absolute bottom-6 -right-28 -z-10" />
      <View className="w-72 h-72 bg-[#e99265] rounded-full absolute -bottom-28 -left-20 -z-10" />

      {/* Image Container */}
      <View className="flex-0 relative items-center justify-start">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          className="w-4/5 h-4/5 object-cover mt-5"
          source={HeroImage}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Discover' as never)}
          className="absolute bottom-60 w-24 h-24  border-r-2 border-l-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            iterationCount="infinite"
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
            <Text className="text-gray-50 text-4xl font-normal">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
