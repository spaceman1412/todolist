import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";

function Task(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <TouchableHighlight>
        <Image
          source={require("../assets/finish.png")}
          style={(styles.icon, { width: 30, height: 30 })}
        ></Image>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.onDelete(props.taskid)}>
        <Image
          source={require("../assets/delete.png")}
          style={[styles.icon, styles.edit]}
        ></Image>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DFDFDF",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 15,
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  text: {
    position: "absolute",
    alignSelf: "auto",
    fontSize: 16,
    right: "80%",
  },
});

export default Task;
