import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {IMainData} from '../@types';
import {ContactItem, InfoBlock} from '../components';
import {ImageSourcePropType} from 'react-native/Libraries/Image/Image';

interface ItemScreenProps {
  route?: RouteProp<{params: {param: IMainData}}, 'params'>;
}

export function ItemScreen({route}: ItemScreenProps): JSX.Element {
  const data: IMainData | undefined = route?.params?.param;
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const navigation = useNavigation();

  if (!data) {
    navigation.navigate('Discover' as never);
    return <></>;
  }

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image
            source={
              {
                uri:
                  data?.photo?.images?.medium.url ||
                  'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg',
              } as ImageSourcePropType
            }
            className="w-full h-72 object-cover rounded-2xl"
          />
          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate('Discover' as never)}
              className="w-10 h-10 rounded-md items-center justify-center bg-white">
              <Icon name="chevron-left" size={24} color="#06b2be" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06b2be]">
              <FontAwesome name="heartbeat" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            <View className="flex-row space-x-2 items-center">
              <Text className="text-xs font-bold text-gray-100">
                {data.price_level}
              </Text>
              <Text className="text-3xl font-bold text-gray-100">
                {data.price}
              </Text>
            </View>

            <View className="px-2 py-2 rounded-md bg-teal-100">
              <Text>{data.open_now_text || 'Closed'}</Text>
            </View>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-[#428288] text-3xl font-bold">{data.name}</Text>
          <View className="flex-row space-x-2 items-center mt-2">
            <FontAwesome name="map-marker" size={25} color="#8c9ea6" />
            <Text className="text-xl text-[#8c9ea6] font-bold ">
              {data.location_string}
            </Text>
          </View>
        </View>

        <View className="flex-row mt-4 items-center justify-between">
          {data.rating && (
            <InfoBlock title="Ratings" data={data.rating} iconName="star" />
          )}
          {data.price_level && (
            <InfoBlock
              title="Price Level"
              data={data.price_level}
              iconName="dollar"
            />
          )}
          {data.bearing && (
            <InfoBlock
              title="Bearing"
              data={data.bearing}
              iconName="map-signs"
            />
          )}
        </View>

        {data?.description && (
          <Text className="mt-4 tracking-wide text-base justify-start font-semibold text-[#97a6af]">
            {data?.description}
          </Text>
        )}

        {data.cuisine && (
          <View className="flex-row flex-wrap justify-start items-center mt-4">
            {data.cuisine.map(n => (
              <TouchableOpacity
                key={n?.key}
                className="px-2 mx-1 py-1 bg-emerald-100">
                <Text>{n?.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className="mt-3 space-y-2 bg-gray-100 rounded-2xl px-4 py-2">
          {data.phone && <ContactItem title={data.phone} iconName="phone" />}
          {data.email && <ContactItem title={data.email} iconName="envelope" />}
          {data.address && (
            <ContactItem title={data.address} iconName="map-pin" />
          )}
        </View>

        <TouchableOpacity
          onPress={() => setIsBooked(prev => !prev)}
          className="p-4 mt-4 rounded-lg items-center justify-center mb-12 bg-[#06b2be]">
          {isBooked ? (
            <FontAwesome name="check" size={30} color="rgb(243 244 246)" />
          ) : (
            <Text className="text-3xl font-semibold uppercase tracking-wide text-gray-100">
              Book now
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
