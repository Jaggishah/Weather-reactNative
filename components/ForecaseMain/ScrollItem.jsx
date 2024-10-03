import React from "react";
import { Text, View } from "react-native";
import { CloudIcon } from "react-native-heroicons/solid";

const ScrollItem = ({ title, icon, unit, percent}) => {
  return (
    <View className="flex flex-col items-center justify-start shadow-lg bg-slate-100 p-3 rounded-lg px-4 py-7" >
      
      <Text className=" text-black mb-2 text-bold font-AfacadFlux shadow-md">
        {title}
      </Text>
      <CloudIcon size={25} />
      <Text className=" text-[#8f5ea4] font-AfacadFluxLight shadow-md mt-2">
        {percent} {unit}
      </Text>
    </View>
  );
};

export default ScrollItem;
