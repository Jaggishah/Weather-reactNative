import { create } from 'zustand'
import  axios  from 'axios'

let apikey = ""
let ENDPOINT = {
    // http://api.weatherapi.com/v1/forecast.json?key=7a840213677843ad85e233830240210&q=USA&days=7&aqi=no&alerts=no
    url : `http://api.weatherapi.com/v1/search.json?key=${apikey}&q=`,
    currentURL :(value) => `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${value}&aqi=no`,
    forecastURL :(value) => `http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${value}&days=7&aqi=no&alerts=no`
}

export const useBearStore = create((set) => ({
  searchBar: "",
  searchEnabled: false,
  searchData:{
    data:[],
    loading:false
  },
  currentData:{
    data:{},
    loading:false
  },
  forecastData:{
    data:{},
    loading:false
  },
  setSearchEnabled: (value) => set({ searchEnabled: value }),
  setSearchBar: (value) => set({ searchBar: value, ...(!value && {searchEnabled : false}) }),
  search: async(value) => {
    set({searchData:{data:[],loading:true}})
   
    if (value.length == 0) return;
    try{
        const response = await axios.get(ENDPOINT.url + value)
    
        set({searchData:{data:response.data,loading:true}})
    }catch(e){
        console.log(e)
    }
  },
  selectionFetch: async(value) => {
    set({currentData:{data:[],loading:true}})
   
    try{
        
        const response = await axios.get(ENDPOINT.currentURL(value ? value : "London"))
        console.log(response.data?.location?.country)
        set({currentData:{data:response.data,loading:true}})
    }catch(e){
        console.log(e)
    }
  },
  forecastFetch: async(value) => {
    set({forecastData:{data:[],loading:true}})
   
    try{
        const response = await axios.get(ENDPOINT.forecastURL(value ? value : "London"))
        console.log(response.data)
        set({forecastData:{data:response.data,loading:true}})
    }catch(e){
        console.log(e)
    }
  },

  
}))

