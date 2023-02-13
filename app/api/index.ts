import {ILatLng, TypeEnum} from './../@types';
import axios from 'axios';

export const getPlacesData = async (
  type: TypeEnum,
  latLng?: ILatLng | null,
) => {
  const latLngParams = latLng ? latLng : {lat: '12.91285', lng: '100.87808'};

  try {
    const {data} = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
      {
        params: {
          latitude: latLngParams.lat,
          longitude: latLngParams.lng,
          limit: '30',
          currency: 'USD',
          distance: '2',
          open_now: 'false',
          lunit: 'km',
          lang: 'en_US',
        },
        headers: {
          'X-RapidAPI-Key':
            'b477765635msh31da632df4998cap182d62jsna9d11137e745',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      },
    );

    return data.data;
  } catch (error) {
    return null;
  }
};
