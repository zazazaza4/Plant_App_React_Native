import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface ContactItemProps {
  title: string;
  iconName: string;
}

export function ContactItem({title, iconName}: ContactItemProps) {
  return (
    <View className="flex-row items-center space-x-6 my-1">
      <FontAwesome name={iconName} size={24} color="#428288" />
      <Text className="text-lg">{title}</Text>
    </View>
  );
}
