import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {TypeEnum} from '../@types/TypeMenu';
import {Attractions, Avatar, Hotels, Restaurants} from '../assets';
import MenuContainer from '../components/MenuContainer';
// import {useNavigation} from '@react-navigation/native';

function Discover(): JSX.Element {
  //   const navigation = useNavigation();
  const [type, setType] = useState<TypeEnum>(TypeEnum.HOTELS);

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
            console.log(detail?.geometry?.viewport);
          }}
          query={{
            key: 'ADasSyDWpuVw2apN-XpX3garzsHrZgr2AG4sCxQ',
            language: 'en',
          }}
        />
      </View>

      {/* Menu Container */}
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
          <MenuContainer
            key="hotel"
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
          <View>
            <Text>Top Tips</Text>
            <TouchableOpacity>
              <Text>Explore</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Discover;
