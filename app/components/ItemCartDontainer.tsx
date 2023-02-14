import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {IMainData} from '../@types';
interface ItemCartDontainerProps {
  title?: string;
  imageSrc?: string;
  location?: string;
  data: IMainData;
}

export function ItemCartDontainer({
  title,
  imageSrc,
  location,
  data,
}: ItemCartDontainerProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ItemScreen' as never, {param: data} as never)
      }
      className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2">
      <Image
        source={{
          uri:
            imageSrc ||
            'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg',
        }}
        className="w-full h-40 object-cover"
      />
      {title && location ? (
        <>
          <Text className="text-[#428288] text-[18px] font-bold">
            {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
          </Text>
          <View className="flex-row items-center space-x-1">
            <FontAwesome name="map-marker" size={20} color="black" />
            <Text className="text-[#428288] text-[14px] font-bold">
              {location?.length > 18 ? `${location.slice(0, 18)}..` : location}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
}
