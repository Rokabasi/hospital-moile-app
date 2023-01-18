import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { fakeConversation } from "../fakeData/fakeConversation";

const MessageDetails = ({ route, navigation }) => {
  const { item } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: item.fullname });
  });

  return (
    <View>
      <FlatList
        data={fakeConversation}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Text>{item.id}</Text>;
        }}
        showsVerticalScrollIndicator = {false}
      />
    </View>
  );
};

export default MessageDetails;
