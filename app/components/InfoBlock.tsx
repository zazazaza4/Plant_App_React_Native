import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface InfoBlockProps {
  title: string;
  data: string;
  iconName: string;
}

export function InfoBlock({title, data, iconName}: InfoBlockProps) {
  return (
    <View className="flex-row items-center space-x-2 ">
      <View className="w-12 h-12 bg-red-100 rounded-2xl items-center justify-center shadow-md">
        <FontAwesome name={iconName} size={24} color="#d58574" />
      </View>
      <View>
        <Text className="text-[#515151]">{data}</Text>
        <Text className="text-[#515151]">{title}</Text>
      </View>
    </View>
  );
}
