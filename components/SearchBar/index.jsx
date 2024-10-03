import { useCallback, useState } from "react";
import { Text, View,TextInput, StyleSheet, ScrollView, Pressable } from "react-native";
import { useBearStore } from "../../store";
import * as Icons from "react-native-heroicons/solid";
import _ from "lodash";
const SearchBar = () =>{
    const {searchBar, setSearchBar, search, searchData, searchEnabled, setSearchEnabled ,selectionFetch, forecastFetch} = useBearStore((state) => state)
    let classOpacity = searchBar.length !== 0 ? "opacity-100" : "opacity-0";
    const debouncedSearch = useCallback(
        _.debounce((query) => {
          // Simulate an API call with the search query
          console.log("Searching for:", query);
          // Here, you would replace this with an actual API call
          search(query);
        }, 500), 
        []
      );

    const handleApi = (value) => {
        setSearchBar('')
        setSearchEnabled(false)
        selectionFetch(value);
        forecastFetch(value);
    }
  return (
    <View className="flex flex-col items-start justify-start relative">
      <View className="flex flex-row items-center gap-x-2 m-5 ">
        <TextInput
            value={searchBar}
            placeholder="Search"
            onChangeText={(text) => {
                setSearchBar(text)
                debouncedSearch(text);
            }}
            placeholderTextColor="rgb(240, 155, 219)"
            className={`flex-1 border-2 border-[#1a6ac5] p-2 rounded-[50%] shadow-md bg-slate-100 ${searchEnabled ? "opacity-100" : "opacity-0"}`}
        />
        <View className="flex flex-row items-center bg-[#1a6ac5] p-2 rounded-[50%] shadow-md" style={styles.shadow}>
            <Pressable 
            onPress={() => setSearchEnabled(!searchEnabled)}>
                <Icons.MagnifyingGlassIcon size={20} color="#fff"/>
            </Pressable>
           
        </View>
      </View>
      <View className={`text-black text-sm font-AfacadFluxLight  absolute top-14 bg-[#1a6ac5] w-[75%] mx-8 my-2 rounded-lg items-center justify-center z-10 ${classOpacity}`}> 
      {/* <ScrollView  contentContainerStyle={{ height: 50 }}  className="text-black text-sm font-AfacadFluxLight absolute top-0"> */}
      {searchData.data.map((item, index) => (
         <Pressable
         key={index}
        onPress={() => handleApi(item.country)}
        >
        <View className="border-b-2 border-gray-300 w-[90%] my-1 items-center justify-center">
           
                <Text className="my-2 text-white">{item.name}-{item.country}</Text>
            </View>
        </Pressable>
      ))}
      
       
        
    
      {/* </ScrollView> */}
      </View>
    </View>
  );
}


export default SearchBar;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius:5,
        elevation: 6,
    }
})