import { View, Text, FlatList } from "react-native";
import React from "react";
import { fakeChats } from "../../fakeData/fakeChat";
import MessageList from "../../composants/messageList";
import styles from "./style";

const Message = ({navigation}) => {
  return (
    <FlatList
      data={fakeChats}
      keyExtractor={(Item) => Item.id}
      renderItem={({ item }) => {
        return <MessageList item = {item} navigation={navigation}/>
      }}
      style = {styles.root}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Message;
