import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  //get fired whenever the screen gets mounted
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://www.logo-designer.co/storage/2016/09/2016-deliveroo-logo-design-visual-identity.png",
          }}
          className=" h-7 w-7 p-5 "
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon color="#00CC88" size={20} />
          </Text>
        </View>

        <UserIcon color="#00CC88" size={32} />
      </View>

      {/* search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row items-center flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder="Restaurants" keyboardType="default" />
        </View>

        <View>
          <AdjustmentsVerticalIcon color="#00CC88" />
        </View>
      </View>

      {/* body */}

      <ScrollView className="bg-gray-100">
        {/* categories */}
        <Categories />
        {/* featured row */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
