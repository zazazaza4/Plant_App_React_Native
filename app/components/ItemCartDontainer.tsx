import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageSourcePropType,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ItemCartDontainerProps {
  title: string;
  imageSrc: ImageSourcePropType;
  location: string;
}

const ItemCartDontainer = ({
  title,
  imageSrc,
  location,
}: ItemCartDontainerProps) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2">
      <Image source={imageSrc} className="w-full h-40 object-cover" />
      <Text className="text-[#428288] text-[18px] font-bold">
        {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
      </Text>
      <View className="flex-row items-center space-x-1">
        <Icon name="map-marker" size={20} color="black" />
        <Text className="text-[#428288] text-[14px] font-bold">
          {location?.length > 18 ? `${location.slice(0, 18)}..` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ItemCartDontainer;
