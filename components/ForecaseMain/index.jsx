import { useBearStore } from '@/store'
import React from 'react'
import { ScrollView, Text } from 'react-native'
import ScrollItem from './ScrollItem'

const Index = () => {
    const {forecastData:{data}} = useBearStore((state) => state)
    let dataForecast = data?.forecast?.forecastday
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
    
    }} >
        {dataForecast && dataForecast?.map((_, index) => (
            <ScrollItem key={index} 
            title={_.date}
            percent={_.day?.maxtemp_c}
            unit="°C"
            />
        ))}
    </ScrollView>
  )
}

export default Index
