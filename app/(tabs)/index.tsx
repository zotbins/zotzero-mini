import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Index() {

  const navigateToCounter = () => {
    router.navigate("/counter");
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to ZotBins!</Text>
      <TouchableOpacity 
        onPress={navigateToCounter}
        style={{
          backgroundColor: "orange",
          borderRadius: 5,
          margin: 10,
          paddingHorizontal: 55,
          paddingVertical: 20
        }}
      >
        <Text
          style={{
            color: "white"
          }}>
          View Counter
        </Text>
      </TouchableOpacity>

    </View>
  );
}
