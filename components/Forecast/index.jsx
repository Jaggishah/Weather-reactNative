import React from 'react'
import { Text, View } from 'react-native'
import { ChevronDoubleRightIcon } from "react-native-heroicons/solid";
function Index() {
  return (
    <View className="flex w-full flex-row  items-center mt-4">
        <View className="flex justify-start w-full flex-row mx-6 items-center">
            <Text className=" text-black p-2 text-xl text-bold font-AfacadFlux ">  
                Future Forecast
            </Text>
            <ChevronDoubleRightIcon size={15} />
        </View>
        
    </View>
  )
}

export default Index
