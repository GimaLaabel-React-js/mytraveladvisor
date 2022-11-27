import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try{
        const {data: {data}} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'd65829ddaemsh6b46f24e6aa18a5p19c278jsn738e2d130ed8',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    }catch(error){
        
    }
}

// bl_latitude: '11.847676',
// tr_latitude: '12.838442',
// bl_longitude: '109.095887',
// tr_longitude: '109.149359',