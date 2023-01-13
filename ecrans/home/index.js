import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";
import dashboardStyles from "./style.js";
import { fakeActivity } from "../../fakeData/fakeActivity.js";

const Home = () => {
  return (
    <ScrollView>
      {/*debut header */}
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.userName}>Romain kabasi</Text>
        <Image
          source={require("../../assets/profil.jpg")}
          style={dashboardStyles.userImg}
        />
      </View>

      {/*fin header */}

      {/* liste des activites */}

      <FlatList
        data={fakeActivity}
        key={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.mainText}</Text>
            </View>
          );
        }}
      />

      {/* fin liste des activités */}
    </ScrollView>
  );
};

export default Home;
