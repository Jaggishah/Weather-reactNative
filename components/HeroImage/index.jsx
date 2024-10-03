import React from 'react'
import { Image, View } from 'react-native'

const Index = () => {
  return (
    <View className="flex flex-row items-center  mt-5">
        <Image
        source={require('../../assets/images/cloudRain.png')}
        style={{ height: 260, width: 260 }}
        resizeMode="contain"
        />
      
    </View>
  )
}

export default Index
