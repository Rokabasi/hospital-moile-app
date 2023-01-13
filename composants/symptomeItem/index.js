import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./style";

const SymptomeItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View>
        <Image source={item.img} style={styles.itemImg} />

        {/* <Text style={styles.mainText}>{item.mainText}</Text> */}
        <Text style={styles.subText}>{item.libelle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SymptomeItem;
