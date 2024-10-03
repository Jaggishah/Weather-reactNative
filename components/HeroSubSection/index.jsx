import { useBearStore } from '@/store';
import React from 'react'
import {  Text, View } from 'react-native'
import { CloudIcon,GlobeAsiaAustraliaIcon,BeakerIcon } from "react-native-heroicons/solid";

const Index = () => {
    const {currentData:{data}} = useBearStore((state) => state)
    console.log(data?.current?.humidity)
    const Data = [ {
        icon : <GlobeAsiaAustraliaIcon size={25}/>,
        title : "Humidity",
        percent : "humidity",
        unit : "%"
    },{
        icon : <BeakerIcon size={25}/>,
        title : "Pressure",
        percent : "pressure_in",
        unit : "in"
    },{
        icon : <CloudIcon size={25}/>,
        title : "Wind Speed",
        percent : "wind_mph",
        unit : "mph"
    }]
  return (
    <View className="flex flex-row items-center w-[90%] py-4 rounded-[50%]  my-3 shadow-lg bg-slate-100 px-12 justify-between"  >
        {Data.map((_, index) => (
             <View className="flex flex-col items-center justify-start" key={index}>
                {_.icon}
                <Text className=" text-black   text-bold font-AfacadFlux shadow-md" > 
                    {data?.current?.[_.percent]} {_.unit}
                </Text>
                <Text className=" text-[#8f5ea4] font-AfacadFluxLight shadow-md " > 
                    {_.title}
                </Text>
        </View>
        ))}
       
      
    </View>
  )
}

export default Index



