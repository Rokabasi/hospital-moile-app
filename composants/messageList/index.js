import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./style";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const MessageList = ({ item,navigation }) => {
  return (
    <TouchableOpacity style={styles.messageContainer} onPress={()=>navigation.navigate('messageDetails',{item})}>
      <Image
        source={{
          url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        }}
        style={styles.messageImg}
      />
      <View style={styles.messageInfo}>
        <View style={styles.date_name}>
          <Text style={styles.name}>{item.fullname}</Text>
          <Text>{ dayjs(item.date).fromNow(true)}</Text>
        </View>
        <Text>{item.last_message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessageList;
