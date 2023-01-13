import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./style.js"

const ActivityItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.scrollableListItem}>
      <Image
        source={item.img}
        style={styles.fakeDataImg}
      />

      <Text style={styles.mainText}>{item.mainText}</Text>
      <Text style={styles.subText}>{item.subText}</Text>
    </TouchableOpacity>
  );
};

export default ActivityItem;
