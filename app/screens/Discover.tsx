import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Entypo';

import {Attractions, Avatar, Hotels, NotFound, Restaurants} from '../assets';
import {MenuContainer, ItemCartDontainer} from '../components';
import {getPlacesData} from '../api';
import {ILatLng, IMainData, TypeEnum} from '../@types';

export function Discover(): JSX.Element {
  const [type, setType] = useState<TypeEnum>(TypeEnum.HOTELS);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mainData, setMainData] = useState<IMainData[]>([]);
  const [latLng, setLatLng] = useState<ILatLng | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type, latLng).then(data => {
      setMainData(data);
      setIsLoading(false);
    });
  }, [type, latLng]);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0b646b] font-bold">Discover</Text>
          <Text className="text-[#527283] text-4xl">the beauty today</Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 items-center justify-center shadow-lg">
          <Image
            className="w-full h-full rounded-md object-cover"
            source={Avatar}
          />
        </View>
      </View>

      <View className="flex-row items-center bg-white mx-4 mt-2 rounded-xl py-1 px-4 shadow-lg">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{fields: 'geometry'}}
          placeholder="Search"
          onPress={(_, detail) => {
            const value = detail?.geometry?.viewport.southwest;
            if (value) {
              setLatLng(detail?.geometry?.viewport.southwest as ILatLng);
            }
          }}
          query={{
            key: 'ADasSyDWpuVw2apN-XpX3garzsHrZgr2AG4sCxQ',
            language: 'en',
          }}
        />
      </View>

      {/* Menu Container */}
      {isLoading ? (
        <View className="flex-1 flex-row items-center justify-center">
          <ActivityIndicator size="large" color="#0b6468" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8">
            <MenuContainer
              key="hotels"
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key="attractions"
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key="restaurants"
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2c7379] text-[28px] bold">Top Tips</Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#a0c4c7] text-[20px] bold">Explore</Text>
                <Icon name="arrow-long-right" size={24} color="#a0c4c7" />
              </TouchableOpacity>
            </View>

            <View className="px4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData.map((item: IMainData, i) => (
                    <ItemCartDontainer
                      key={i}
                      imageSrc={item.photo?.images?.medium.url}
                      title={item?.name}
                      location={item.location_string}
                      data={item}
                    />
                  ))}
                </>
              ) : (
                <View className="w-full h-[400px] items-center space-y-8 justify-center">
                  <Image source={NotFound} className="w-32 h-32 object-cover" />
                  <Text className="text-2xl font-semibold text-[#428288]">
                    Opps... No Data Found
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
