import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import styles from "./style";
import { fakeSettings } from "../../fakeData/fakeSetting";
import SettingItem from "../../composants/settingItem";

const Setting = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/profil.jpg")}
          style={styles.image}
        />

        <View style={styles.userInfo}>
          <Text style={styles.userName}>Romain Kabashi</Text>
          <Text style={styles.userEmail}>romainkabashi@gmail.com</Text>
          <Text>+243 819 600 518</Text>
        </View>
      </View>

      <FlatList data={fakeSettings} keyExtractor={item=>item.id} showsVerticalScrollIndicator={false} renderItem={({item}) =>{
        return <SettingItem item={item}/>
      }}/>

      <Text></Text>
    </View>
  );
};

export default Setting;
