import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* category card */}
      <CategoryCard
        title="testing"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-g9s-v-ShOnSO0sErIM4U6PL4cO4jF6Kovw&usqp=CAU"
      />
      <CategoryCard
        title="testing"
        imageUrl="https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/gray/hero/2.jpg?tr=w-3840,q-50"
      />
      <CategoryCard
        title="testing"
        imageUrl="https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna-800x530.png"
      />
      <CategoryCard
        title="testing"
        imageUrl="https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna-800x530.png"
      />
      <CategoryCard
        title="testing"
        imageUrl="https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna-800x530.png"
      />
      <CategoryCard
        title="testing"
        imageUrl="https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna-800x530.png"
      />
    </ScrollView>
  );
};

export default Categories;
