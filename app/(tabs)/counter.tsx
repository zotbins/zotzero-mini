import React from "react";
import { View, Text, Pressable } from "react-native";

export default function Counter() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Let's make a counter here.</Text>
    </View>
  );
}
