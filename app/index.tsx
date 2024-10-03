import { Text, View,SafeAreaView, StyleSheet ,} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useBearStore } from "../store";
import SearchBar from "../components/SearchBar";
import HeroSection from "../components/heroSection";
import HeroSectionImage from "../components/HeroImage";
import HeroSubImage from "../components/HeroSubSection";
import Forecast from "../components/Forecast";
import ForecastMain from "../components/ForecaseMain";
import { useEffect } from "react";

export default function Index() {
  const { selectionFetch, forecastFetch } = useBearStore((state) => state)
  const [fontsLoaded] = useFonts({
    'AfacadFlux': require('../assets/fonts/AfacadFlux-Bold.ttf'),
    'AfacadFluxLight': require('../assets/fonts/AfacadFlux-Light.ttf'),
  });

  useEffect(() => {
    selectionFetch()
    forecastFetch()
  },[]);
  return (
    <SafeAreaView className="flex-1">
        <View className="flex-1 items-center ">
        <StatusBar style="dark" />
        <SearchBar/>
        <HeroSection/>
        <HeroSectionImage/>
        <HeroSubImage/>
        <Forecast/>
        <ForecastMain/>
      </View>
     
    </SafeAreaView>
  );
}


