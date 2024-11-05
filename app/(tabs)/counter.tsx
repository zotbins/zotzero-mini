import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.viewStyle}>
      <Text>Counter: {count}</Text>
      <View>
        <Pressable style = {styles.button} onPress={() => setCount(count + 1)}>
          <Text style = {styles.buttonText}> Increase </Text>
        </Pressable>
        <Pressable style = {styles.button} onPress={() => setCount(count - 1)}>
          <Text style = {styles.buttonText}> Decrease </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    margin : 2.5,
    paddingHorizontal: 65,
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: 'center'
  }
})