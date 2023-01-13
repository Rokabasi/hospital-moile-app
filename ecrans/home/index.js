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
import ActivityItem from "../../composants/activityItem/index.js";
import { fakeSymptomes } from "../../fakeData/fakeSymptome.js";
import SymptomeItem from "../../composants/symptomeItem/index.js";
import { fakeDoctor } from "../../fakeData/fakeDoctor.js";

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
          return <ActivityItem item={item} />;
        }}
      />

      {/* fin liste des activités */}

      {/* Liste des symptomes */}

      <View style={dashboardStyles.title}>
        <Text style={dashboardStyles.titleBold}>
          Quel symptomes avez-vous ?
        </Text>
      </View>

      <FlatList
        data={fakeSymptomes}
        key={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={dashboardStyles.scrollableList}
        renderItem={({ item }) => {
          return <SymptomeItem item={item} />;
        }}
      />

      {/* fIN Liste des symptomes */}
      <View style={dashboardStyles.title_space_between}>
        <Text style={dashboardStyles.titleBold}>Nos docteurs</Text>
        <TouchableOpacity>
          <Text style={dashboardStyles.link}>Afficher tout</Text>
        </TouchableOpacity>
      </View>

      <View style={dashboardStyles.doctorsContainer}>
        {fakeDoctor.splice(0,3).map((doctor, index) => {
          return (
            <TouchableOpacity
              key={doctor.id}
              style={dashboardStyles.doctorCard}
            >
              <Image
                source={{ url: `${doctor.img}` }}
                style={dashboardStyles.doctorImg}
              />
              <View style={dashboardStyles.doctorInfo}>
                <Text style={dashboardStyles.doctorName}>{doctor.fullName}</Text>
                <Text style={dashboardStyles.doctorSpeciality}>{doctor.speciality}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Home;
