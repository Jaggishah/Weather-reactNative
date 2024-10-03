import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useBearStore } from "../../store";
import { MapPinIcon } from "react-native-heroicons/solid";

export default function HeroSection() {
  const {searchBar,currentData} = useBearStore((state) => state)
  // useEffect(() => {
  //     console.log(currentData)
  // },[currentData]);

  let classOpacity = searchBar.length == 0 ? "opacity-100" : "opacity-0";
  return (
    <View className={`flex flex-col items-center justify-center ${classOpacity}`}>
    <View className={`flex flex-row items-center mt-10 z-9 `} style={styles.shadow}>
        <MapPinIcon className="z-12"/>
        <Text className=" text-black p-2 text-3xl text-bold font-AfacadFlux "> {currentData?.data?.location?.country} </Text>
    </View>
      <Text className=" text-black p-2 text-2xl text-bold font-AfacadFluxLight " style={styles.shadow}> {currentData?.data?.current?.temp_c}{`\u00B0`} C </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.4,
        shadowRadius:5,
        elevation: 6,
    }
})