import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
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
        style={dashboardStyles.scrollableList}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={dashboardStyles.scrollableListItem}>
              <Image
                source={require("../../assets/images/medecine.png")}
                style={dashboardStyles.fakeDataImg}
              />

              <Text style={dashboardStyles.mainText}>{item.mainText}</Text>
              <Text style={dashboardStyles.subText}>{item.subText}</Text>
            </TouchableOpacity>
          );
        }}
      />

      {/* fin liste des activités */}
    </ScrollView>
  );
};

export default Home;
