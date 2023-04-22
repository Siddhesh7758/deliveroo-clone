import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CC88" size={20} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {/* restaurant cards */}
        <RestaurantCard
          id={123}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-g9s-v-ShOnSO0sErIM4U6PL4cO4jF6Kovw&usqp=CAU"
          title="Yoo!!"
          rating="4.5"
          genre="Japanese"
          address="123 street"
          short_description="short description"
          dishes={[]}
          long={20}
          lat={20}
        />
        <RestaurantCard
          id={123}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-g9s-v-ShOnSO0sErIM4U6PL4cO4jF6Kovw&usqp=CAU"
          title="Yoo!!"
          rating="4.5"
          genre="Japanese"
          address="123 street"
          short_description="short description"
          dishes={[]}
          long={20}
          lat={20}
        />
        <RestaurantCard
          id={123}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-g9s-v-ShOnSO0sErIM4U6PL4cO4jF6Kovw&usqp=CAU"
          title="Yoo!!"
          rating="4.5"
          genre="Japanese"
          address="123 street"
          short_description="short description"
          dishes={[]}
          long={20}
          lat={20}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
