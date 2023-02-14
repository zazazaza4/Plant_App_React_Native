import React, {Dispatch, SetStateAction} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';

import {TypeEnum} from '../@types';

interface MenuContainerProps {
  title: string;
  imageSrc: ImageSourcePropType;
  type: TypeEnum;
  setType: Dispatch<SetStateAction<TypeEnum>>;
}

export function MenuContainer({
  imageSrc,
  title,
  type,
  setType,
}: MenuContainerProps) {
  const handlePress = () => {
    const titleLower = title.toLowerCase();
    if (Object.values(TypeEnum).includes(titleLower as TypeEnum)) {
      setType(titleLower as TypeEnum);
    }
  };

  return (
    <TouchableOpacity
      className="items-center justify-center space-y-2"
      onPress={handlePress}>
      <View
        className={`w-24 h-24 shadow-sm rounded-full ${
          type === title.toLowerCase() ? 'bg-gray-200' : ''
        }`}>
        <Image source={imageSrc} className="w-full h-full object-contain" />
      </View>
      <Text className="text-[#00bcc9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
